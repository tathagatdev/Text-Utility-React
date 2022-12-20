import React ,{useState} from 'react'

export default function TextForm(props) {
    const toggleStyle=() =>{
         if(myStyle.color=='white'){
         setMyStyle({
            color:'black' ,
            backgroundColor:'white'
             })
         setBtnText("Enable Dark Mode")
            }
         else{
         setMyStyle({
            color:'white' ,
            backgroundColor:'black'
         })
         setBtnText("Enable Light Mode")
        }
    }
    const erase =()=>{
        
        let newText=" ";
        setText(newText);
}
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleUpClick =()=>{
           
             let newText=text.toUpperCase();
             setText(newText);
    }
    const handleDownClick =() =>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange =(event)=>{
        console.log('On Change ');
        
        setText(event.target.value)
}

    const [text,setText]=useState(' ');
    const [myStyle,setMyStyle]=useState({
        color:'black' ,
        backgroundColor:'white'
      }) 
    const [btnText,setBtnText]=useState('Enable Dark Mode');
  return (
    <>
    <div className="container my-3" style={myStyle}>   
        <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea onChange={handleOnChange}  value= {text} className="form-control" id="mybox" rows="8"></textarea>
</div>
<button  onClick={handleUpClick}   className="btn btn-success  mx-3 my-3">Convert To Upper Case</button>
<button  onClick={handleDownClick}   className="btn btn-success mx-3  my-3">Convert To Lower Case</button>
<button type="submit" onClick={speak} className="btn btn-success mx-3  my-3">Speak</button>
<button type="submit" onClick={erase} className="btn btn-warning mx-3  my-3">Erase All</button>
<button type="submit" onClick={toggleStyle} className="btn btn-warning my-3">{btnText}</button>
    </div>
    <div className="container my-3">
        <h2>Text Summary</h2>
        <p> {text.split(" ").length} words, {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    

      </>
  )
}
