// interface for weather data returned by the API
export interface WeatherData {
    base: string;
    clouds: {
        all: number;
    }
    cod: number;
    coord: {
        lon: number;
        lat: number;
    }
    dt: number;
    id:number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    }
    name: string;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    }
    timezone: number;
    visibility: number;
    weather: [
        {
            description: string;
            icon: string;
            id: number;
            main: string;
        }
    ]
    wind: {
        speed: number;
        deg: number;
        gust: number;
    }
}

// interface for API and base URL pair
export interface APIKeyBasePair {
    key: string;
    base: string;
}

// interface for user data W/O password
export interface UserDataWithoutPassword {
    name: string;
    email: string;
    city: string;
}