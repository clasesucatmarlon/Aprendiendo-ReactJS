import React from 'react'
import Estados from './components/Estados'
import EstilosEnLinea from './components/EstilosEnLinea'
import Formularios from './components/Formularios'
import Header from './components/Header'
import Propiedades from './components/Propiedades'
import StyleComponents from './components/StyleComponents'

import './css/styles.css'

function App() {
  const nombre = 'Marlon García'

  return (
    <div className="App">
      <Header />
        <Propiedades nombre={nombre}/>
        <Formularios />
        <Estados />
        <EstilosEnLinea />
        <StyleComponents />
    </div>
  );
}

export default App;
