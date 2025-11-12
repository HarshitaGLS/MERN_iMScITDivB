import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1)
  return (
   <>
   <button type="button" onClick={()=>setCount(count+4)}>Increase by 4 </button>
   <button type="button" onClick={()=>count>1 ? setCount(count-4) : setCount(0)}>Decrease by 4 </button>
   <button type="button" onClick={()=>setCount(0)}>Reset </button>
     <button type="button" onClick={()=>setCount(-count)}>Change Sign </button>
    <h2>{count}</h2>
   </>
  )
}

export default Counter
