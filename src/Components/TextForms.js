import React , {useState} from 'react'

export default function TextForms(props) {
    const upHandle = ()=>{
        let mytext = text.toUpperCase();
        setText(mytext);
    }
    const downHandle = ()=>{
      let mytext = text.toLowerCase();
      setText(mytext);
  }
  const capHandle = ()=>{
    setText('');
    
    
}
    const handleChange = (event)=>{

        setText(event.target.value)
    }
    const [text,setText]=useState("Enter Your Text");

   
  return (
    
   
      <div className="mb-3">
        
    <div className="container my-3">
    <h1>{props.heading}</h1>
    <textarea className="form-control my-3" id="box" rows="10" value={text} onChange={handleChange}></textarea>
    <button type="button " className="btn btn-primary " onClick={upHandle}>UpperCase</button>
    <button type="button" className="btn btn-primary mx-3" onClick={downHandle}>LowerCase</button>
    <button type="button" className="btn btn-primary mx-3" onClick={capHandle}>Clear Text</button>

    <h1>Preview:</h1>
    <p>{text}</p>
    <h1>length:{text.split(" ").length} words  {text.length} characters</h1>
    </div>
  </div>

  )
}
