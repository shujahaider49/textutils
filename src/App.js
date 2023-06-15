
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import react, {useState} from 'react';

function App() {
  const [mode, setMode] = useState(`light`); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }) 
    
    setTimeout(() => {
          setAlert(null);
        }, 1400);
  }

  const toggleMode = () => {
    if(mode === `light` ){
      setMode(`dark`);
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Has Been Enabled", "success ");
      document.title = "TextUtils - Dark Mode";
      /*setInterval(() => {
        document.title = "TextUtils is Amazing Website";
      }, 1000);*/
    }
    else{
      setMode(`light`);
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled", "success ");
      document.title = "TextUtils - Light Mode";
      /*setInterval(() => {
        document.title = "TextUtils is good Website";
      }, 1500);*/
    }
  }
  return (
    <>
      {/* <Navbar title="Textutils" AboutText="About us" /> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3 "  >
      <Textform showAlert={showAlert} heading='Enter the text to analyze' mode={mode} />
      {/* <About/> */}
</div>
    </>
  );
}

export default App;
