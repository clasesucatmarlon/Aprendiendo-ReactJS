import React from 'react'
// iNSTALAR React Hook Form: npm install react-hook-form
// url: https://bluuweb.github.io/react-udemy/04-formularios/#agregar-a-una-lista
// https://react-hook-form.com/get-started/

import { useForm } from 'react-hook-form'

const Formularios2 = () => {

  const {register, errors, handleSubmit} = useForm();

  const onSubmit = (data) => {
      console.log(data)
  }

  return (
    <div className='container'>
      <h2>FORMULARIOS CON React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
            placeholder="Ingrese nombre de usuario"
            className="form-control mb-2"
            name="usuario"
            type="text"
            ref={
              register({
                  required: {
                      value: true, 
                      message: 'Nombre es requerido'
                      }, 
                  maxLength: {
                      value: 5, 
                      message: 'No más de 5 carácteres!'
                      },
                  minLength: {
                      value: 2, 
                      message: 'Mínimo 2 carácteres'
                      }
              })
          }
        />
        <button type="submit" className="btn btn-primary">
            Enviar
        </button>
      </form>
      
      
    </div>
  )
}

export default Formularios2
