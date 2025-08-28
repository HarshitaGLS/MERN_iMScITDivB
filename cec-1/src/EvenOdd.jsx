import React, { useState } from 'react'

const EvenOdd = () => {
    const [num ,setNum] = useState(0)
    const checkeven = ()=>{
        if(num % 2== 0 )alert(`${num} is even number`)
        else   alert(`${num} is odd number`)
    }
  return (
   <>
   <input type="text" value={num} onChange={(e)=>setNum(e.target.value)}/>
    <button type="button" onClick={checkeven}>Check Even Odd</button>
   </>
  )
}

export default EvenOdd
