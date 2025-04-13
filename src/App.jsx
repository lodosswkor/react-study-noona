import './App.css'
import { useState } from 'react'
import CountBox from './components/CountBox'
import counterStore from './stores/counterStore'

function App() {
  const [inputNum, setInputNum] = useState(0)
  const {increase, increaseBy, reset} = counterStore();

  const onChange = (e) => {
    setInputNum(e.target.value); 
  } 

  const onKeyDown = (e) => {
    if(e.keyCode !== 13) return;
    increaseByNum();
  }

  const increaseByNum = () => {
      let num = parseInt(inputNum); 
      if(isNaN(num)) {
        alert('숫자를 입력해 주세요');
        return; 
      }
      increaseBy(num);
  }

  return (
    <>
      {/* <h1>count : {count}</h1> */}
        <input type="number" value={inputNum} onChange={onChange} onKeyDown={(e) => onKeyDown(e)}/>
        <CountBox/>
        <button onClick={() => reset()}>초기화</button>&nbsp;
        <button onClick={increase}>하나씩 증가</button>&nbsp;
        <button onClick={() => increaseBy(10)}>10씩 증가</button>&nbsp;
        <button onClick={() => increaseBy(-10)}>10씩 감소</button>&nbsp;
        <button onClick={increaseByNum}>인풋박스값으로 처리</button>
    </>
  )
}

export default App
