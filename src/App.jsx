import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/header/Header';
import Section from './componentes/section/Section';
import Footer from './componentes/footer/Footer';
import Contacto from './componentes/contacto/Contacto.jsx'
import ListaProductos from './componentes/listaProductos/ListaProductos.jsx';
import productos from './datos/productos.js';
import VistaProducto from './vistas/VistaProducto.jsx';
import Slider from './componentes/slider/Slider.jsx';
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Slider />
        <main>
          <Routes>
            <Route path="/proyecto-super-mami" element={<ListaProductos />} />
            <Route path="/proyecto-super-mami/carrito" element={<div>CARRITO</div>} />
            <Route path="/proyecto-super-mami/contacto" element={<Contacto />} />
            {productos.map((producto) => (
              <Route key={producto.nombre} path={`/proyecto-super-mami/${producto.nombre}`} element={<VistaProducto producto={producto} />} />
            ))}
          </Routes>
          <Section />
        </main>
        <Footer />
      </div>
    </Router>
  )
}
export default App