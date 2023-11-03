import React, { useEffect,useState } from 'react'
import './Styles/Home.css'
import { Outlet, useNavigate } from 'react-router-dom'



export default function Home(props) {
  const {setProgress}=props;

  const navigate=useNavigate()

  const [firstBtn, setfirstBtn] = useState("Register")


  function gotoSignUp(){
    setProgress(50)
    navigate('/signup')
    setProgress(100)
  }
  const gotoAddNote=()=>{
    setProgress(30)
    if(userLoggedIn()) {setProgress(70); navigate('./addnote')}
    else navigate('/login') 
    setProgress(100)     
  }
  const userLoggedIn=()=>{
    if(localStorage.getItem("authtoken")===null) {return false;}    
    else setfirstBtn("Sign Out"); return true;
    
  }
  const signOutUser=()=>{
    localStorage.removeItem("authtoken")
    props.showAlert("Signed Out Successfully!","success")

    navigate('/')
    window.location.reload(true)

  }
  

  

  useEffect(()=>{
    props.setProgress(10)
    props.setProgress(50)
    props.updateNavColor()
    props.setProgress(100)
    userLoggedIn()
    // eslint-disable-next-line
  },[]);

  return (
    <>

    

      <div className="bg-img"></div>
      <div className="hero-text">
              <h1>Your Thoughts,<br/> Your Way</h1>
              <h6>Streamline your note-taking experience with our user-friendly website, designed to help you capture, organize, and access your thoughts effortlessly.</h6>
              <button type="button" onClick={localStorage.getItem("authtoken")===null?gotoSignUp:signOutUser} className="btn btn-success mx-2">{firstBtn}</button>
              <button type="button" onClick={gotoAddNote} className="btn btn-success">Add Note</button>
    </div>
    <Outlet/>    
    </>
  )
}
