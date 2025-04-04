import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';



/**
 * 92919086c727b8f4fb202e94164fc9a5
 * 1. 실행되자마자 현재 위치기반의 날씨가 보인다. 
 * 2. 도시명, 섭씨, 화씨, 날씨상태 
 * 3. 5개의 버튼 존재 - 현재위치, 4개는 다른도시 
 * 4. 도시버튼을 클릭하면 도시별 날씨가 나옴
 * 5. 현재위치 버튼을 누르면 다시 1번의 날씨가 보인다(현재위치의 날씨) 
 * 6. 로딩스피너 필요.
 */


function App() {

  const [weather, setWeather] = useState(null); 

  //-- 첫 실행
  useEffect(() => {
    getCurrentLocation(); 
  },[]);

  const getCurrentLocation = () => {
    console.log('getCurrentLocation!');
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lng = position.coords.longitude; 
        let lat = position.coords.latitude; 
        getWeatherByCurrentLocation(lat, lng);
      })
    } else {
      console.log('geolocation 지원 안하는 브라우져'); 
    }
  }

  const getWeatherByCurrentLocation = async (lat, lng) => {
    let endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c927a1e61951cab35cd1418ae2f716c9`;
    let response = await fetch(endPoint);
    let data = await response.json();
    console.log(endPoint);
    setWeather(data);
  }

  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather}/>
        <WeatherButton/>
      </div>
    </div>
  )
}

export default App