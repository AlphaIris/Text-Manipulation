// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [mode1, setmode1] = useState('light')
  const [mode2, setmode2] = useState('light')



  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },2000);
  }

 const toggleMode=()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor  = '#0e0a0a';
      showAlert("Coloured mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor  = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const toggleMode1=()=>{
    if(mode1 === 'light'){
      setmode1('primary');
      document.body.style.backgroundColor  = '#2948ff';
      showAlert("Coloured mode has been enabled", "success");
    }
    else{
      setmode1('light');
      document.body.style.backgroundColor  = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const toggleMode2=()=>{
    if(mode2 === 'light'){
      setmode2('danger');
      document.body.style.backgroundColor  = '#cd1919';
      showAlert("Coloured mode has been enabled", "success");
    }
    else{
      setmode2('light');
      document.body.style.backgroundColor  = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
   <>
   <Router>
   <Navbar title="First App" mode={mode} mode1={mode1} mode2={mode2} toggleMode={toggleMode} toggleMode1={toggleMode1} toggleMode2={toggleMode2}/>
   <Alert alert={alert}/>
   <div className="container">

   <Routes>
          <Route exact path="/about" element={<About/>}/>

    
          <Route exact path="/" element={<TextForm  showAlert={showAlert} heading="Enter the text" mode={mode} mode1={mode1} mode2={mode2}/>}/>
        
        </Routes>

   {/* <About/> */}
   </div>
   </Router>
   </>
  );
}

export default App;
