import React from 'react'
import Estados from './components/Estados'
import EstilosEnLinea from './components/EstilosEnLinea'
import Header from './components/Header'
import Propiedades from './components/Propiedades'

import './css/styles.css'

function App() {
  const nombre = 'Marlon García'

  return (
    <div className="App">
      <Header />
        <Propiedades nombre={nombre}/>
        <Estados />
        <EstilosEnLinea />
    </div>
  );
}

export default App;
