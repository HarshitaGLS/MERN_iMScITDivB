import React, { useState } from 'react'

const SignUpForm = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [result,setResult] = useState("")
    const handleSignup = ()=>{
        // if(email=="" || password=="") setResult("please fill all the fields")
        // else setResult("Signup successfully")
         if(email=="abc@gmail.com" && password=="abc123") setResult("Login Successfully")
        else setResult("Invalid Credentials")
    }
  return (
    <>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
      <button type="button" onClick={handleSignup}>SignUp</button>
      <h4>{result}</h4>
    </>
  )
}

export default SignUpForm
