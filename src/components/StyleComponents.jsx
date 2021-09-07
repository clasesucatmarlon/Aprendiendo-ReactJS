import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import '../css/styles.css'

// INSTALAR STYLES-COMPONENTS: npm i styled-components
// LINK: https://styled-components.com/
// Extensión: vscode-styled-components

class StyleComponents extends Component {
  render() {
    const animarTexto = keyframes `
      from {
        color: white;
        text-transform: uppercase;
      }
      to {
        color: yellow;
        text-transform: lowercase;
      }
    `

    const Titulo =  styled.h2 `
      background-color: var(--colorFondo);
      &:hover {
        color: blue;
      }

      @media(max-width:360px) {
        font-size: 1rem;
        background-color: green;
      }

      animation: ${animarTexto} 2s linear infinite;
    `
  
    return (
      <div className='container'>
        <Titulo>STYLE COMPONENTS</Titulo>
        <h4>Desde style components</h4>
      </div>
    );
  }
}

export default StyleComponents;