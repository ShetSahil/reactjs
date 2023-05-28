import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import About from './Components/About';
import { useState } from 'react';



function App() {
  const[mode,setMode]=useState('light')
  const toggleMode=() =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';

    }
  }
  const[text ,settext]=useState('light')
  
  return (
    <>
    <Navbar title="TextUtils" about="About Textutils" mode={mode} toggleMode={toggleMode}></Navbar>
    {/* <Navbar></Navbar> */}
    <TextForms heading="Enter The Text To Analyze " mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
