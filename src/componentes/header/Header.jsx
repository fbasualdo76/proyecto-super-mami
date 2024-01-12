import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import logoSuperMami from "../../assets/logoSuperMami.png"
function Header() {
  return (
    <header className='header'>
      <Link to='/proyecto-super-mami'><img src={logoSuperMami} alt="Logo" /></Link>
      <nav className='nav'>
        <ul>
          <li><Link to='/proyecto-super-mami'>INICIO</Link></li>
          <li><Link to='/proyecto-super-mami/carrito'>CARRITO</Link></li>
          <li><Link to='/proyecto-super-mami/contacto'>CONTACTO</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header