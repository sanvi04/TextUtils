
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';



function App() {
    const[mode, setMode] = useState('light');//whether mode is dark or light 
    const[alert,setAlert]=useState(null);
    const showAlert=(message, type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null);
            }, 1000);
       
    }
    const toggleMode=()=>{
        if(mode==='light'){
           
            setMode('dark');
            document.body.style.backgroundColor = '#09100e';
            showAlert("Dark mode has been enabled", "success");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }   
    }
 return(
  <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
  <Alert alert={alert} />
  <div className="container my-5">
     <TextForm title="Enter the text below" mode={mode} showAlert={showAlert}/> 
  </div>

  
  </>
   
 );
}

export default App;


