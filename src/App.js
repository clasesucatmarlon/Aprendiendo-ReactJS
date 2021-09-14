// Trabajar con rutas: https://bluuweb.github.io/react-udemy/
// Instalar: npm install react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


import React, {useState} from 'react'
import ArrayObjects from './ArrayObjects'
import ComunicacionComponentes2 from './components/ComunicacionComponentes2'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import Estados from './components/Estados'
import EstilosEnLinea from './components/EstilosEnLinea'
import Formularios from './components/Formularios'
import Formularios2 from "./components/Formularios2";
import Header from './components/Header'
import Propiedades from './components/Propiedades'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import SpreadOperator from './components/SpreadOperator'
import StyleComponents from './components/StyleComponents'
import { Fetch2 } from './components/Fetch2'
import { Fetch } from './components/Fetch'

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
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Propiedades nombre={nombre}/>
          </Route>
          <Route path="/fetch">
            <Fetch />
            <Fetch2 />
          </Route>
          <Route path="/comunicacion">
            <ComunicacionComponentes nombre={nombre} apellido='García Morales' SaludoHijo={SaludoHijo} SaludoHermano={SaludoHermano}/>
            <ComunicacionComponentes2 saludo={saludo} dayMes={dayMes}/>
          </Route>
          <Route path="/arrayobjetos">
            <ArrayObjects />
          </Route>
          <Route path="/spread" >
            <SpreadOperator />
          </Route>
          <Route path="/condicional" >
            <RenderizadoCondicional />
          </Route>
          <Route path="/formularios" >
            <Formularios />
            <Formularios2 />
          </Route>
          <Route path="/estados" >
            <Estados />
          </Route>
          <Route path="/stylecomponentes" >
            <StyleComponents />
          </Route>
        </Switch>

        {/* <Fetch />
        <Estados />
        <EstilosEnLinea />
        <StyleComponents /> */}
      </div>
    </Router>
  );
}

export default App;
