import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[count,setCount] = useState(10)
  const AddValue = ()=> {
    if(count<20){
      setCount(count + 1)
    }
    
  } 
  const RemoveValue = ()=> {
    if(count > 0){
      setCount(count-1)
    }
   
    
  }

  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={AddValue}>Add value</button>
      <br/>
      <button onClick={RemoveValue}>Remove value</button>
    </>
  )
}

export default App
