import React from 'react'
import { useState, useEffect } from 'react'
import imgProductos from '../../datos/imgProductos'
const Formulario = () => {
    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagenSeleccionada, setImagenSeleccionada] = useState('');
    const [precio, setPrecio] = useState(0);
    // Cargar productos desde el localStorage al inicio
    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem('productos'));
        if (productosGuardados) {
            setProductos(productosGuardados);
        }
    }, []);
    const mostrarImagenes = () => {
        return Object.keys(imagenes).map((key, index) => {
            return (
                <img
                    key={index}
                    src={imagenes[key]}
                    alt={key}
                    onClick={() => {
                        setImagenSeleccionada(key);
                    }}
                />
            );
        });
    };
    const agregarProducto = (e) => {
        e.preventDefault();
        const producto = { nombre, precio };
        setProductos([...productos, producto]);
        setNombre('');
        setDescripcion('');
        setImagenSeleccionada('');
        setPrecio('');
        guardarProductos();
    };

    const guardarProductos = () => {
        localStorage.setItem('productos', JSON.stringify(productos));
    };
    return (
        <form onSubmit={agregarProducto}>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            <div>{mostrarImagenes()}</div>
            <input type="text" placeholder="Selecciona una imagen" value={imagenSeleccionada} readOnly onChange={(e) => setImagenSeleccionada(e.target.value)} />
            <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            <button type="submit">Agregar producto</button>
        </form>
        /*<div>
        <div>{mostrarImagenes()}</div>
        <input 
        type="text"
        value={imagenSeleccionada}
        readOnly
        />
        </div> */
    );
};
export default Formulario;