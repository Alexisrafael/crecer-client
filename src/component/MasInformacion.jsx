import './MasInformacion.css';
import Nav from './Nav';
import stark from '../star_24dp_FFFF55_FILL0_wght400_GRAD0_opsz24.png'
import Alert from '../warning_24dp_0000F5_FILL0_wght400_GRAD0_opsz24.png'

function MasInformacion() {

  return (
    <div className="App">
      {<Nav />}
      <div className="App-container" style={{padding: "2%"}}>
        <div>

          <div>
            <div className='horario'>
              <div>
                <label><b>Jornada Horario Completo</b></label>
                <p>8:00 AM a  6:00 PM</p>
              </div>
              <div>
                <label><b>Jornada Pedagógica Medio Turno</b></label>
                <p>Diurno - 9:00 AM a  12:00 PM</p>
                <p>Tarde - 2:00 PM a  5:00 PM</p>
              </div>
            </div>
            <br />
            <b>
              <label><b>Observaciones:</b></label>
              <div className='observaciones'>
                <div className='tamano'><p><img className='img-data2' src={Alert} alt="Titulo" id='img'/> El alimento de cada niño o niña, va por cuenta del acudiente.</p></div>
                
                <div className='tamano'><p><img className='img-data2' src={Alert} alt="Titulo" id='img'/> Se debe respetar el horario de entrada y salida de los niños y niñas.</p></div>
                
                <div className='tamano'><p><img className='img-data2' src={Alert} alt="Titulo" id='img'/> El traslado del los niños que estudian en el “JOSE FELIX” tiene un costo adicional.</p></div>
                
                <div className='tamano'><p><img className='img-data2' src={Alert} alt="Titulo" id='img'/> En caso de que el acudiente tarde de 15 minutos a 1 hora, en retirar al niño o niña se le agregara un cargo adicional.</p></div>
                
                <div className='tamano'><p><img className='img-data2' src={Alert} alt="Titulo" id='img'/> Si el niño o niña tiene compromisos escolares, enviar con tiempo el mismo.</p></div>
                
                <div className='tamano'><p><img className='img-data2' src={Alert} alt="Titulo" id='img'/> Actividades como: Carteleras, Maquetas, Trabajos de investigación , etc, tienen un costo adicional.</p></div>
                
                <br />
              </div>
              <p><b>NOTA:</b> En caso que se presente alguno de los puntos anteriores, se debe notificar con anticipación.</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MasInformacion;