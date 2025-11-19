import React from 'react'
import { useState } from 'react'
import './Proppage.css'
const Proppage = () => {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState(null)
  function add() {
    setResult(Number(num1) + Number(num2))
  }
  function sub(){
    setResult(Number(num1)-Number(num2))
  }
  function mul(){
    setResult(Number(num1)*Number(num2))
  }
  function divide(){
    setResult(Number(num1)/Number(num2))
  }
  return (
    <div className='main'>
      <input type='number' placeholder='num1' value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type='number' placeholder='num2' value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={mul}>*</button>
      <button onClick={divide}>/</button>
      <h3>Result : {result}</h3>
    </div>
  )
}
export default Proppage
