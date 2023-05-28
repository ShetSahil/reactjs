import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { setTimeout } from 'timers';
// import { setTimeout } from 'timers/promises';



function App() {
  const[mode,setMode]=useState('light')
  const toggleMode=() =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert(" darkmode enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert(" lightmode enabled ","success")
    }
  }
  // const[text ,settext]=useState('light')

  const[alert ,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      showAlert(null);
    }, 1500);
   
  }


  
  return (
    <>
    <Navbar title="TextUtils" about="About Textutils" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}/>
    {/* <Navbar></Navbar> */}
    <TextForms heading="Enter The Text To Analyze " mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </>
  );
}

export default App;
