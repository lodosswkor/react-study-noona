import './App.css';
import Box from './components/Box';
import { useState } from 'react';
// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 
// 3. 클릭한 값이 박스가 보임
// 4. 컴퓨터는 랜덤하게 선택이 된다. 
// 5. 승 : 초록, 패 : 빨강, 비김 : 검정

const choice = {
  scissors: {
    name : 'Scissors',
    value : 0, // 걍 문자열 비교합시당.
  },
  rock : {
    name : 'Rock',
    value : 1,
  },
  paper : {
    name : 'Paper',
    value : 2,
  }
};


function App() {

  const [userChoice, setUserChoice] = useState(choice.scissors); // 리랜더링을 위해 추가
  const [comChoice, setComChoice] = useState(choice.scissors); // 컴퓨터
  const [result, setResult] = useState(); 

  const play = (userSelect) => {
    let comSelect = computerChoice(); 
    setUserChoice(userSelect); 
    setComChoice(comSelect); 
    //setComChoice(computerChoice()); // 비동기라서 그런가.. 결과가 밀리는 듯 동기성 변수에 담자.
    setResult(judgement(userSelect, comSelect));
  };

  const computerChoice = () => {
    let arrChoiceItems = Object.keys(choice); 
    let random = Math.floor(Math.random() * arrChoiceItems.length); 
    return choice[arrChoiceItems[random]]; 
  };

  const judgement = (userSelect, comSelect) => { //-- 랜더링 전에 처리됨 


    if(userSelect.name === comSelect.name) {
      return 'draw'; 
    } else if(userSelect.name === 'Scissors') { // 사:가위일때
      return comSelect.name === 'Rock' ? 'lose' : 'win'; // 컴:바위일경우
    } else if(userSelect.name === 'Rock') { // 바위일때 
      return comSelect.name === 'Paper' ? 'lose' : 'win'; // 컴:보자기
    } else if(userSelect.name === 'Paper') { // 보자기일때 
      return comSelect.name === 'Scissors' ? 'lose' : 'win'; // 컴:가위
    }

    // if(userSelect.value === comSelect.value) {
    //   return 'draw'; 
    // } else if(userSelect.value === 0) { // 사:가위일때
    //   return comSelect.value === 1 ? 'lose' : 'win'; // 컴:바위일경우
    // } else if(userSelect.value === 1) { // 바위일때 
    //   return comSelect.value === 2 ? 'lose' : 'win'; // 컴:보자기
    // } else if(userSelect.value === 2) { // 보자기일때 
    //   return comSelect.value === 0 ? 'lose' : 'win'; // 컴:가위
    // }
    
  }


  return (
    <div>
      <div className="main">
        <Box title='You!' choice={userChoice} result={result}/>
        <div style={{'width':'20px'}}></div>  
        {/* // prop expects a mapping from style properties to values, not a string. { props / object }*/}
        <Box title='Computer' choice={comChoice} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play(choice.scissors) }>가위</button>
        <button onClick={() => play(choice.rock) }>바위</button>
        <button onClick={() => play(choice.paper) }>보</button>
      </div>
    </div>
  );
}

export default App;