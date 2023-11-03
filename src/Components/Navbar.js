import React from 'react'
import {NavLink, Outlet,useNavigate} from 'react-router-dom'
import './Styles/Navbar.css'
import LoadingBar from 'react-top-loading-bar'
// import Login from './Login'

export default function Navbar(props) {
  const {progress,setProgress}=props;

  const navigate=useNavigate()

  const signOutUser=()=>{
    setProgress(30)
    localStorage.removeItem("authtoken")
    setProgress(50)
    navigate('/')
    setProgress(80)
    window.location.reload(true)
    props.showAlert("Signed Out Successfully!","success")
  }
 
  

  return (
    <>

    <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={setProgress}
          />

        {/* <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark"> */}
        <nav style={{background:`${props.navColor}`}} className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand title"  href="/"><img src="title-logo.png" 
     height={"20px"} alt="logo" /></a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/notes">Notes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink id='navBtn'  className="nav-link " to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink id='navBtn'  className="nav-link " to="/contact">Contact</NavLink>
        </li>
      </ul>      
      {localStorage.getItem("authtoken")===null?<NavLink className="nav-link" aria-current="page" to="/login"><i className="fa-solid fa-user" ></i></NavLink>:<NavLink className="nav-link" aria-current="page" to="/"><i onClick={signOutUser} className="fa-solid fa-right-from-bracket"></i></NavLink> }
      
    </div>
  </div>
  <Outlet/>
</nav>  
    </>
  )
}
