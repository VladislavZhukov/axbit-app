import React from "react";
import wm from "./Weather.module.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/all-action";
import WeatherForm from "./WeatherForm/WeatherForm";

const Weather = () => {
  const cityName = useSelector((state) => state.weather.weatherData.name);
  const currentTemperature = useSelector(
    (state) => state.weather.weatherData.main.temp
  );
  const temperatureFeelsLike = useSelector(
    (state) => state.weather.weatherData.main.feels_like
  );
  const humidity = useSelector(
    (state) => state.weather.weatherData.main.humidity
  );
  const pressure = useSelector(
    (state) => state.weather.weatherData.main.pressure
  );
  const errorMessage = useSelector((state) => state.weather.errorMessage);

  const dispatch = useDispatch();

  const submit = (formData) => {
    dispatch(allActions.getWeatherData(formData.cityField));
    formData.cityField = "";
  };

  return (
    <div>
      <div>
        <p>Погода</p>
      </div>
      <div>
        <WeatherForm onSubmit={submit} />
      </div>
      {errorMessage && (
        <div>
          <div className={wm.weather__errorMes}>{errorMessage}</div>
        </div>
      )}
      {cityName && (
        <div>
          <div>Город: {cityName}</div>
          <div>Температура: {currentTemperature}°C</div>
          <div>Ощущается как: {temperatureFeelsLike}°C</div>
          <div>Давление: {pressure} мм рт. ст.</div>
          <div>Влажность: {humidity}%</div>
        </div>
      )}
    </div>
  );
};

export default Weather;
