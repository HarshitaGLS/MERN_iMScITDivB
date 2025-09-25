import React from 'react'
import { FaPenSquare, FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">GLS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link" to='/products'>Products</NavLink>
        </li>
          <li className="nav-item">
          <NavLink className="nav-link" to='/contact'>Contact Us</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
       </ul>
      <form className="d-flex me-4" role="search">
        <div className="input-group">
         <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">
          <FaSearch />
        </button>
        </div>  
      </form>
      <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
        <li className="nav-item">
          <NavLink className="nav-link" to='/login'>Login</NavLink>
        </li>
           <li className="nav-item">
          <NavLink className="nav-link" to="/register"><FaPenSquare/> Register</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Navbar
