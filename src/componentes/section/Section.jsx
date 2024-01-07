import React from 'react'
import './Section.css'
import imgSection from '../../datos/imgSection'

function Section() {
    return (
        <section className='section'>
            {Object.values(imgSection).map((imagen, index) => (
                <div className='divSection' key={index}>
                    <img src={imagen.src} alt={imagen.alt} />
                </div>
            ))}
        </section>
    )
}

export default Section