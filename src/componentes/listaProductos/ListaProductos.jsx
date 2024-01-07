import React from 'react'
import Producto from '../producto/Producto';
{/* importamos el array de objetos*/ }
import productos from "../../datos/productos";
import "./ListaProductos.css";
function ListaProductos() {
    return (
        <div className='contenedor'>
            {productos.map((producto, index) => (
                <Producto
                    key={index}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    imagen={producto.imagen}
                    precio={producto.precio}
                />
            ))}
        </div>
    )
}
export default ListaProductos