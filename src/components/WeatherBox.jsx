import React from 'react'


const WeatherBox = ({ weather, apiStatus }) => {

  //--props.weather -> { weather } 구조분해
  
  const { isError, errMessage } = apiStatus; 

  return (
    <div className="weather-box">
        {isError ? (
          <>
             <div>{errMessage}</div>
          </>
        ) : (
          <>
             <div className={'div-center mb30'}>
                <h4>{weather?.name}{/* weather && weather.name */}</h4>
              </div>
             <h2>{weather?.main.temp}°C / {weather && (weather.main.temp * 1.8 + 32).toFixed(1)}°F </h2>
             {/* <h3>{weather?.weather[0].description}</h3>
             { console.log(weather?.weather[0].icon) }; */}
             <div className={'div-center'}>
               <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} style={{'height':'130px'}} />   
               <h4>{weather?.weather[0].description}</h4>          
             </div>
          </>
        )}
     
    </div>
  )
}

export default WeatherBox