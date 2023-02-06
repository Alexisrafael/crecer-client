import logo from '../Imagen1.png';
import '../App.css';
import { useEffect } from 'react';

function Landing() {

    useEffect(() => {
        setTimeout(() => {
            window.location.replace('/menu')
        }, 4000);
    }, [setTimeout]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text">
         Espera un momento....
        </p>
      </header>
    </div>
  );
}

export default Landing;