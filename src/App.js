import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Home from './Components/Home';
import Notes from './Components/Notes';
import Navbar from './Components/Navbar'
import NoteState from './Context/notes/NoteState';
import EditState from './Context/notes/EditState';
import Signup from './Components/Signup';
import AddNote from './Components/AddNote';
import EditNote from './Components/EditNote';
import Alert from './Components/Alert';

function App() {


  const [navColor, setnavColor] = useState("none")
  const updateNavColor=()=>{
    setnavColor("white")
  }
  const resetNavColor=()=>{
    setnavColor("none")
  }

  const [alert, setAlert] = useState(null)

  function showAlert(message,type){
      setAlert({
        message:message,
        type:type
      })
      console.log("alert updated")
      setTimeout(()=>{
        setAlert(null)
      },2000)
  }

  const [progress,setProgress] = useState(0);
  



  return (
   <>
   <NoteState>
    <EditState>
    <Router>
        <Navbar progress={progress} setProgress={setProgress} showAlert={showAlert}  navColor={navColor}/>
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<Home setProgress={setProgress} showAlert={showAlert} updateNavColor={resetNavColor}/>}>  
            <Route path='/login' element={<Login setProgress={setProgress} showAlert={showAlert} />}/>          
            <Route path='/signup'  element={<Signup setProgress={setProgress} showAlert={showAlert} />}/>        
          <Route path='/addnote'  element={<AddNote setProgress={setProgress} showAlert={showAlert} />}/>
          </Route>
          
          

          <Route path='/notes'  element={<Notes setProgress={setProgress} showAlert={showAlert} updateNavColor={updateNavColor}/>}>
              <Route path='/notes/addnote' element={<AddNote showAlert={showAlert} />}/>
              <Route path='/notes/editnote' element={<EditNote showAlert={showAlert} />}/>
          </Route>         
          

          <Route path='/about' element={<About setProgress={setProgress} updateNavColor={updateNavColor}/>}>
          </Route>

          <Route path='/contact' element={<Contact setProgress={setProgress} updateNavColor={updateNavColor}/>}>
          </Route>
          
          
        </Routes>

    </Router>
    </EditState>
    </NoteState>
   </>
  );
}

export default App;
