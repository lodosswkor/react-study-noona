import React from 'react'
import { Button } from 'react-bootstrap'



const WeatherButton = ({cities, city, setCity}) => {
  
  return (
    <div className={'mt20 col-lg-12 d-flex justify-content-center'}>
        <Button variant={city == '' ? "secondary" : "warning"}  onClick={() => setCity('')} className={'mr10 col-lg-2'}>Current Location</Button>
        {cities.map((item) => {
         return <Button variant={city !== item ? "warning" : "secondary"} onClick={() => setCity(item)} className={'mr10 col-lg-2'} >{item}</Button>
        })}
    </div>
  )
}

export default WeatherButton