import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React ,{useState} from 'react';
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
    
    <Navbar title="TextUtils"  abouttext="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    < TextForm  heading="Enter Text to analyze"/>
  </div>
  </>
  );
}

export default App;
