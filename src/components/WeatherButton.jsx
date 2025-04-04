import React from 'react'
import { Button } from 'react-bootstrap'



const WeatherButton = ({onClickFunc}) => {
  return (
    <div>
        <Button variant="warning">Current Location</Button>
        <Button variant="warning" onClick={() => onClickFunc('Seoul')}>Seoul</Button>
        <Button variant="warning" onClick={() => onClickFunc('New York')}>New York</Button>
    </div>
  )
}

export default WeatherButton