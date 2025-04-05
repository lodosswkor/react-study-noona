import React from 'react'
import { Button } from 'react-bootstrap'



const WeatherButton = ({cities, city, setCity}) => {
  
  return (
    <div className={'mt20'}>
        <Button variant={city == '' ? "secondary" : "warning"}  onClick={() => setCity('')} className={'mr10'}>Current Location</Button>
        {cities.map((item) => {
         return <Button variant={city !== item ? "warning" : "secondary"} onClick={() => setCity(item)} className={'mr10'}>{item}</Button>
        })}
    </div>
  )
}

export default WeatherButton