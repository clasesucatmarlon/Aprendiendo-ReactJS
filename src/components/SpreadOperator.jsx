import React, { Component } from 'react'

class SpreadOperator extends Component {
  render() {

    const paisSurAmerica = ['Colombia', 'Venezuela', 'Perú', 'Argentina'];
    const paisEuropa = ['España', 'Italia', 'Francia', 'Portugal'];
    const paises = [...paisSurAmerica, ...paisEuropa]
    //console.log(paises)
    
    const auto1 = {
      puertas1: 2,
      ruedas1: 4,
      color1: 'azul'
      };
    const auto2 = {
      puertas2: 5,
      ruedas2: 4,
      color2: 'rojo'
      };

    const autos = {...auto1, ...auto2}
    console.log(autos)
    
    return (
      <div className='container'>
        <h2>SPREAD OPERATOR</h2>
      
      </div>
    )
  }
}
export default SpreadOperator;