import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import About from './Components/About';
import { useState } from 'react';



function App() {
  const[mode,setMode]=useState("light")
  // const togglemode=() =>{
  //   if(mode==='light'){
  //     setMode('dark')
  //   }else{
  //     setMode('light')
  //   }
  // }
  
  return (
    <>
    <Navbar title="TextUtils" about="About Textutils" mode={mode}></Navbar>
    {/* <Navbar></Navbar> */}
    <TextForms heading="Enter The Text To Analyze"/>
    {/* <About/> */}
    </>
  );
}

export default App;
