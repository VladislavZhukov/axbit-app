import React from "react";
import wfm from "./WeatherForm.module.css";
import { useForm } from "react-hook-form";

const WeatherForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div className={wfm.weatherForm}>
        <input className={wfm.weatherForm__cityField} {...register("cityField", { required: true })} />
      </div>
      <div>{errors.cityField && <span className={wfm.weatherForm__errorMes}>Это поле обязательно</span>}</div>
      <div>
        <button type="submit" className={wfm.weatherForm__setButton}>
          Показать погоду
        </button>
      </div>
    </form>
  );
};

export default WeatherForm;
