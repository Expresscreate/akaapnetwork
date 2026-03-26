import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Clock, Mail, Share2, Globe } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const services = [
    { name: 'Conception site web plus Community management', path: '/nos-services#web' },
    { name: 'Le Outsourcing à l’internationale', path: '/nos-services#outsourcing' },
    { name: 'Rédaction de contenu', path: '/nos-services#redaction' },
    { name: 'Traduction', path: '/nos-services#traduction' },
    { name: 'Transcription et sous-titrage audio/vidéo', path: '/nos-services#transcription' },
    { name: 'Paiement en ligne via PayPal et Payoneer', path: '/nos-services#paiement' },
    { name: 'Marketing digital', path: '/nos-services#marketing' },
  ];

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <header className="header glass-dark">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <strong>Nous Recrutons :</strong> Souhaitez-vous travailler avec nous ?
          </div>
          <div className="top-bar-right">
            <div className="top-bar-hours flex-center">
              <span className="icon-circle bg-orange"><Clock size={14} /></span>
              <span>Ouvert de 8h00 à 18h00.</span>
            </div>
            <div className="top-bar-socials flex-center">
              <a href="#" className="icon-circle bg-orange"><Share2 size={14} /></a>
              <a href="#" className="icon-circle bg-orange"><Globe size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-container container">
        <div className="logo-section">
          <Link to="/" className="logo-brand">
            <div className="logo-placeholder">
              <span className="sun-rays"></span>
              <h2>Akaap</h2>
              <h2 className="network-text">NETWORK</h2>
            </div>
          </Link>
          <span className="logo-tagline">| Les Solutions Techs au Service du<br/>Développement</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li><Link to="/" className={`nav-link ${isActive('/')}`}>Accueil</Link></li>
            <li><Link to="/qui-sommes-nous" className={`nav-link ${isActive('/qui-sommes-nous')}`}>Qui sommes-nous</Link></li>
            <li><Link to="/nos-formations" className={`nav-link ${isActive('/nos-formations')}`}>Nos Formations</Link></li>
            
            {/* Dropdown for Services */}
            <li 
              className="nav-item dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/nos-services" className={`nav-link flex-center ${isActive('/nos-services')}`}>
                Nos Services <ChevronDown size={14} style={{marginLeft: '2px'}}/>
              </Link>
              {isServicesOpen && (
                <ul className="dropdown-menu fade-in">
                  {services.map((service, index) => (
                    <li key={index}>
                      <Link to={service.path} className="dropdown-link">{service.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
          </ul>
        </nav>

        {/* Contact Assistance Block */}
        <div className="header-contact hidden-mobile">
          <Mail size={32} className="text-orange" strokeWidth={1.5} />
          <div className="header-contact-text">
            <span className="contact-label">Contact pour assistance</span>
            <span className="contact-number">+1 514 918-3793</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav slide-down">
          <ul className="mobile-nav-list">
            <li><Link to="/" onClick={toggleMenu}>Accueil</Link></li>
            <li><Link to="/qui-sommes-nous" onClick={toggleMenu}>Qui sommes-nous</Link></li>
            <li><Link to="/nos-formations" onClick={toggleMenu}>Nos Formations</Link></li>
            <li className="mobile-dropdown-title">Nos Services:</li>
            {services.map((service, index) => (
              <li key={index} className="mobile-subitem">
                <Link to={service.path} onClick={toggleMenu}>- {service.name}</Link>
              </li>
            ))}
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
