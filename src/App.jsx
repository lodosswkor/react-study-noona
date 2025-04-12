import './App.css'
import CountBox from './components/CountBox'
import counterStore from './stores/counterStore'

function App() {
  //const [count, setCount] = useState(0)
  const {count, increase, increaseBy, reset} = counterStore();

  return (
    <>
      <h1>count : {count}</h1>
      <CountBox/>
      <button onClick={() => reset()}>초기화</button>&nbsp;
      <button onClick={increase}>하나씩 증가</button>&nbsp;
      <button onClick={() => increaseBy(10)}>10씩 증가</button>&nbsp;
    </>
  )
}

export default App
