import React, { Component } from 'react';

class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 'Marlon',
      apellido: 'GARCIA'
    }
  }
  render() {
    const styleValid = {
      backgroundColor: 'green',
    }
    const styleInvalid = {
      backgroundColor: 'red',
    }
    return (
      <div className='container'>
        <h2>RENDERIZADO CONDICIONAL</h2>
        {
          this.state.nombre==='Marlon' ?
            <h4 style={styleValid}>Es Marlon</h4>
          :
            <h4 style={styleInvalid}>No es Marlon</h4>
        }
      </div>
    );
  }
}

export default RenderizadoCondicional;