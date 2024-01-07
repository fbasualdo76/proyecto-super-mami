import "./Producto.css";
import { Link } from "react-router-dom";
import imgProductos from "../../datos/imgProductos";
import { useState } from 'react';
function Producto(props) {
    const [textoBoton, setTextoBoton] = useState(true);
    const handleClick = () => {
        /* agregarAlCarrito(producto); */
        setTextoBoton(!textoBoton);
    };
    return (
        <div className='divProducto'>
            <Link to={props.nombre}>
                <img src={imgProductos[props.imagen]} alt={props.nombre} />
            </Link>
            {/* PRECIO REAL
            <h2>{props.precio}</h2>
            PRECIO FORMATEADO */}
            <h2>${props.precio.toFixed(2)}</h2>
            <p>{props.nombre.slice(0, 25)}</p>
            <p>{props.descripcion}</p>
            <button onClick={handleClick}>{textoBoton ? 'COMPRAR' : 'COMPRADO'}</button>
        </div>
    );
}
export default Producto