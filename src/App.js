import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';


function App() {
  return (
    <>
    <Navbar title="TextUtils" about="About Textutils"></Navbar>
    {/* <Navbar></Navbar> */}
    <TextForms heading="Enter The Text To Analyze"/>
    </>
  );
}

export default App;
