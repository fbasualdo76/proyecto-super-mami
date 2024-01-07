import React from 'react';
import './VistaProducto.css';
import imgProductos from "../datos/imgProductos";
import { useState } from 'react';
/* por propiedad recibimos el producto */
function VistaProducto({ producto }) {
    const [textoBoton, setTextoBoton] = useState(true);
    const handleClick = () => {
        /* agregarAlCarrito(producto); */
        setTextoBoton(!textoBoton);
    };
    return (
        <div className='vista'>
            <div>
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <h2>${producto.precio.toFixed(2)}</h2>
                <button onClick={handleClick}>{textoBoton ? 'COMPRAR' : 'COMPRADO'}</button>
            </div>
            <div>
                <img src={imgProductos[producto.imagen]} alt={producto.nombre} />
            </div>
        </div>
    )
}
export default VistaProducto