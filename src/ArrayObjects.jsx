import React, { Component } from 'react'

class ArrayObjects extends Component {
  render() {
    const pais = ['Colombia', 'Venezuela', 'Perú', 'Argentina'];

    const mascotas = [
      {
        nombre: 'Lola',
        raza: 'ave'
      },
      {
        nombre: 'Perolito',
        raza: 'canino'
      },
      {
        nombre: 'Piojo',
        raza: 'Ave'
      },
      {
        nombre: 'Lucas',
        raza: 'Felino'
      },
    ]

    const mascota2 = {
      nombre: 'Lola',
      raza: 'ave',
      edad: 5,
      lugar: 'Colombia',
      dueño: 'Marlon'
    }

    const claves = Object.keys(mascota2);
    
    // ITERAR VALORES DE LOS OBJETOS
    return (
      <div className='container'>
        <h2>ITERANDO ARRAY Y OBJETOS</h2>
          <ul>
            {
              claves.map((item, key) => (
                <li key={key}>{item}: {mascota2[item]}</li>
              ))
            }
          </ul>
      </div>
    )

    // ITERAR ARRAYS
    /* return (
      <div className='container'>
        <h2>ITERANDO ARRAY Y OBJETOS</h2>
        <ul>
        {
          pais.map((item, key) => (
            <li key={key}>{(item)}</li>
            ))
          }
          </ul>
          </div>
          ) */

    // ITERAR OBJETOS
    /* return (
      <div className='container'>
        <h2>ITERANDO ARRAY Y OBJETOS</h2>
          <ul>
            {
              <ul>
                {
                  mascotas.map((item, key)=> (
                    <li key={key}>{item.nombre} ({item.raza})</li>
                  ))
                }
              </ul>
            }
          </ul>
      </div>
    ) */
    
  }
}
export default ArrayObjects
