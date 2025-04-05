import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import { ClipLoader } from 'react-spinners';



/**
 * 92919086c727b8f4fb202e94164fc9a5
 * 1. 실행되자마자 현재 위치기반의 날씨가 보인다. 
 * 2. 도시명, 섭씨, 화씨, 날씨상태 
 * 3. 5개의 버튼 존재 - 현재위치, 4개는 다른도시 
 * 4. 도시버튼을 클릭하면 도시별 날씨가 나옴
 * 5. 현재위치 버튼을 누르면 다시 1번의 날씨가 보인다(현재위치의 날씨) 
 * 6. 로딩스피너 필요.
 */


const cities = ['Seoul', 'new york', 'tokyo']; 
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function App() {

  const [weather, setWeather] = useState(null); 
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState({
    isError : false, 
    errMessage : ''
  });

  //-- 첫 실행
  // useEffect(() => {
  //   getCurrentLocation(); 
  // },[]);

  useEffect(() => {
    if(city === '') {
     getCurrentLocation(); 
    } else {
      getWeatherByCityName(city); 
    }
  }, [city]);

  

  const getCurrentLocation = () => {
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
    
    setLoading(true); 
    try {
      let endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`;
      let response = await fetch(endPoint);
      if(!response.ok) {
        let message = `status : ${response.status}, statusText : ${response.statusText}`
        throw new Error(message);
      }
      let data = await response.json();
      setWeather(data);
      setApiStatus((prev) => { return {...prev, isError: false, errMessage: ''} });
    } catch(err) {
      setApiStatus((prev) => { return {...prev, isError: true, errMessage: err.message} });
    } finally {
      setLoading(false); 
    }

  }

  const getWeatherByCityName = async (cityName) => {

    setLoading(true); 

    try {
      let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
      let response = await fetch(endPoint);
      if(!response.ok) {
        let message = `status : ${response.status}, statusText : ${response.statusText}`
        throw new Error(message);
      }
      let data = await response.json();
      setWeather(data);
      setApiStatus((prev) => { return {...prev, isError: false, errMessage: ''} });
    } catch(err) {
      setApiStatus((prev) => { return {...prev, isError: true, errMessage: err.message} });
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div>
      <div className="container black-han-sans-regular">
      {loading? ( <ClipLoader
          color={'red'}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> ) : (
          <>
            <WeatherBox weather={weather} apiStatus={apiStatus}/>
            <WeatherButton cities={cities} city={city} setCity={setCity} getWeatherByCityName={getWeatherByCityName}/>
          </>
        )}
      </div>
    </div>
  )
}

export default App