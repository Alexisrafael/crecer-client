import { Link } from 'react-router-dom';
import logo from '../Imagen1.png';
import './Nav.css';

function Nav() {
          /*<div>
              <input type="text" placeholder='buscar'/>
              <button >Buscar</button>
            </div>*/
  return (
    <div className="container">
      <nav>
        <div>
            <Link to='/'><img className='imglogo' src={logo} alt="" /></Link>
        </div>
        <div className='complementos' style={{marginLeft: "40%"}}>
            <div style={{padding: "2%"}}>
              <a className='botton-click' href='/menu'>Inicio</a>
            </div>
            <div style={{padding: "2%"}}>
              <a className='botton-click' href='/info'>Más Información</a>
            </div>
            <div style={{padding: "2%"}}>
              <a className='botton-click'>Clases Grabadas</a>
            </div>
            
        </div>
      </nav>
    </div>
  );
}

export default Nav;