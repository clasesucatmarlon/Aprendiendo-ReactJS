import React, { Component } from 'react'

import {
  Link,
  NavLink
} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1>Aprendiendo ReactJS </h1>
        <div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink exact to='/' activeClassName='btn btn-dark active'>Home</NavLink>
              {/* <a className="nav-link" aria-current="page" href="/">Home</a> */}
            </li>
            <li className="nav-item">
              <NavLink to='/fetch' activeClassName='btn btn-dark active'>Fetch</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/comunicacion' activeClassName='btn btn-dark active'>Comunicación</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/arrayobjetos' activeClassName='btn btn-dark active'>Array-Objetos</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to='/spread' activeClassName='btn btn-dark active'>SpreadOperator</NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to='/condicional' activeClassName='btn btn-dark active'>Condicional</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to='/formularios' activeClassName='btn btn-dark active'>Formularios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/estados' activeClassName='btn btn-dark active'>Estados</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/stylecomponentes' activeClassName='btn btn-dark active'>StylesComponentes</NavLink>
            </li>
          </ul>

        </div>
      </div>
    )
  }
}
