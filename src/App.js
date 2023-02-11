import './App.css';

import { Routes, Route,} from 'react-router-dom'
import { Home } from './Home';
import { Dino } from './Dino';

// Logica se va a mostrar Ark
// DLC cada DLC mostrara cada dino que contiene ese map y solo ese map
// Dino opcion de mirar como tamear y que mapa va estar 
// home, dlc, news, servidores,  about team.

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Dino" element={<Dino/>}/>
      </Routes>
    </>
  );
}
export default App;