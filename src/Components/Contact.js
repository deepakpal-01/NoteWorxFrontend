import React,{useEffect,useState} from 'react'
import './Styles/Footer.css'
import './Styles/Contact.css'

export default function Contact(props) {

    const [name,setname]=useState()
    const [email,setemail]=useState()

    const fillData=async()=>{
        if(localStorage.getItem("authtoken")!==null){            
            const response = await fetch("http://localhost:5000/api/auth/getuser", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json", 
                  "auth-token":`${localStorage.getItem("authtoken")}`             
                }
              });
            const data=await response.json()
            setname(data.user.name)
            setemail(data.user.email)
        }
    }

    const submitForm=()=>{
        props.setProgress(10)
        props.setProgress(40)
        props.setProgress(70)
        props.setProgress(100)

    }

    useEffect(()=>{
        props.setProgress(10)
        props.setProgress(40)
        props.updateNavColor()
        props.setProgress(70)
        fillData()
        props.setProgress(100)
        // eslint-disable-next-line
      },[]); 

  return (
    <>
    <section className="upper">
        <div className="img-box" >
        </div>
        <div className="contact-form my-3">
            <h2>Contact Us</h2>
        <form  action="https://formspree.io/f/mvojyolp"  method="POST">

                <input  name="name" id="name" type="text" placeholder='Your Name' autoComplete='off' value={name}  required/>

                <input name="Email" className=" my-2 mx-2" id="email" type="email" placeholder='Your Email' autoComplete='off' value={email} required/>

                <input className=" my-2 " name="subject" id="subject" type="text" placeholder='Subject' autoComplete='off' required/>
                <br />

                <textarea className=" my-2 " style={{padding:"3px"}} name="message" id="message" cols="47" rows="8" placeholder='Your Message' required></textarea>
                <br />

                <button onClick={submitForm} style={{width:"75px"}} type="submit" className="btn  btn-bd-primary ">Submit</button>
        </form>
        </div>
    </section>
    <hr />

    <section className="map">
        <h2  style={{width:"fit-content",margin:"auto"}}>Locate Us</h2>
        <iframe  title='mapBox' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.053125717419!2d77.20445207439829!3d28.68805738155898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd928daadb91%3A0x76aa925fc6e58347!2sDepartment%20of%20Computer%20Science%2C%20University%20of%20Delhi!5e0!3m2!1sen!2sin!4v1698820323749!5m2!1sen!2sin" width="600" height="450"  loading="lazy" ></iframe>
    </section>

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
  )
}
