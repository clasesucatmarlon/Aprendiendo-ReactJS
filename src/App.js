import React from 'react'
import Header from './components/Header'
import Propiedades from './components/Propiedades'

import './css/styles.css'

function App() {
  const nombre = 'Marlon García'

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Propiedades nombre={nombre}/>
      </div>
    </div>
  );
}

export default App;
