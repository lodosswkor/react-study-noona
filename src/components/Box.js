import React from 'react'

const Box = ( props ) => {
  
  
  let result = 'draw'; // 초기값은 무조건 draw (useState에서 초기값을 Scissors 로 함.)
  if(props.result && props.title === 'Computer' && props.result !== 'draw') {
    result = props.result === 'win' ? 'lose' : 'win'; 
  } else {
    result = props.result ? props.result : result;
  }

  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <img src={`/assets/images/${props.choice && props.choice.name}.png`} alt={ props.choice && props.choice.name }/> 
        {/*  조건부 랜더링  */}
        {/* https://ko.react.dev/learn/conditional-rendering */}
        {/* { props.choice ? (<div>haak</div>) : (<div>허억</div>) } */}
        <h2>{ result }</h2>
    </div>
  )
}

export default Box