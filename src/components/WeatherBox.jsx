import React from 'react'

const WeatherBox = ({ weather }) => {

    //--props.weather -> { weather } 구조분해

    console.log(weather);

  return (
    <div className="weather-box">
        <div>{weather?.name}{/* weather && weather.name */}</div>
        <h2>{weather?.main.temp}도 / {weather && (weather.main.temp * 1.8 + 32).toFixed(1)}화씨</h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox