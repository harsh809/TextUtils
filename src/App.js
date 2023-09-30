import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  const [mode,setmode] = useState("light");
  const togglemode = ()=>{
    if(mode === "light"){
      setmode('dark');
      document.body.style.background = "#181818";
    }
    else{
      setmode('light');
      document.body.style.background = "white";
    }
  }
  return (
    <>
      <Navbar mode={mode} togglemode = {togglemode}/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze" mode={mode} togglemode = {togglemode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
