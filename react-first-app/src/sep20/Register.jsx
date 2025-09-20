import React, { useState } from 'react'

const Register = ({title}) => {
    const [user, setUser] = useState({username:"",email:"",mobile:"",password:""})
    const handleSubmit = (e)=>{
        e.preventDefault()
        let {username,email,password,mobile} = user //destructuring
        if(username==""|| email==""||password==""||mobile==""){
            alert("Please Fill All the fields")
        }
        else {
        alert("Form Submitted")
        console.log(user)
        }
    }
  return (
    <div className='container col-6 bg-dark text-white'>
        <h1>{title}</h1><hr></hr>
        <form onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" name="username"
                value={user.username} 
                onChange={(e)=>setUser({...user,username:e.target.value})}/>
            </div>
              <div className='form-group mb-3'>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" className="form-control" name="email"
                value={user.email}
                   onChange={(e)=>setUser({...user,email:e.target.value})}/>
            </div>
              <div className='form-group mb-3'>
                <label htmlFor="mobile" className="form-label">Mobile</label>
                <input type="number" className="form-control" name="mobile"
                value={user.mobile}
                   onChange={(e)=>setUser({...user,mobile:e.target.value})}/>
            </div>
              <div className='form-group mb-3'>
                <label htmlFor="password" className="form-label">password</label>
                <input type="password" className="form-control" name="password"
                value={user.password}    onChange={(e)=>setUser({...user,password:e.target.value})}/>
            </div>
            <button type="submit" className='btn btn-danger mb-3'>Register</button>
        </form>
    </div>
  )
}
export default Register