import React, { useEffect } from "react";
import "./Styles/About.css";
import { useNavigate } from "react-router-dom";
// import noteContext from '../Context/notes/noteContext'

export default function About(props) {
  
  
  const navigate=useNavigate()

  const gotoHome=()=>{
    props.setProgress(50)
    navigate('/')
    props.setProgress(100)
  }
  const gotoContact=()=>{
    props.setProgress(50)
    navigate('/contact')
    props.setProgress(100)
  }
  useEffect(()=>{
    props.setProgress(10)
    props.setProgress(40)
    props.updateNavColor()
    props.setProgress(70)
    props.setProgress(100)
    // eslint-disable-next-line
  },[]);

  return (
    <>

    
      <div className="about">
        <div className="section1">
          <div className="box1">
            <div  className="about-msg my-3">
            <h2>NoteWorx</h2>
            <h4>Your Digital Notebook <i className="fa-regular fa-clipboard"></i></h4><hr />
            <p>Our note app is designed to be your digital notebook, always at your fingertips. Whether it's capturing ideas, making to-do lists, or preserving important information to help you stay organized and inspired.</p>
            </div>
            <div style={{position:"relative",right:"8.5vw"}} className="about-btn d-flex ">
            <button onClick={gotoHome} type="button" className="btn btn-bd-primary mx-3">Home</button>
            <button onClick={gotoContact} type="button" className="btn btn-outline-primary">Contact Us</button>
            </div>

          </div>
          <hr />
          <div className="box2"></div>
        </div>
        <br />
       <div className="section2">
       <div className="box3"></div>
        <div className="box4">
          <h2 className="mx-3" style={{fontSize:"2rem"}}>Your Notes, Your Way</h2>
          <h5 className="mx-3">Streamline your life with our note-taking app – where inspiration meets organization</h5>
        </div>
       </div>
      </div>
      <br />
      <hr />
      <br />




      <footer>
        <div id="contact" className="contact">
            <h5>Contact</h5><br />
            <p>Address:- Delhi University.(DUCS)</p>
            <p>Phone:- +91123456123 +11001410014</p>
            <p>E-mail:- <a href="https://www.gmail.com">office@cs.du.ac.in</a></p>
        </div>
        
        <div id="about" className="about-footer">
            <h5>About</h5><br />
            <p><a href="/">About Us</a></p>
            <p><a href="/">Privacy Policy</a></p>
            <p><a href="/">Terms & Conditions</a></p>
        </div>

        <div className="third-section">          
        <h5>Follow Us </h5><br />
        <div className="social-media">          
                <a href="https://www.facebook.com/login/"><i className="fa-brands fa-facebook fa-xl"></i></a>
                <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram fa-xl"></i></a>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"><i className="fa-brands fa-twitter fa-xl"></i></a>
                <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube fa-xl"></i></a>
            </div>   
                 
        </div>
        

        
        
    </footer>
    </>
  );
}
