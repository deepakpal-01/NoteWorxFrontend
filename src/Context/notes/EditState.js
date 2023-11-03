import React from 'react'
import editContext from './editContext'

export default function EditState(props) {
    let editStates={
        id:null,
        title:"",
        description:"",
        tag:""
    }
    const updateFields=(id,title,description,tag)=>{
      if(id) editStates.id=id
      if(title) editStates.title=title
      if(description) editStates.description=description
      if(tag) editStates.tag=tag
    }
  return (
    <>
    <editContext.Provider value={{editStates,updateFields}}>
        {props.children}
    </editContext.Provider>
    </>
  )
}
