// import neccessary frameworks and functions
import React, { useEffect, useState } from "react";
import { APIKeyBasePair, WeatherData } from "../ts/Interfaces";
import { getWeatherData } from "../ts/WeatherAPI";
import { unixTo24hr } from "../ts/Utilities";
import { useLocation } from "react-router";
import InputField from "./InputField";
import Maps from "./Maps";
import { useSpeechSynthesis } from "react-speech-kit";
import { useNavigate } from "react-router-dom";

const WeatherDisplay = () => {
    const { state } = useLocation();
    const { speak } = useSpeechSynthesis();
    const nav = useNavigate();

    // redirect to register page if state is not available
    if (!state) {
        nav('/register');
    }

    const [location, setLocation] = useState<string>(
        state ? state.city : "chennai"
    );
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [isEditingLocation, setEditingLocation] = useState<boolean>(false);

    // fetch waether data from API when location changes
    const getWeatherDataFromAPI = async (location: string): Promise<boolean> => {
        const api: APIKeyBasePair = {
            key: "195887370f9dafce79b410c97c2925f5",
            base: "https://api.openweathermap.org/data/2.5/",
        } as APIKeyBasePair;
        const res = await getWeatherData(api, location);
        if (res.cod !== 200) return false;
        setWeatherData(res as WeatherData);
        return true;
    };
    useEffect(() => {
        getWeatherDataFromAPI(location);
    }, [location]);

    // toggle editing location mode
    const onPlusButtonClicked = async () => {
        setEditingLocation(!isEditingLocation);
    };

    // audio/speak weather information
    const onSpeakButtonClicked = async () => {
        const data = [
            "weather",
            "temperature, " +
            Math.round(weatherData?.main.temp as number) +
            " degree celsius",
            "Pressure, " +
            Math.round(weatherData?.main.pressure as number) +
            " milli bar",
            "Humidity, " +
            Math.round(weatherData?.main.humidity as number) +
            " percent",
            "visibility, " +
            Math.round(weatherData?.visibility as number / 1000) +
            " kilometers",
            "Wind",
            Math.round(weatherData?.wind.deg as number) + " degrees",
            "speed, " + (weatherData?.wind.speed as number) + " knots",
        ];
        data.forEach((item) => {
            speak({ text: item });
        });
    };

    return (
        <>
            {/* main weather display section */}
            <div className="col-span-full row-span-full row-start-2 grid grid-cols-4 px-12 pt-4 pb-12 gap-4">
                {/* greeting */}
                <p className="row-start-1 col-span-full text-primary-col text-center text-xs ">
                    Hi&nbsp;
                    <span className="font-medium">{state ? state.name : "Guest"}</span>!
                </p>

                
                {/* location display and controls */}
                <div className="col-span-full row-start-2 w-full flex flex-col md:grid md:grid-cols-3 gap-4 place-items-center text-primary-col p-4 backdrop-blur-md shadow-lg">
                    <span className="col-start-2 row-start-1 self-center flex items-center gap-2">
                        <h1 className="text-base font-normal flex items-center ">
                            <i className="pi pi-map-marker" />
                            &nbsp;Location:
                        </h1>

                        {/* conditionally render input field for editing location */}
                        {isEditingLocation ? (
                            <InputField
                                fieldID="locInput"
                                fieldName="Location"
                                fieldType="string"
                                value={location}
                                setterFunction={setLocation}
                            />
                        ) : (
                            <h1 className="text-2xl font-medium">
                                {weatherData?.name}&nbsp;({weatherData?.sys.country})
                            </h1>
                        )}
                    </span>

                    {/* buttons for editing location and speaking weather information */}
                    <span className="row-start-1 col-start-3 text-2xl justify-self-end self-center flex gap-4">
                        <i
                            className="pi pi-plus-circle cursor-pointer"
                            onClick={() => {
                                onPlusButtonClicked();
                            }}
                        />
                        <i
                            className="pi pi-volume-up cursor-pointer"
                            onClick={() => {
                                onSpeakButtonClicked();
                            }}
                        />
                    </span>
                </div>

                
                {/* weather information display */}
                <div className="col-start-1 row-start-3 col-span-full md:col-span-2 p-4 backdrop-blur-md shadow-lg grid auto-rows-max w-full self-center">
                    <h1 className="text-md font-semibold text-primary-col text-center pb-4">
                        Weather
                    </h1>
                    <section className="py-4 justify-self-center">
                        <span className="flex flex-col lg:flex-row gap-6 items-center">
                            <p className="bg-primary-col text-white text-xs flex items-center text-center p-2 rounded">
                                {`>${Math.round(weatherData?.main.temp_max as number)}°C`}
                                <br />
                                {`<${Math.round(weatherData?.main.temp_min as number)}°C`}
                            </p>
                            <h1 className="font-bold text-3xl text-primary-col">
                                {Math.round(weatherData?.main.temp as number)}°C
                            </h1>
                            <p className="bg-primary-col text-white text-xs flex items-center text-center p-2 rounded">
                                Feels&nbsp;Like:
                                <br />
                                {Math.round(weatherData?.main.feels_like as number)}°C
                            </p>
                        </span>
                        <p className="text-center capitalize pt-3 text-primary-col font-medium">
                            {weatherData?.weather[0].description}
                        </p>
                    </section>

                    
                    {/* additional weather information */}
                    <section className="flex flex-col lg:flex-row justify-around items-center gap-4 py-4 text-center text-primary-col">
                        <span className="w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg">
                            <h2 className="text-sm p-1">Pressure</h2>
                            <p className="font-semibold text-lg">
                                {weatherData?.main.pressure}&nbsp;mb
                            </p>
                        </span>
                        <span className="w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg">
                            <h2 className="text-sm p-1">Humidity</h2>
                            <p className="font-semibold text-lg">
                                {weatherData?.main.humidity}%
                            </p>
                        </span>
                        <span className="w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg">
                            <h2 className="text-sm p-1">Visibility</h2>
                            <p className="font-semibold text-lg">
                                {weatherData ? weatherData.visibility / 1000 : ""}&nbsp;km
                            </p>
                        </span>
                    </section>
                </div>

                <div className="w-full md:col-start-3 md:row-start-3 col-span-full flex flex-col gap-4">
                    <div className="p-4 backdrop-blur-md shadow-lg grid auto-rows-max">
                        <h1 className="text-md font-semibold text-primary-col text-center pb-4">
                            Wind
                        </h1>
                        <section className="flex flex-col lg:flex-row justify-around items-center gap-4 py-4 text-center text-primary-col">
                            <span className="w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg">
                                <h2 className="text-sm p-1">Degrees</h2>
                                <p className="font-semibold text-lg">
                                    {weatherData?.wind.deg}°
                                </p>
                            </span>
                            <span className="w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg">
                                <h2 className="text-sm p-1">Speed</h2>
                                <p className="font-semibold text-lg">
                                    {weatherData?.wind.speed}&nbsp;kt
                                </p>
                            </span>
                            {weatherData?.wind.gust ? (
                                <span className="w-[7rem] p-1 lg:p-4 bg-accent-col-transp rounded shadow-md hover:shadow-lg">
                                    <h2 className="text-sm p-1">Gust</h2>
                                    <p className="font-semibold text-lg">
                                        {weatherData?.wind.gust}&nbsp;kt
                                    </p>
                                </span>
                            ) : (
                                <></>
                            )}
                        </section>
                    </div>

                    <div className="p-4 backdrop-blur-md shadow-lg grid auto-rows-max gap-4 text-primary-col">
                        <span className="w-full px-2 py-1 flex items-center lg:p-4">
                            <i className="pi pi-sun text-xl pr-3" />
                            <h2 className="text-sm p-1">Sunrise: </h2>
                            <p className="font-semibold text-lg">
                                {weatherData?.sys.sunrise
                                    ? unixTo24hr(weatherData?.sys.sunrise + weatherData?.timezone)
                                    : ""}
                            </p>
                        </span>
                        <span className="w-full px-2 py-1 flex items-center lg:p-4">
                            <i className="pi pi-moon pr-3" />
                            <h2 className="text-sm p-1">&nbsp;Sunset: </h2>
                            <p className="font-semibold text-lg">
                                {weatherData?.sys.sunset
                                    ? unixTo24hr(weatherData?.sys.sunset + weatherData?.timezone)
                                    : ""}
                            </p>
                        </span>
                    </div>
                </div>

                <div className="col-span-full p-8 backdrop-blur-md shadow-lg rounded">
                    <Maps
                        latitude={weatherData?.coord.lat ? weatherData?.coord.lat : 0}
                        longitude={weatherData?.coord.lon ? weatherData?.coord.lon : 0}
                    />
                </div>
            </div>
        </>
    );
};

export default WeatherDisplay;
