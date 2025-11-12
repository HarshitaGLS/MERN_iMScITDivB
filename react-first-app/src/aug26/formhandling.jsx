import React, { useState } from 'react'

const Formhandling = () => {
    let [num1,setNum1] = React.useState(10)
    let [num2,setNum2] = useState(2)
    let [result,setResult] = useState("")
  return (
    <>
      <input type="text" placeholder='enter num1' value={num1}
      onChange={(e)=>{
        console.log(e.target.value)
        setNum1(e.target.value)
    }
    }/><br/>
      <input type="text" placeholder='enter num2' value={num2}
      onChange={(e)=>setNum2(e.target.value)}/><br/>
        <button type="button" onClick={()=>setResult(parseInt(num1)+parseInt(num2))}>+</button>

        <h2 style={{color:"blue"}}>{result}</h2>
    </>
  )
}

export default Formhandling
