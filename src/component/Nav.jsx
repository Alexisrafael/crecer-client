import { Link } from 'react-router-dom';
import logo from '../Imagen1.png';
import './Nav.css';

function Nav() {
  return (
    <div className="container">
      <nav>
        <div>
            <Link to='/'><img className='imglogo' src={logo} alt="" /></Link>
        </div>
        <div className='complementos'>
            <div>
                <p>Informcion de Horarios</p>
            </div>
            <div>
                <p>Valor de las clases</p>
            </div>
            <div>
              <input type="text" placeholder='buscar'/>
              <button >Buscar</button>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;