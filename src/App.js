import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React ,{useState} from 'react';
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode,setMode]=useState('light');
   const toggleMode=() =>{
    if(mode== 'light'){
    setMode('dark');
    }
    else{
    setMode('light');
    } 
  }
  return (
    < >
     <Router>
      <Navbar title = "Text Utils" abouttext="About" mode = {mode} toggleMode={toggleMode}/>
      <div className="container">
      </div>
        <Routes>
          <Route path='/about' element = {
            <div className="container">
              <About/>
            </div>}>
          </Route>

          <Route path='/' element={
            <div className="container">
              <TextForm heading ="Enter the text to analyse" mode = {mode}/> 
            </div>}>
          </Route>
        </Routes>
    </Router>
    </>
  
  
  );
}

export default App;
