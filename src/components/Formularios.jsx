import React, {useState} from 'react'

// (h3+input)*3

const Formularios = () => {

  const [nombre,setNombre] = useState(false)
  const [apellido,setApellido] = useState(false)
  const [email,setEmail] = useState(false)
  const [password,setPassword] = useState(false)

  const nombreRegex=/^[a-zA-Z]{3,16}$/
  const apellidoRegex = /^[a-zA-Z]{3,16}$/
  const emailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,30}[.][a-zA-Z]{2,4}$/
  const passwordRegex = /^[a-z0-9_-]{6,18}$/   

  const handleChangeNombre = (validarNombre) => {
    if (validarNombre.trim()) {
      if (nombreRegex.test(validarNombre)) {
        console.log('reg nombre bien')
        setNombre(true)
      }
    }
  }

  const handleChangeApellido = (validarApellido) => {
    if (validarApellido.trim()) {
      if (apellidoRegex.test(validarApellido)) {
        setApellido(true)
      }
    }
  }

  const handleChangeEmail = (validarEmail) => {
    if (validarEmail.trim()) {
      if (emailRegex.test(validarEmail)) {
        setEmail(true)
      }
    }
  }

  const handleChangePassword = (validarPassword) => {
    if (validarPassword.trim()) {
      if (passwordRegex.test(validarPassword)) {
        setPassword(true)
      }
    }
  }

  const handleEnviar = (e) => {
    e.preventDefault();
    if (nombre===true && apellido===true && email===true && password===true) {
      console.log('datos validadeos correctamente')
    }
    else {
      console.log('No enviados datos de manera correcta')
    }

    setTimeout( () => {
      window.location.reload()
    }, 4000)
    
  }

  return (
    <div className='container'>
      <h2>FORMULARIOS</h2>
      <form onSubmit={e => handleEnviar(e)}>
        <label>Nombres:</label>
        <input 
          type="text" 
          onChange={(e)=>handleChangeNombre(e.target.value)}
        />

        <label>Apellidos:</label>
        <input 
          type="text" 
          onChange={(e)=>handleChangeApellido(e.target.value)}
        />

        <label>Email:</label>
        <input 
          type="email" 
          onChange={(e)=>handleChangeEmail(e.target.value)}
        />

        <label>Password:</label>
        <input 
          type="password" 
          onChange={(e)=>handleChangePassword(e.target.value)}
        />

        <input type="submit" />

      </form>
      
    </div>
  )
}

export default Formularios
