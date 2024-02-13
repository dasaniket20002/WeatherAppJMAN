import React, { useEffect, useState } from 'react'
import { APIKeyBasePair, WeatherData } from '../ts/Interfaces';
import { getWeatherData } from '../ts/WeatherAPI';
import { unixTo24hr } from '../ts/Utilities';

const WeatherDisplay = () => {
    const location: string = 'chennai'; // TODO: fetch from db

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        const api: APIKeyBasePair = {
            key: "195887370f9dafce79b410c97c2925f5",
            base: "https://api.openweathermap.org/data/2.5/",
        } as APIKeyBasePair;
        getWeatherData(api, location).then((res) => { setWeatherData(res as WeatherData) })
    }, []);

    useEffect(() => {
        console.log(weatherData);
    }, [weatherData]);

    return (
        <>
            <div className='col-span-full row-span-full row-start-2 grid grid-cols-4 px-12 pt-4 pb-12 gap-4'>
                <div className='col-span-full row-start-1 w-full flex justify-center items-center gap-4 text-primary-col p-4 backdrop-blur-md shadow-lg'>
                    <h1 className='text-base font-normal flex items-center'><i className='pi pi-map-marker' />&nbsp;Location:</h1><h1 className='text-2xl font-medium'>{weatherData?.name}&nbsp;({weatherData?.sys.country})</h1>
                </div>

                <div className='col-start-1 row-start-2 col-span-full md:col-span-2 p-4 backdrop-blur-md shadow-lg grid auto-rows-max'>
                    <h1 className='text-md font-semibold text-primary-col text-center pb-4'>Weather</h1>
                    <section className='py-4 justify-self-center'>
                        <span className='flex gap-6 items-center'>
                            <h1 className='font-bold text-3xl text-primary-col'>{weatherData?.main.temp}°C</h1>
                            <p className='bg-primary-col text-white text-xs flex items-center text-center p-2 rounded'>Feels&nbsp;Like:<br/>{weatherData?.main.feels_like}°C</p>
                        </span>
                        <p className='text-center capitalize pt-3 text-primary-col font-medium'>{weatherData?.weather[0].description}</p>
                    </section>
                    <section className='flex flex-col lg:flex-row justify-around items-center gap-4 py-4 text-center text-primary-col'>
                        <span className='w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg'>
                            <h2 className='text-sm p-1'>Pressure</h2>
                            <p className='font-semibold text-lg'>{weatherData?.main.pressure}&nbsp;mb</p>
                        </span>
                        <span className='w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg'>
                            <h2 className='text-sm p-1'>Humidity</h2>
                            <p className='font-semibold text-lg'>{weatherData?.main.humidity}%</p>
                        </span>
                        <span className='w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg'>
                            <h2 className='text-sm p-1'>Visibility</h2>
                            <p className='font-semibold text-lg'>{weatherData ? weatherData.visibility / 1000 : ''}&nbsp;km</p>
                        </span>
                    </section>
                </div>

                <div className='w-full md:col-start-3 md:row-start-2 col-span-full flex flex-col gap-4'>

                    <div className='p-4 backdrop-blur-md shadow-lg grid auto-rows-max'>
                        <h1 className='text-md font-semibold text-primary-col text-center pb-4'>Wind</h1>
                        <section className='flex flex-col lg:flex-row justify-around items-center gap-4 py-4 text-center text-primary-col'>
                            <span className='w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg'>
                                <h2 className='text-sm p-1'>Degrees</h2>
                                <p className='font-semibold text-lg'>{weatherData?.wind.deg}°</p>
                            </span>
                            <span className='w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg'>
                                <h2 className='text-sm p-1'>Speed</h2>
                                <p className='font-semibold text-lg'>{weatherData?.wind.speed}&nbsp;kt</p>
                            </span>
                            { weatherData?.wind.gust ? <span className='w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg'>
                                <h2 className='text-sm p-1'>Gust</h2>
                                <p className='font-semibold text-lg'>{weatherData?.wind.gust}&nbsp;kt</p>
                            </span> : <></>}

                        </section>
                    </div>

                    <div className='p-4 backdrop-blur-md shadow-lg grid auto-rows-max gap-4 text-primary-col'>
                        <span className='w-full px-2 py-1 flex items-center lg:p-4'>
                        <i className='pi pi-sun text-xl pr-3'/>
                            <h2 className='text-sm p-1'>Sunrise: </h2>
                            <p className='font-semibold text-lg'>{weatherData?.sys.sunrise ? unixTo24hr(weatherData?.sys.sunrise + weatherData?.timezone) : ''}</p>
                        </span>
                        <span className='w-full px-2 py-1 flex items-center lg:p-4'>
                            <i className='pi pi-moon pr-3'/>
                            <h2 className='text-sm p-1'>&nbsp;Sunset: </h2>
                            <p className='font-semibold text-lg'>{weatherData?.sys.sunset ? unixTo24hr(weatherData?.sys.sunset + weatherData?.timezone) : ''}</p>
                        </span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WeatherDisplay