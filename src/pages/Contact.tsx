import { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    
    // Check honeypot field
    const honeypot = (form.elements.namedItem('website') as HTMLInputElement)?.value;
    if (honeypot) {
      e.preventDefault();
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page-container fade-in">
        <div className="page-header-bg">
          <div className="page-hero-box">
            <h1>Contact</h1>
            <div className="breadcrumbs">Accueil &gt; Contact</div>
          </div>
        </div>
        <div className="container page-layout-grid">
          <div className="page-content-wrapper">
            <div style={{ 
              textAlign: 'center', 
              padding: '3rem', 
              background: '#f0fdf4', 
              borderRadius: '12px',
              border: '1px solid #86efac'
            }}>
              <h2 style={{ color: '#16a34a', marginBottom: '1rem' }}>Message envoyé !</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
              </p>
              <a href="/contact" style={{ 
                color: 'var(--secondary-color)', 
                fontWeight: 600,
                textDecoration: 'underline'
              }}>
                Envoyer un autre message
              </a>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }

  return (
    <div className="page-container fade-in">
      <div className="page-header-bg">
        <div className="page-hero-box">
          <h1>Contact</h1>
          <div className="breadcrumbs">Accueil &gt; Contact</div>
        </div>
      </div>

      <div className="container page-layout-grid">
        <div className="page-content-wrapper">
          <form 
            action="https://formsubmit.co/akaapnetwork@gmail.com" 
            method="POST"
            className="contact-form"
            style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}
            onSubmit={handleSubmit}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="Nouveau message depuis le site Akaap Network" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={`${window.location.origin}/contact`} />
            
            {/* Honeypot for spam protection */}
            <input type="text" name="website" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />

            <div style={{display: 'flex', gap: '1.5rem', flexWrap: 'wrap'}}>
              <div style={{flex: '1 1 200px'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>
                  Prénom <span style={{color: 'red'}}>*</span>
                </label>
                <input 
                  type="text" 
                  name="prenom"
                  required
                  style={{width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem'}} 
                />
              </div>
              <div style={{flex: '1 1 200px'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>
                  Nom <span style={{color: 'red'}}>*</span>
                </label>
                <input 
                  type="text" 
                  name="nom"
                  required
                  style={{width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem'}} 
                />
              </div>
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>
                E-mail <span style={{color: 'red'}}>*</span>
              </label>
              <input 
                type="email" 
                name="email"
                required
                style={{width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem'}} 
              />
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>
                Sujet
              </label>
              <input 
                type="text" 
                name="sujet"
                style={{width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem'}} 
              />
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-dark)'}}>
                Message <span style={{color: 'red'}}>*</span>
              </label>
              <textarea 
                name="message"
                required
                rows={6} 
                style={{width: '100%', padding: '0.75rem', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', resize: 'vertical'}}>
              </textarea>
            </div>

            <button type="submit" className="btn-primary" style={{alignSelf: 'flex-start'}}>
              Envoyer le message
            </button>
          </form>

          <div style={{marginTop: '3rem'}}>
            <h3 style={{fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '1rem'}}>Autres moyens de nous contacter</h3>
            <div style={{marginTop: '1rem', color: 'var(--text-light)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
              <p><strong>Email:</strong> akaapnetwork@gmail.com</p>
              <p><strong>Téléphone:</strong> +1 514 918-3793</p>
              <p><strong>Adresse:</strong> Zeh Samuel – Biyem-Assi, Yaoundé, Cameroun</p>
            </div>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default Contact;
