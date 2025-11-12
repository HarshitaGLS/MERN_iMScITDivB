import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

export const Login = () => {
  const [user,setUser] = useState({email:"",pwd:""})
 const navigate = useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    // alert(JSON.stringify(user))
    if(user.email=="")
        alert("email is required")
    else {
      // redirect to products page
      navigate('/products')
    }
  }
  return (
    <div>Login
      <Link to='/'>Go to Home</Link>
      {JSON.stringify(user)}
      <form onSubmit={handleLogin}>
      <input name="email" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})}/><br/>
      <input name="pwd" value={user.pwd} onChange={(e)=>setUser({...user, pwd:e.target.value})}/><br/>
      <button type="submit">Login</button>
      </form>
    </div>
  )
}
