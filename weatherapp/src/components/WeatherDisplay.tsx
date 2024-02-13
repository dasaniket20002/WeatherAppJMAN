import React, { useEffect, useState } from 'react'
import { APIKeyBasePair, WeatherData } from '../ts/Interfaces';
import { getWeatherData } from '../ts/WeatherAPI';

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
            <div className='col-span-full row-span-full row-start-2 grid grid-cols-4 px-12 py-4 gap-4'>
                <div className='col-start-1 row-start-1 col-span-full md:col-span-2 p-4 backdrop-blur-md shadow-lg grid auto-rows-max'>
                    <h1 className='text-md font-semibold text-primary-col text-center pb-8'>Weather</h1>
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
                            <p className='font-semibold text-lg'>{weatherData?.main.pressure}</p>
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
            </div>
        </>
    )
}

export default WeatherDisplay