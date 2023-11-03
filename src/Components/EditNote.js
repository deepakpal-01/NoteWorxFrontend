import React, { useContext,useState,useEffect } from 'react'
// import './Styles/AddNote.css'
import { useNavigate } from 'react-router-dom'
import noteContext from '../Context/notes/noteContext'
import editContext from '../Context/notes/editContext'

export default function EditNote(props) {
  const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }
    const notesOb=useContext(noteContext)
    const editNote=notesOb.editNote

  const editStateOb=useContext(editContext)
  const noteFields=editStateOb.editStates
  // const updateFields=editStateOb.updateFields;

  const [newNote,setnewNote]=useState({newId:noteFields.id,newtitle:noteFields.newtitle,description:noteFields.description,newtag:noteFields.tag})
   
  const onChange=(e)=>{
      setnewNote({...newNote,[e.target.name]:e.target.value})        
  }
    const handleEditNoteBtn=()=>{
      // updateFields(newNote.newId,newNote.newtitle,newNote.newdescription,newNote.newtag)
      editNote(newNote.newId,newNote.newtitle,newNote.newdescription,newNote.newtag)
      goBack()
      props.showAlert("Updated Note Successfully !","success")
    }
    useEffect(()=>{
        selectTag()
        // eslint-disable-next-line
    },[])
    
    
    const selectTag=()=>{      
      const b=document.getElementById('bussiness')
      const p=document.getElementById('personal')
      if(noteFields.tag==="Bussiness"){
        b.checked=true
      }
      else{
        p.checked=true

      }
    }
    

  return (
     <> 
        <div className="modal fade show" style={{display:"block"}} id="staticBackdrop" data-bs-backdrop="static"tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div  className="modal-dialog">
          <div style={{background:"whitesmoke"}}  className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Note</h1>
              <button onClick={goBack} type="button" className="btn-close"  aria-label="Close"></button>
            </div>
            <div style={{padding:"15px"}} className="form form-note ">
            <form action="#">
                
                <div className="note-input-box">
                    <input onChange={onChange} style={{background:"inherit"}}  type="text" name="newtitle" defaultValue={noteFields.title}  required/>
                    <i className="fa-regular fa-clipboard email"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange} style={{background:"inherit"}}  type="text" name="newdescription"  defaultValue={noteFields.description}
                     placeholder="What's on your note?" required/>
                    <i className="fa-solid fa-pen-to-square lock"></i>
                </div>
            </form>
            <h3 className='my-3' style={{fontSize:"1rem"}}>Pick a Category</h3>
            <div className="category">
                    <label className='cat mx-2' htmlFor="bussiness">
                    <div >
                         <input onChange={onChange}   type="radio" id='bussiness' name='newtag' value='Bussiness'  />   
                    </div>
                         <p>Bussiness</p>
                    </label>
                    <label className='cat mx-2' htmlFor="personal">
                    <div >
                    <input onChange={onChange} type="radio" id='personal' name='newtag' value='Personal' /> 
                    </div>
                    <p>Personal</p>  
                    </label>
            </div>
               
            
        </div>  
           
            <div className="modal-footer">
              <button onClick={goBack} type="button" className="btn btn-secondary">Close</button>
              <button onClick={handleEditNoteBtn} type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
