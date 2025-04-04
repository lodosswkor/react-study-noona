import React from 'react'
import { useEffect } from 'react';

const Timer = () => {
  //-- terminated 
  useEffect(() => {
    const interval = setInterval(() => {console.log('count 실행중')}, 1000);

    return ()=>{
      console.log("타이머 정리됨");
      clearInterval(interval);
    };
  }, [])

  return (
    <div>Timer</div>
  )
}

export default Timer