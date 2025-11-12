import React, { useState } from 'react'

const Counter = (props) => {
    // let count = 1
    let [count , setCount] = useState(1) //hook
    const increaseCount = ()=>{
        // count = count+1
        setCount(count+1) //count = count+1
        console.log(count)
    }
  return (
    <>

      <button type="button" onClick={increaseCount}>Increase</button>
       <button type="button" onClick={()=>setCount(count-1)}>Decrease</button>
      <h2>Count: {count}</h2>

          {/* <h1>{props.username}</h1>
    {props.mobile}
    <h3>IsLoggedIn : 
        { props.isLoggedIn ? <div>welcome to {props.username}<br/>
                <b>Have a nice Day!!!</b>
        </div> :  "Please Login" }
    </h3>
    {props.isLoggedIn && <h2>Lets do party</h2>}
    <br/> */}
    </>
  )
}

export default Counter
