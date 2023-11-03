import React, { useContext,useEffect,useState } from 'react'
import './Styles/AddNote.css'
import { useNavigate } from 'react-router-dom'
import noteContext from '../Context/notes/noteContext'


export default function AddNote(props) {
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }

    const notesOb=useContext(noteContext)
    const addNote=notesOb.addNote

    const [newNote,setnewNote]=useState({title:"",description:"",tag:"personal"})
   

    const handleAddNoteBtn=()=>{
        if(newNote.title.length<3 || newNote.description.length<5){
            props.showAlert("Length of input should be minimum 5 characters!","danger")
            return
        }
        addNote(newNote.title,newNote.description,newNote.tag)
        goBack()
        props.showAlert("Successfully Added a Note !","success")
    }
    const onChange=(e)=>{
        setnewNote({...newNote,[e.target.name]:e.target.value})
    }
   
    useEffect(()=>{
        document.getElementById('personal').checked=true;
    },[])

  return (
    <>
         
 
    <div className="addnoteBox ">
    <i onClick={goBack} className="fa-solid fa-xmark form-close"></i>
        
        <div className="form form-note ">
            <form action="#">
                <h4>Your Note</h4>
                <hr />
                <div className="note-input-box">
                    <input onChange={onChange} type="text" name="title" placeholder="What's your Title" minLength={3} required/>
                    <i className="fa-regular fa-clipboard email"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange} type="text" name="description" placeholder="What's on your note?" minLength={5} required/>
                    <i className="fa-solid fa-pen-to-square lock"></i>
                </div>
            </form>
            <h3 className='my-3' style={{fontSize:"1rem"}}>Pick a Category</h3>
            <div className="category">
                    <label className='cat mx-2' htmlFor="bussiness">
                    <div >
                         <input onChange={onChange} type="radio" id='bussiness' name='tag' value='Bussiness'  />   
                    </div>
                         <p>Bussiness</p>
                    </label>
                    <label className='cat mx-2' htmlFor="personal">
                    <div >
                    <input  onChange={onChange} type="radio" id='personal' name='tag' value='Personal' /> 
                    </div>
                    <p>Personal</p>  
                    </label>
            </div>
                
                <button id="addNoteSubmitBtn"  onClick={handleAddNoteBtn} type="submit" className="add-button">ADD NOTE</button>
            
        </div>                
    </div> 

</>
  )
}
