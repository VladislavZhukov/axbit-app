import axios from "axios";

const instance = axios.create({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com/',
    headers: {
        'x-rapidapi-key': '',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }
});
export const openWeatherMapApi = {
    async findWeather(city) {
        try {
            const response = await instance.get('find', {
                params: {
                    q: city,
                    cnt: 1,
                    mode: null,
                    lon: 0,
                    type: 'accurate',
                    lat: 0,
                    units: 'metric'
                }
            });
            return response.data;
        } catch (e) {
            return e.message;
        }
    }
};