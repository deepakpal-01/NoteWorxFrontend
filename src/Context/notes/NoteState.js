import React,{useState} from 'react'
import noteContext from './noteContext'

export default function NoteState(props) {

    const host="https://noteworxbackend.onrender.com"

    const notesInitial=[]

    const [notes, setnotes] = useState(notesInitial)

    const authtoken=localStorage.getItem('authtoken')
     

    const getAllNotes=async()=>{
      if(authtoken===null) return
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":`${authtoken}`
        },
      });
      const data=await response.json()
      setnotes(data)
    }

    const addNote=async(title,description,tag)=>{
        //post api at /api/notes/addnote with auth-token in header and data in body and it will return the new note
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":`${authtoken}`
          },
          body: JSON.stringify({
            title:title,
            description:description,
            tag:tag
          })
        });
        // eslint-disable-next-line
        const data=await response.json()
        // console.log(data)
    }
    const editNote=async(id,title,description,tag)=>{
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":`${authtoken}`
        },
        body: JSON.stringify({
          title:title,
          description:description,
          tag:tag
        })
      });
      // eslint-disable-next-line
      const data=await response.json()
      // console.log(data,"note return by backend")
    }
    const deleteNote=async(id)=>{
      //delete api at /api/notes/deletenote:id  with auth-token in header and id within endpoint

      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":`${authtoken}`
        },
      });
      // eslint-disable-next-line  
      const data=await response.json()
      // console.log(data)   
    }

  return (
    <noteContext.Provider value={{notes,getAllNotes,addNote,editNote,deleteNote}}>
        {props.children}
    </noteContext.Provider>
  )
}
