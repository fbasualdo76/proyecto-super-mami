import React from 'react'
import "./Contacto.css";

function Contacto() {
  return (
    <div className='contacto'>
      <div>
        <h2>Completá nuestro formulario y pronto te contactaremos!.</h2>
        <form action="">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />

          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />

          <label htmlFor="mensaje">Mensaje:</label>
          <textarea id="mensaje" name="mensaje" required></textarea>

          <button type="submit">ENVIAR</button>
          {/* <button onClick={handleClick}>{textoBoton ? 'COMPRAR' : 'COMPRADO'}</button> */}
        </form>
      </div>
      <div>
        <h2>Te esperamos en nuestras sucursales!.</h2>
        <iframe src="https://www.google.com/maps/d/embed?mid=14SbAtQBFj_q-9j_LXehS22FckJnYYKaf&ehbc=2E312F" width="100%" height="300"></iframe>
      </div>
    </div> )
}

      export default Contacto