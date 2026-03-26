import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, ExternalLink } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="logo-placeholder logo-small">
              <h2>Akaap</h2>
              <h2 className="network-text">NETWORK</h2>
            </div>
            <p className="footer-tagline">
              Les Solutions Techs au Service du Développement.
            </p>
            <ul className="footer-contact-list">
              <li>
                <Phone size={15} className="text-orange" />
                <span>+1 514 918-3793</span>
              </li>
              <li>
                <MapPin size={15} className="text-orange" />
                <span>Zeh Samuel – Biyem-Assi, Yaoundé, Cameroun</span>
              </li>
              <li>
                <Mail size={15} className="text-orange" />
                <span>akaapnetwork@gmail.com</span>
              </li>
              <li>
                <Clock size={15} className="text-orange" />
                <span>Lun – Sam : 08h00 – 18h00</span>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/qui-sommes-nous">Qui sommes-nous</Link></li>
              <li><Link to="/nos-formations">Nos Formations</Link></li>
              <li><Link to="/nos-services">Nos Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Nos Services</h4>
            <ul className="footer-nav-list">
              <li><Link to="/nos-services">Conception site web</Link></li>
              <li><Link to="/nos-services#outsourcing">Outsourcing international</Link></li>
              <li><Link to="/nos-services#redaction">Rédaction de contenu</Link></li>
              <li><Link to="/nos-services#traduction">Traduction</Link></li>
              <li><Link to="/nos-services#transcription">Transcription & Sous-titrage</Link></li>
              <li><Link to="/nos-services#paiement">PayPal & Payoneer</Link></li>
              <li><Link to="/nos-services#marketing">Marketing digital</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Recherche</h4>
            <form className="footer-search" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Rechercher…" className="search-input" />
              <button type="submit" className="search-btn">OK</button>
            </form>

            <h4 className="footer-heading" style={{ marginTop: '1.75rem' }}>
              Démarrer un projet
            </h4>
            <Link to="/contact" className="footer-cta-link">
              <ExternalLink size={14} /> Contactez-nous
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <strong>Akaap Network</strong>. Tous droits réservés.
          </p>
          <p className="footer-copy footer-legal">
            RC/YAO/2012/A/234 &nbsp;|&nbsp; NIU : P059014379406G
          </p>
          <Link to="/conditions-d-utilisation" className="footer-terms-link">
            Conditions d'Utilisation
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
