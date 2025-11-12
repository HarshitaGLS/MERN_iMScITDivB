import React, { useState } from 'react'

const Login = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <>
    <button type="button" onClick={()=>setIsLoggedIn(!isLoggedIn)}>Change</button>
    
      {isLoggedIn ? <h2>Welcome {props.username}</h2> : <h3>Please  Login!!</h3>}
    </>
  )
}

export default Login
