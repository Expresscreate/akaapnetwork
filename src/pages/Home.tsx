import { Users, Headphones, Edit, Trophy, BarChart, Settings, CheckCircle, Monitor, Coffee, Heart, Globe, Camera, Scissors, Car, Target, Calendar, ArrowRight, Zap, Award, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import teamIllustration from '../assets/team_illustration.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

const infoCards = [
  { Icon: Users,     title: 'Equipe Dédiée',       text: 'Nos équipes sont là pour vous servir.' },
  { Icon: Headphones,title: 'Assistance 7j/7',     text: "L'assistance 24h/24 et 7j/7 garantie pour tous nos clients." },
  { Icon: Edit,      title: 'Service Rapide',      text: 'Les commandes de dernières minutes et urgentes sont notre spécialité.' },
  { Icon: Trophy,    title: 'Equipe Expérimentée', text: "Nos techniciens et ingénieurs ont de nombreuses années d'expérience." },
];

const serviceCards = [
  { Icon: BarChart,     title: 'Développement Web',     text: "Nous développons vos solutions web à l'aide des technologies de pointe.", link: '/nos-services' },
  { Icon: Settings,     title: 'Formation',              text: 'Nous vous aidons à développer de nouvelles compétences et atteindre vos objectifs.', link: '/nos-formations' },
  { Icon: CheckCircle,  title: 'Recevez vos Paiements',  text: "Nous vous aidons à créer et à gérer vos comptes Payoneer et PayPal.", link: '/nos-services#paiement' },
];

const conceptionItems = [
  { Icon: Monitor,  label: "Site d'entreprise" },
  { Icon: Coffee,   label: 'Cafés et restaurants' },
  { Icon: Heart,    label: 'Site de mariage' },
  { Icon: Target,   label: 'Club sportif' },
  { Icon: Camera,   label: 'Art et photographie' },
  { Icon: Globe,    label: 'Site de voyance' },
  { Icon: Car,      label: 'Automobiles et motos' },
  { Icon: Scissors, label: 'Cosmétique / esthétique' },
];

const Home = () => {
  useScrollReveal();

  return (
    <div className="home-page">
      {/* Dynamic Hero Slider */}
      <HeroSlider />

      {/* ── INFO CARDS ── */}
      <section className="info-cards-section container">
        <div className="info-cards-grid">
          {infoCards.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              className="info-card"
              data-reveal
              style={{ '--reveal-delay': `${i * 0.12}s` } as React.CSSProperties}
            >
              <div className="circle-icon icon-hover-spin">
                <Icon size={32} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── À PROPOS DE NOUS ── */}
      <section className="about-preview-section">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-image" data-reveal>
              <div className="about-image-wrapper">
                <div className="about-image-placeholder">
                  <div className="about-image-overlay" />
                  <div className="about-image-content">
                    <span className="about-image-year">Depuis 2010</span>
                    <span className="about-image-text">L'innovation digitale au service de l'Afrique</span>
                  </div>
                </div>
                <div className="about-float-card about-float-card-1">
                  <Award size={24} className="text-orange" />
                  <div>
                    <span className="float-card-number">15+</span>
                    <span className="float-card-label">Années d'expérience</span>
                  </div>
                </div>
                <div className="about-float-card about-float-card-2">
                  <Globe2 size={24} className="text-orange" />
                  <div>
                    <span className="float-card-number">500+</span>
                    <span className="float-card-label">Projets réalisés</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-preview-content" data-reveal>
              <span className="section-badge-orange">Qui sommes-nous</span>
              <h2 className="section-title">
                La start-up digitale qui<br />
                <span className="text-orange">transforme vos idées</span> en réalité
              </h2>
              <p className="about-preview-text">
                AKAAP NETWORK est une start-up Africaine née au Cameroun en 2010. Nous avons commencé avec une vision audacieuse : utiliser le numérique comme levier pour résoudre les défis de développement en Afrique.
              </p>
              <p className="about-preview-text">
                Aujourd'hui, nous accompagnons entreprises et académiciens de A à Z dans l'accroissement de leur performance digitale. Du développement web au marketing en ligne, en passant par la formation et l'accompagnement stratégique.
              </p>

              <div className="about-features-grid">
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <Zap size={22} />
                  </div>
                  <div>
                    <h4>Solutions Innovantes</h4>
                    <p>Technologies de pointe pour propulser votre activité</p>
                  </div>
                </div>
                <div className="about-feature-item">
                  <div className="about-feature-icon">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4>Équipe Experte</h4>
                    <p>Professionnels passionnés à votre service</p>
                  </div>
                </div>
              </div>

              <Link to="/qui-sommes-nous" className="btn-primary">
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOS SERVICES ── */}
      <section className="services-section container text-center">
        <span className="section-badge-orange" data-reveal>Explorez</span>
        <h2 className="section-title" data-reveal>
          Nos <span className="text-orange">Services</span>
        </h2>
        <p className="section-subtitle" data-reveal>
          Nous fournissons plusieurs services à nos clients locaux et internationaux.
        </p>

        <div className="services-grid">
          {serviceCards.map(({ Icon, title, text, link }, i) => (
            <div
              key={i}
              className="service-card"
              data-reveal
              style={{ '--reveal-delay': `${i * 0.15}s` } as React.CSSProperties}
            >
              <div className="service-icon icon-hover-bounce">
                <Icon size={40} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to={link} className="read-more">Lire la suite</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONCEPTION SECTION ── */}
      <section className="conception-section">
        <div className="container text-center">
          <span className="section-badge-orange" data-reveal>Explorez</span>
          <h2 className="section-title" data-reveal>
            Conception site web &amp; Community manager
          </h2>
          <p className="section-subtitle" data-reveal>
            Création de site web à partir de 6 500 FCFA + Community manager
          </p>

          <div className="conception-grid">
            {/* Animated SVG illustration */}
            <div className="conception-illustration" data-reveal>
            {/* Generated bitmap illustration */}
              <img
                src={teamIllustration}
                alt="Équipe au travail — illustration"
                className="team-bitmap-img"
              />
            </div>

            {/* Chip list */}
            <div className="conception-list">
              {conceptionItems.map(({ Icon, label }, i) => (
                <div
                  key={i}
                  className="conception-item chip-hover"
                  data-reveal
                  style={{ '--reveal-delay': `${i * 0.08}s` } as React.CSSProperties}
                >
                  <Icon size={18} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="cta-banner" data-reveal>
        <div className="container">
          <div className="cta-content">
            <p className="cta-overhead">Avez-vous un projet ?</p>
            <h2>
              Découvrons ensemble les possibilités de solutions adaptées à votre projet.
            </h2>
            <Link to="/contact">
              <button className="btn-white">Contactez-Nous</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG SECTION ── */}
      <section className="blog-section container">
        <div className="blog-section-header" data-reveal>
          <div>
            <span className="section-badge-orange">Actualités</span>
            <h2 className="section-title">Derniers <span className="text-orange">Articles</span></h2>
            <p className="section-subtitle">Conseils, tutoriels et actualités du digital.</p>
          </div>
          <Link to="#" className="blog-see-all">Voir tous les articles <ArrowRight size={16} /></Link>
        </div>

        <div className="blog-grid">
          {[
            {
              slug: 'travailler-depuis-domicile',
              cat: 'Formation',
              catColor: '#ff5a1f',
              date: '15 Mars 2026',
              image: 'https://images.pexels.com/photos/36508716/pexels-photo-36508716.jpeg?auto=compress&cs=tinysrgb&w=800',
              title: 'Comment travailler de chez soi sur Internet en 2026 ?',
              excerpt: 'Travailler à domicile est devenu une réalité pour de nombreux Africains. Découvrez nos meilleures astuces pour démarrer et réussir en freelance.',
              delay: 0,
            },
            {
              slug: 'paypal-vs-payoneer',
              cat: 'Services',
              catColor: '#0b0f24',
              date: '10 Mars 2026',
              image: 'https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=800',
              title: 'PayPal vs Payoneer : quelle solution choisir pour recevoir vos paiements ?',
              excerpt: 'Nous comparons les deux plateformes leaders du paiement international pour vous aider à choisir celle qui convient le mieux à votre activité.',
              delay: 0.12,
            },
            {
              slug: 'pourquoi-un-site-web-en-2026',
              cat: 'Numérique',
              catColor: '#ff5a1f',
              date: '2 Mars 2026',
              image: 'https://images.pexels.com/photos/29459444/pexels-photo-29459444.jpeg?auto=compress&cs=tinysrgb&w=800',
              title: 'Pourquoi votre entreprise a besoin d\'un site web en 2026',
              excerpt: 'Aujourd\'hui, un site web est bien plus qu\'une vitrine. C\'est un outil de croissance, de crédibilité et de génération de revenus en continu.',
              delay: 0.24,
            },
          ].map((post, i) => (
            <article
              key={i}
              className="blog-card"
              data-reveal
              style={{ '--reveal-delay': `${post.delay}s` } as React.CSSProperties}
            >
              <Link to={`/blog/${post.slug}`} className="blog-card-link">
                <div 
                  className="blog-card-img-placeholder"
                  style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="blog-img-overlay" />
                  <span className="blog-cat-badge" style={{ background: post.catColor }}>
                    {post.cat}
                  </span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <Calendar size={13} />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="blog-read-more">
                    Lire l'article <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
