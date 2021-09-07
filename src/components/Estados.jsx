import React, { Component } from 'react';

class Estados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: 'Marlon',
      apellido: 'GARCIA'
    }
  }

  // handleData() {
  //   this.setState({nombre: 'Leidy Gandica'})
  // }

  render() {
    // FUNCIONES
    const handleData= () => {
      // if (this.state.nombre==='Marlon' && this.state.apellido==='GARCIA') {
      //   this.setState({ nombre: 'Leidy', apellido: 'GANDICA' })
      // } else {
      //   this.setState({ nombre: 'Marlon', apellido: 'GARCIA' })
      // }

      (this.state.nombre==='Marlon' && this.state.apellido==='GARCIA') ? 
        this.setState({ nombre: 'Leidy', apellido: 'GANDICA' }) 
      : 
        this.setState({ nombre: 'Marlon', apellido: 'GARCIA' })

    }

    return (
      <div className='container'>
        <h2>ESTADOS</h2>
        <h4>Mi nombre es {this.state.nombre} {this.state.apellido}</h4>
        <button onClick={handleData}>Cambiar datos</button>
      </div>
    );
  }
}

export default Estados;