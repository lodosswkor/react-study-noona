import './App.css'
import { useState, useEffect } from 'react';
import Timer from './Timer';

function App() {

  const [count, setCount] = useState(0); 
  const [value, setValue] = useState(0); 
  const [showTimer, setShowTimer] = useState(true); 

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setValue((prev) => prev + 1)
  };

  const handleClick2 = () => {
    setValue((prev) => prev + 1)
  }

  // app mounted
  useEffect(()=>{
    console.log('app mounted');
    //-- 앱초기작업 ex) api 호출 
  }, [])


  //-- updating
  useEffect(()=>{
    console.log("update"); 
  }, [count, value]); 


  //-- updating
  useEffect(()=>{
    console.log("updated 'value'"); 
  }, [value]); 

  return (
    <>
    <button onClick={handleClick2}>value : {value}</button>
    <button onClick={handleClick}>count : {count}</button>
    <button onClick={()=>setShowTimer((prev)=>!prev)}>타이머 보이기</button>
    {console.log('render')}
    {showTimer && <Timer/>}
    </>
  )
}

export default App
