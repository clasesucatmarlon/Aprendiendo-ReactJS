import React, {useState} from 'react'
import ArrayObjects from './ArrayObjects'
import ComunicacionComponentes2 from './components/ComunicacionComponentes2'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import Estados from './components/Estados'
import EstilosEnLinea from './components/EstilosEnLinea'
import Formularios from './components/Formularios'
import Header from './components/Header'
import Propiedades from './components/Propiedades'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import SpreadOperator from './components/SpreadOperator'
import StyleComponents from './components/StyleComponents'

import './css/styles.css'

function App() {
  const [saludo, setSaludo] = useState('')
  const [dayMes, setDayMes] = useState([])
  const nombre = 'Marlon Aurelio'

  const SaludoHijo = (nombreHijo, apellidoHijo) => {
    console.log('Se saluda desde el hijo', nombreHijo, apellidoHijo)
  }

  const SaludoHermano = (nombreHermano, apellidoHermano, day) => {
    setSaludo(`Saludo ${nombreHermano} ${apellidoHermano} desde el usuario 1`)
    setDayMes(day)
  }

  return (
    <div className="App">
      <Header />
        <Propiedades nombre={nombre}/>
        <ComunicacionComponentes nombre={nombre} apellido='García Morales' SaludoHijo={SaludoHijo} SaludoHermano={SaludoHermano}/>
        <ComunicacionComponentes2 saludo={saludo} dayMes={dayMes}/>
        <ArrayObjects />
        <SpreadOperator />
        <RenderizadoCondicional />
        <Formularios />
        <Estados />
        <EstilosEnLinea />
        <StyleComponents />
    </div>
  );
}

export default App;
