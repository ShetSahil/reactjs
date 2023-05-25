import React , {useState} from 'react'

export default function TextForms(props) {
    const upHandle = ()=>{
        let mytext = text.toUpperCase();
        setText(mytext);
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
    <button type="button" className="btn btn-primary" onClick={upHandle}>UpperCase</button>

    </div>
  </div>

  )
}
