import React ,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './Styles/NoteCard.css'
import noteContext from '../Context/notes/noteContext'
import editContext from '../Context/notes/editContext'

export default function NoteCard(props) {  

  const {note}=props;

  const navigate=useNavigate()

  const notesOb=useContext(noteContext)
  const deleteNote=notesOb.deleteNote

  const editStateOb=useContext(editContext)
  const updateFields=editStateOb.updateFields;
  

  const handleDelete=()=>{
    deleteNote(note._id)
    props.showAlert("Successfully Deleted a Note  !","success")
  }

  const handleEdit=(e)=>{ 
    updateFields(note._id,note.title,note.description,note.tag)
    navigate('/notes/editnote')    

  }
  


  return (
    <>
    <div className="card">
            <div className="card-header" style={{ fontWeight: "bolder" }}>
              <p>{note.title}</p>
              <span className="util-btn">
                  <i onClick={handleEdit} className="fa-solid fa-pen-to-square mx-3"></i>                
                  <i onClick={handleDelete} className="fa-solid fa-trash"></i>                
              </span>
            </div>
            <ul style={{listStyleType:"none"}} className="list-group list-group-flush">
              <li className="list-group-item desc-li">
                <p>{note.description}</p>
              </li>
              <li className="list-group-items mx-3 my-2 tag-li">
              <span className={`badge text-bg-${note.tag==="Bussiness"?"danger":"success"} tag`}>{note.tag}</span></li>   
              <li className="list-group-items">          
                
              </li>
            </ul>            
          </div>

    
    </>
  )
}
