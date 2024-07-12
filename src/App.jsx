import { useState } from 'react'

import './App.css'

function App() {
  const [value , setvalue]=useState('')


  const playsound=()=>{
    const audio=new Audio('pick-92276.mp3');
    audio.play()
  }

  const numberClick=(num)=>{
    playsound()

    setvalue(value+num)

  }

  const operatorClick=(op)=>{
    playsound()

    setvalue(value + ''+ op +'')
  
    }

    
  const result=()=>{
    playsound()

    try{
      setvalue(eval(value))

    }catch{
      setvalue("Error")
    }

   }
  

const clear=()=>{

  setvalue('')
  
}
 

 
  

  return (
    <>
      <div className="con">
        <div className="main">
          <input type="text" value={value} readOnly />
          <br />
          <br />
          <div className="btn1">
            <button onClick={() => numberClick('1')}>1</button>
            <button onClick={() => numberClick('2')}>2</button>
            <button onClick={() => numberClick('3')}>3</button>
            <button onClick={() => numberClick('4')}>4</button>
          </div>
          <br />
          <div className="btn1">
            <button onClick={() => numberClick('5')}>5</button>
            <button onClick={() => numberClick('6')}>6</button>
            <button onClick={() => numberClick('7')}>7</button>
            <button onClick={() => numberClick('8')}>8</button>
          </div>
          <br />
          <div className="btn1">
            <button onClick={() => numberClick('9')}>9</button>
            <button onClick={() => numberClick('0')}>0</button>
            <button onClick={() => operatorClick('+')}>+</button>
            <button onClick={() => operatorClick('-')}>-</button>
          </div>
          <br />
          <div className="btn1">
            <button onClick={() => operatorClick('*')}>*</button>
            <button onClick={() => operatorClick('/')}>/</button>
            <button onClick={clear}>C</button>
            <button onClick={result}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
