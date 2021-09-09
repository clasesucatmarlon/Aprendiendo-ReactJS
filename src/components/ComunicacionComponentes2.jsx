import React from 'react'

const ComunicacionComponentes2 = ({saludo, dayMes}) => {

  return (
    <div className="container">
        <h2 >COMUNICACION ENTRE COMPONENTES 2</h2>
        <h4>{saludo}</h4>
        <ul>
        {
          dayMes.map((item, key)=> (
            <li key={key}>{item.mes.toUpperCase()} tiene {item.dias} días</li>
          ))
        }
        </ul>
      </div>
  )
}

export default ComunicacionComponentes2
