import {Routes, Route} from 'react-router-dom'
import Landing from './component/Landing'
import MenuPrincipal from './component/MenuPrincipal'
import './App.css';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path= '/' element={<Landing/>}></Route>
        <Route exact path= '/menu' element={<MenuPrincipal/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
