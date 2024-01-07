import React from 'react'
import './Footer.css'
import imgFooter from '../../datos/imgFooter'

function Footer() {
    return (
        <footer className='footer'>
            <div className='divTextoFooter'><p>Supermercado Super Mami S.A. - Todos los derechos reservados.</p></div>
            {Object.values(imgFooter).map((imagen, index) => (
                <div className='divImagenFooter' key={index}>
                    <img src={imagen.src} alt={imagen.alt} />
                </div>
            ))}
        </footer>
    )
}

export default Footer