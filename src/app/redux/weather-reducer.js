import { openWeatherMapApi } from "../api/open-weather-map-api";

const SET_WEATHER_DATA = "Axbit-App/Weather/SET_WEATHER_DATA";
const SET_ERROR_MESSAGE = "Axbit-App/Weather/SET_ERROR_MESSAGE";

let initialState = {
    weatherData: {
        id: '',
        name: '',
        coord: {
            lat: '',
            lon: ''
        },
        main: {
            temp: '',
            feels_like: '',
            temp_min: '',
            temp_max: '',
            pressure: '',
            humidity: '',
            grnd_level: '',
            sea_level: ''
        },
        dt: '',
        wind: {
            speed: '',
            deg: ''
        },
        sys: {
            country: ''
        },
        rain: '',
        snow: '',
        clouds: {
            all: ''
        },
        weather: []
    },
    errorMessage: ''
}

let weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.data.weatherData,
                errorMessage: '',
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.data.errorMes
            };
        default:
            return state;
    }
};

//ActionCreator
const setWeatherData = (weatherData) => ({
    type: SET_WEATHER_DATA,
    data: { weatherData }
});
const setErrorMessage = (errorMes) => ({
    type: SET_ERROR_MESSAGE,
    data: { errorMes }
});
//ThunkCreator
export const getWeatherData = (city) => async (dispatch) => {
    const response = await openWeatherMapApi.findWeather(city);
    if (typeof response === 'string') {
        dispatch(setErrorMessage(response))
    } else if (response.count === 0) {
        dispatch(setErrorMessage(`Города ${city} не существует!!!`))
    }  else {
        dispatch(setWeatherData(response.list[0]))
    };
};

export default weatherReducer;