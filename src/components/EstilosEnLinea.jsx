import React, { Component } from 'react';

class EstilosEnLinea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const estilos = {
      backgroundColor: 'white',
      width: '100%'
    }
    const titulo = {
      color: 'red',
    }

    return (
      <div className="container">
        <h2 style={titulo}>ESTILOS EN LINEA</h2>
        <h4 style={estilos}>Hola {this.props.nombre}</h4>
      </div>
    );
  }
}

export default EstilosEnLinea;