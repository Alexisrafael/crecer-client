import './MenuPrincipal.css';
import Nav from './Nav';
import image2 from '../6.jpeg'
import image3 from '../7.jpeg'
import Titulo from '../titulo.jpeg'
import Libros from '../libro2.png'

function MenuPrincipal() {

    return (
        <div className="App">
            {<Nav/>}
            <div className="App-container" >
                <div className='primerDiv'>
                    <div className='correr'>
                        <div>
                            <label> <b>Quien soy?</b> </label>
                        </div>
                    </div>
                    <div className='segundoDiv' style={{ }}>
                        <p>Licenciada en Lengua y Literatura, graduada en la Universidad Pedagógica Experimental Libertador (UPEL) Venezuela Edo. Falcón, puedo afirmar con confianza que poseo una sólida formación académica y una profunda pasión por el estudio de la lengua y la literatura.

                        Estoy comprometida con proporcionar una educación de calidad y ayudar a mis estudiantes a desarrollar habilidades de lectura crítica, escritura efectiva y apreciación de la literatura.

                        Además de mi formación académica, cuento con experiencia práctica en la enseñanza de la lengua y la literatura a diversos grupos de estudiantes. Mi enfoque pedagógico se basa en fomentar un ambiente de aprendizaje participativo, donde los estudiantes se sientan motivados y puedan expresarse libremente. Estoy comprometida con brindarles las herramientas necesarias para que desarrollen su potencial y logren sus metas académicas.</p>
                    </div>
                    <div className='correr1'style={{ }}>
                        <div >
                            <label> <b>Quien soy?</b> </label>
                        </div>
                    </div>
                    <div className='tercerDiv' style={{ }}>
                        {/* <p>Dedicadas y enfocadas del disfrute en el proceso de apredizaje, garantizando así que los niños se sientan cómodos y con ganas de seguir aprendiendo.</p>*/}
                        <div style={{ marginLeft: "5%"}}>
                            <img src={Titulo} alt="Titulo" /> 
                        </div>
                    </div>
                </div>
                <div className='primerDiv'>
                    <div className='segundoDiv' style={{ marginTop: "1%", marginRight: "1%" }}>
                        <p> Dedicada y enfocada en el disfrute del proceso de apredizaje, en los niños cursantes de transición hasta 5° grado de primaria; garantizando así, que los niños se sientan cómodos y con ganas de seguir aprendiendo.
                            <img src={Libros} alt="" style={{ width: "1rem", height: "1rem" }} /> <br /> <br /> Se ofrecen los siguientes servicios:<br /><br />
                            <li>Aprendizaje Inicial (Preescolar).</li>
                            <li>Acompañamiento Académico.</li>
                            <li>Nivelación Académica (Matemáticas y leguaje).</li>
                        </p>
                    </div>
                    {/* <div className='segundoDiv' style={{ marginTop:"1%", marginRight:"1%"}}><p>Dedicadas y enfocadas del disfrute en el proceso de apredizaje, garantizando así que los niños se sientan cómodos y con ganas de seguir aprendiendo.</p></div> */}
                </div>
                <div className='primerDiv'>
                    <div >
                        <img className='imagenes' src={image2} alt="jhjh" />
                    </div>
                    <div style={{marginLeft:"2%"}}>
                        <img className='imagenes' src={image3} alt="khhhh" />
                    </div>
                </div>
                <div className='segundoDiv' style={{marginTop:"3%", marginLeft:"5%", marginRight:"5%", width:"90%"}}>
                    <p>CRECER está dirigido por la Docente Paola Dayana Garcia Tremont; quien cuenta con 3 años de experiencia como docente de aula en Institucion Educativa FE y ALEGRIA, y 4 años de labor independiente en Sabaneta Antioquia. Si deseas contactarme lo puedes hacer dando <a href="https://api.whatsapp.com/send/?phone=573146078016&text=Hola%21+Estoy+interesado(a)+en+las+clases+de+refuerzo.+Me+puedes+brindar+más+información,+por+favor.+Gracias!&app_absent=0" target='_blank'>Click Aqui</a></p>
                </div>
            </div>
        </div>
    );
}

export default MenuPrincipal;