import './MenuPrincipal.css';
import Nav from './Nav';
import Nav2 from './Nav2';
import image from '../somos2.png'
import image2 from '../6.jpeg'
import image3 from '../7.jpeg'

function MenuPrincipal() {
    
    return (
        <div className="App">
            {<Nav/>}
            <div className="App-container" >
                <div className='primerDiv'>
                    <div className='correr'>

                        {/* <img className='imagen' src={image} alt="" /> */}
                        <div>
                            <label> <b>Quien soy?</b> </label>
                        </div>
                    
                    </div>
                    <div className='segundoDiv' >
                        <p>Especialista en las áreas de Matemáticas y Lenguaje. Ahora contamos con las áreas de Inglés y Dibujo en los grados de primaria.</p>
                    </div>
                    <div className='correr1'>

                        {/* <img className='imagen' src={image} alt="" /> */}
                        <div>
                            <label> <b>Quien soy?</b> </label>
                        </div>
                    
                    </div>
                    <div className='segundoDiv' style={{ marginRight:"2%"}}>
                        <p>Dedicadas y enfocadas del disfrute en el proceso de apredizaje, garantizando así que los niños se sientan cómodos y con ganas de seguir aprendiendo.</p>
                    </div>
                </div>
                <div className='primerDiv'>
                    <div >
                        <img className='imagenes' src={image2} alt="jhjh" />
                    </div>
                    <div style={{marginLeft:"2%"}}>
                        <img className='imagenes' src={image3} alt="khhhh" />
                    </div>
                </div>
                <div className='segundoDiv' style={{marginTop:"3%", marginLeft:"5%", marginRight:"5%"}}>
                    <p>CRECER está dirigido por la Docente Paola Dayana Garcia Tremont; quien cuenta con 3 años de experiencia como docente de aula en Institucion Educativa FE y ALEGRIA, y 4 años de labor independiente en Sabaneta Antioquia.</p>
                </div>
            </div>
        </div>
    );
}

export default MenuPrincipal;