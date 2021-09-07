import React, { Component } from 'react';

class Propiedades extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h2>PROPIEDADES</h2>
        <h4>Hola {this.props.nombre}</h4>
      </div>
    );
  }
}

export default Propiedades;