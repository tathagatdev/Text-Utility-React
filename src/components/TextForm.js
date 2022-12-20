import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
             console.log('Upper Case was Clicked ');
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
  return (
    <>
    <div className="container">   
        <h1>{props.heading}</h1>
<div class="mb-3">
  <textarea onChange={handleOnChange}  value= {text} className="form-control" id="mybox" rows="8"></textarea>
</div>
<button  onClick={handleUpClick}   className="btn btn-primary  mx-3">Convert To Upper Case</button>
<button  onClick={handleDownClick}   className="btn btn-primary">Convert To Lower Case</button>
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
