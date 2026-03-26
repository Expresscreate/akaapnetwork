import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  badge: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  // image will be set via CSS background; placeholder until user provides images
  bgImage?: string;
}

const slides: Slide[] = [
  {
    id: 0,
    badge: 'Formation Professionnelle',
    title: 'Formation métier de freelance',
    description:
      'Travailler à domicile peut être un choix de vie ou un moyen de compléter ses revenus. Pour de plus en plus d\'Africains, travailler chez soi est devenu une réalité, avec de nombreux avantages. Il suffit juste d\'avoir une bonne connexion web et un ordinateur.',
    cta: 'Voir nos formations',
    ctaLink: '/nos-formations',
    bgImage: '/freelancer.jpg',
  },
  {
    id: 1,
    badge: 'Paiements Internationaux',
    title: 'Paiement en ligne via PayPal et Payoneer',
    description:
      'Payoneer est un service qui vous permet d\'accepter des paiements au même titre que PayPal, Skrill, payer etc. Grâce à Payoneer vous avez la possibilité d\'avoir un compte bancaire dans presque tous les pays peu importe votre zone géographique (France, Canada, Afrique du sud, USA, Chine…). En plus vous pouvez recevoir votre paiement en monnaie locale.',
    cta: 'En savoir plus',
    ctaLink: '/nos-services#paiement',
    bgImage: '/payment.jpg',
  },
  {
    id: 2,
    badge: 'Conception site web + Community manager',
    title: 'Votre présence digitale commence ici',
    description:
      'Internet est le seul support de communication où vous pouvez diffuser aussi bien des photos, de la musique, podcasting, ou des vidéos. La création d\'un site web est une étape incontournable dans la stratégie de croissance d\'une entreprise ou d\'un business. Aujourd\'hui, le site web est devenu un véritable outil de communication et un outil marketing puissant.',
    cta: 'Voir nos services',
    ctaLink: '/nos-services',
    bgImage: '/social-manager.jpg',
  },
];

const AUTOPLAY_INTERVAL = 6000;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState<'in' | 'out' | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right' = 'right') => {
      if (index === current) return;
      setDirection(dir);
      setAnimating('out');
      setTimeout(() => {
        setCurrent(index);
        setAnimating('in');
        setTimeout(() => setAnimating(null), 600);
      }, 350);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'right');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'left');
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const slideClass = [
    'slider-text',
    animating === 'out'
      ? direction === 'right'
        ? 'slide-exit-left'
        : 'slide-exit-right'
      : '',
    animating === 'in'
      ? direction === 'right'
        ? 'slide-enter-right'
        : 'slide-enter-left'
      : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className="hero-slider" aria-label="Hero slider">
      {/* Background layers – one per slide so they can cross-fade */}
      <div className="slider-bg-track">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`slider-bg ${i === current ? 'slider-bg-active' : ''}`}
            style={
              s.bgImage
                ? { backgroundImage: `url(${s.bgImage})` }
                : { backgroundImage: `url(/src/assets/hero.png)` }
            }
          />
        ))}
        {/* dark navy overlay */}
        <div className="slider-overlay" />
      </div>

      {/* Slide content */}
      <div className="slider-content container">
        <div key={current} className={slideClass}>
          <span className="hero-badge">{slide.badge}</span>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className="slider-ctas">
            <Link to={slide.ctaLink}>
              <button className="btn-primary">{slide.cta}</button>
            </Link>
            <Link to="/contact">
              <button className="btn-outline-white">Contactez-nous</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Arrow controls */}
      <button className="slider-arrow slider-arrow-left" onClick={prev} aria-label="Slide précédente">
        <ChevronLeft size={28} />
      </button>
      <button className="slider-arrow slider-arrow-right" onClick={next} aria-label="Slide suivante">
        <ChevronRight size={28} />
      </button>

      {/* Dot indicators */}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === current ? 'slider-dot-active' : ''}`}
            onClick={() => goTo(i, i > current ? 'right' : 'left')}
            aria-label={`Aller à la slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="slider-progress">
        <div key={`progress-${current}`} className="slider-progress-bar" />
      </div>
    </section>
  );
};

export default HeroSlider;
