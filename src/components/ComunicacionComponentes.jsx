import React from 'react'

const ComunicacionComponentes = ({nombre, apellido, SaludoHijo, SaludoHermano}) => {
  //const dayOfMes = new Date(2021, 12, 0).getDate();
  const diasMes = [
    {
      mes: 'Enero',
      dias: new Date(2021, 1, 0).getDate()
    },
    {
      mes: 'Febrero',
      dias: new Date(2021, 2, 0).getDate()
    },
    {
      mes: 'Marzo',
      dias: new Date(2021, 3, 0).getDate()
    },
    {
      mes: 'Abril',
      dias: new Date(2021, 4, 0).getDate()
    },
    {
      mes: 'Mayo',
      dias: new Date(2021, 5, 0).getDate()
    }
  ]

  return (
    <div className="container">
        <h2 >COMUNICACION ENTRE COMPONENTES</h2>
        <h4>Hola {nombre} {apellido}</h4>
        <button onClick={e => SaludoHijo(nombre, apellido)}>Saludar al padre</button>
        <button onClick={e => SaludoHermano(nombre, apellido, diasMes)}>Saludar al Hermano</button>
      </div>
  )
}

export default ComunicacionComponentes
