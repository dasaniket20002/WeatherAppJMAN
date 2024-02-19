import { APIKeyBasePair, WeatherData } from "./Interfaces";

// function to fetch weather data from the API
export const getWeatherData = async (
  api: APIKeyBasePair, // API key and base URL pair
  search: string // loc to search for weather data
): Promise<WeatherData> => {

  // fetch the weather data from the API
  const rawData = await fetch(
    `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
  );

  // return as WeatherData interface
  const weatherData: WeatherData = (await rawData.json()) as WeatherData;
  return weatherData;
};
