import React from 'react'
import ArrayObjects from './ArrayObjects'
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
  const nombre = 'Marlon García'

  return (
    <div className="App">
      <Header />
        <Propiedades nombre={nombre}/>
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
