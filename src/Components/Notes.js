import React, { useEffect,useContext,useState } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import NoteCard from './NoteCard';
import './Styles/Notes.css'
import noteContext from '../Context/notes/noteContext'

export default function Notes(props) {

  const [name, setname] = useState("User")

  const fetchName=async()=>{
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
            method: "GET",
            headers: {
              "Content-Type": "application/json", 
              "auth-token":`${localStorage.getItem("authtoken")}`             
            }
          });
        const data=await response.json()
        setname(data.user.name)   
  }

  const navigate=useNavigate()

  const gotoAddNote=()=>{
    navigate('/notes/addnote')      
  }
  const notesOb=useContext(noteContext)
  const notesArr=notesOb.notes

  

  const searchFunc=()=>{
    let searchBar=document.getElementsByClassName('searchText')[0]
    searchBar.addEventListener('input',()=>{
      let inputVal=searchBar.value

      let noteCards=document.getElementsByClassName('card')

      Array.from(noteCards).forEach((card)=>{
        
        if(card.textContent.includes(inputVal)){
          card.style.display="block"
        }
        else{
          card.style.display="none"
        }
      })      
      
    })
  }


 useEffect(()=>{
    props.updateNavColor()
    notesOb.getAllNotes()
    if(localStorage.getItem("authtoken")===null){
      navigate('/login')
      props.setProgress(100)
    }
    else{
      fetchName()
      searchFunc()
    }     
 },)
 
 
  return (
    <>
    
      <div className="note-body">

        <div className="note-welcome">
          <div className="intro">
            <h3>What's up,</h3>
            <h3
              style={{
                fontSize: "1.5rem",
                color: "red",
                marginLeft: "5px",
                fontFamily: "serif",
              }}
            >
              {name}
            </h3>
            <p>
              Welcome to your digital notepad, where your thoughts find a home.
            </p>
          </div>

          <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="searchText" type="text" placeholder="Search your notes here....." />
          </div>
        </div>

        <div className="mid-msg">
          <h4>
            Remember Everything with Ease{" "}
            <i className="fa-regular fa-folder-open"></i>
          </h4>
          <button type="button" onClick={gotoAddNote} className="btn btn-success">Add New Note</button>
        </div>

        <div className="containerBox">
          {notesArr.length===0?<h5 style={{fontFamily:"cursive"}}>Your Notebook is Empty!</h5>:notesArr.map((note)=>{
            return <NoteCard showAlert={props.showAlert}  key={note._id} note={note} />
          })
          }
                        

        </div>
        
      </div>
      <Outlet/>
    </>
  );
}
