import { APIKeyBasePair, WeatherData } from "./Interfaces";

export const getWeatherData = async (api: APIKeyBasePair, search: string): Promise<WeatherData | undefined> => {
    try {
        const rawData = await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`);
        const weatherData: WeatherData = await rawData.json() as WeatherData;
        return weatherData;
    } catch (err) {
        console.error(err);
    }
    return undefined;
}