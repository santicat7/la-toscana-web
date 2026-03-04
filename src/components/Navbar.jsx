import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link 
        to="/" 
        className="nav-brand" 
        onClick={closeMenu}
        style={{ color: scrolled ? 'var(--color-primary)' : '#ffffff' }}
      >
        EVENTOS LA CHACRA & LA TOSCANA
      </Link>
      
      <button 
        className="nav-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Alternar menú"
        style={{ color: scrolled ? 'var(--color-primary)' : '#ffffff' }}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink 
            to="/" 
            className="nav-link" 
            onClick={closeMenu} 
            end
            style={({ isActive }) => ({
              color: scrolled ? 'var(--color-text)' : '#ffffff',
              opacity: isActive ? 1 : (scrolled ? 0.8 : 0.9)
            })}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/la-toscana" 
            className="nav-link" 
            onClick={closeMenu}
            style={({ isActive }) => ({
              color: scrolled ? 'var(--color-text)' : '#ffffff',
              opacity: isActive ? 1 : (scrolled ? 0.8 : 0.9)
            })}
          >
            La Toscana
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/la-chacra" 
            className="nav-link" 
            onClick={closeMenu}
            style={({ isActive }) => ({
              color: scrolled ? 'var(--color-text)' : '#ffffff',
              opacity: isActive ? 1 : (scrolled ? 0.8 : 0.9)
            })}
          >
            La Chacra
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/servicios" 
            className="nav-link" 
            onClick={closeMenu}
            style={({ isActive }) => ({
              color: scrolled ? 'var(--color-text)' : '#ffffff',
              opacity: isActive ? 1 : (scrolled ? 0.8 : 0.9)
            })}
          >
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/galeria" 
            className="nav-link" 
            onClick={closeMenu}
            style={({ isActive }) => ({
              color: scrolled ? 'var(--color-text)' : '#ffffff',
              opacity: isActive ? 1 : (scrolled ? 0.8 : 0.9)
            })}
          >
            Galería
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contacto" 
            className="nav-link" 
            onClick={closeMenu}
            style={({ isActive }) => ({
              color: scrolled ? 'var(--color-text)' : '#ffffff',
              opacity: isActive ? 1 : (scrolled ? 0.8 : 0.9)
            })}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
