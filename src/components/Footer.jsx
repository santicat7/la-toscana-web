// src/components/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>EXPERIENCIA</h2>
          <p>Creando momentos inolvidables en un entorno de elegancia y distinción.</p>
        </div>
        
        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/la-toscana">La Toscana Eventos</Link></li>
            <li><Link to="/la-chacra">La Chacra Eventos</Link></li>
            <li><Link to="/servicios">Nuestros Servicios</Link></li>
            <li><Link to="/galeria">Galería Visual</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contacto</h3>
          <p>📍 Paysandú, Uruguay</p>
          <p>📞 +598 99 000 000</p>
          <p>✉️ info@latoscanaeventos.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} La Toscana Eventos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
