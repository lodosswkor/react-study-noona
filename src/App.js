import './App.css';
import Box from './components/Box';
import { useState } from 'react';

let counter3 = 0; // 글로벌은 리랜더링 대상이 아님.

function App() {
  
  let counter = 0; // 일반변수 
  const [counter2, setCounter2] = useState(0); // 리엑트에서 제공하는 유용한 함수들을 react hook이라고 함.
  //-- 값과 함수를 리턴함. [변수, 변수변경용 함수]

  console.log('랜더링...');  // state 기 뱐경되면 App()은 리렌더링 (즉 일반변수 counter 는 0으로 초기화 )

  const increase = () => {
    setCounter2(counter2+1); // counter2 는 readonly !) 비동기 -> 호출된 함수가 끝나야 실행이 완료.
    counter++;
    counter3++;
    console.log(`global: ${counter3}, general: ${counter}, state: ${counter2}`); // 첫 + 일때 general : 1, state : 0
  };

  return (
    <div>
      <Box name="종석" num={1}/>
      <Box name="은진" num={2}/>
      <Box name="지우" num="3"/>
      <div>general : {counter} / state : {counter2}</div>
      <button onClick={increase}>클릭(+)</button>
      <button onClick={() => setCounter2(counter2-1)}>클릭(-)</button>
    </div>
  );
}

export default App;
