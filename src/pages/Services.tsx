import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';

const Services = () => {
  const { hash } = useLocation();
  const [activeService, setActiveService] = useState('web');

  useEffect(() => {
    if (hash) {
      const serviceMap: { [key: string]: string } = {
        '#web': 'web',
        '#outsourcing': 'outsourcing',
        '#redaction': 'redaction',
        '#traduction': 'traduction',
        '#transcription': 'transcription',
        '#paiement': 'paiement',
        '#marketing': 'marketing',
      };
      setActiveService(serviceMap[hash] || 'web');
      window.scrollTo(0, 0);
    } else {
      setActiveService('web');
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const serviceData = {
    web: {
      title: "Conception site web plus Community management",
      bgTitle: "Accueil > Conception site web plus Community management",
      content: (
        <>
          <p><strong>Création de site web à partir de 6 500 FCFA + Community manager</strong></p>
          <p>
            Internet est le seul support de communication où vous pouvez diffuser aussi bien des photos, de la musique, potscasting, ou des vidéos. Cette capacité en fait un support riche et dynamique.
          </p>
          <p>
            La création d'un site web est une étape incontournable dans la stratégie de croissance d'une entreprise ou d'un business. Aujourd'hui, le site web est devenu un véritable outil de communication et un outil marketing puissant.
          </p>
          <p><strong>La création de site Web pour tous</strong></p>
          <p>
            Pour nous, la première étape est de connaître vos objectifs et de choisir un sujet en conséquence. S'agira t-il d'un site professionnel, récréatif ou autre? Voulez vous partager une passion, rencontrer des gens, créer un réseau d'affaires, présenter vos services... c'est vous qui décidez! Après le choix de votre nom de domaine et le choix d'un hébergeur votre site web va vous permettre d'ouvrir votre activité au monde.
          </p>
          <p>Voici des exemples de sites crées par Akaap Network, regroupés par catégorie :</p>
          <ul>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Site d'entreprise</li>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Site pour cafés et restaurants</li>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Site de mariage</li>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Site d'automobiles et motos</li>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Site pour club sportif</li>
          </ul>
          <p style={{marginTop: '1.5rem'}}>
            Le <strong>Community manager est </strong> un <strong>métier</strong> qui consiste à animer et à fédérer des communautés web pour le compte d'une entreprise ou d'une marque. Vous êtes une entreprise, un particulier, une ONG, une association vous voulez développer une présence en ligne de qualité mais ne disposez pas de temps pour le faire, Akaap Network met à votre disposition après la conception de votre site web des Community Manager qualifiés et disponibles pour vous.
          </p>
          <p>
            <span style={{color: 'var(--secondary-color)', fontStyle: 'italic', fontWeight: '600'}}>Nos Offres</span>
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><div style={{background: '#22c55e', borderRadius: '4px', padding: '2px'}}><Check size={14} color="white" /></div> Veille sur les réseaux sociaux</div>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><div style={{background: '#22c55e', borderRadius: '4px', padding: '2px'}}><Check size={14} color="white" /></div> Entretien de votre communauté digitale</div>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><div style={{background: '#22c55e', borderRadius: '4px', padding: '2px'}}><Check size={14} color="white" /></div> Formation de renforcement des capacités en interne</div>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><div style={{background: '#22c55e', borderRadius: '4px', padding: '2px'}}><Check size={14} color="white" /></div> Boost de vos pages</div>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><div style={{background: '#22c55e', borderRadius: '4px', padding: '2px'}}><Check size={14} color="white" /></div> Création d'un visuel de qualité (Photo et vidéo)</div>
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><div style={{background: '#22c55e', borderRadius: '4px', padding: '2px'}}><Check size={14} color="white" /></div> Rédaction de Contenu</div>
          </div>
        </>
      )
    },
    outsourcing: {
      title: "Le Outsourcing à l'internationale",
      bgTitle: "Accueil > Le Outsourcing à l'internationale",
      content: (
        <>
          <p>
            L'outsourcing désigne le fait pour une entreprise d'externaliser (sous-traiter) certaines de ses activités auprès d'un prestataire de service spécialisé dans le domaine concerné. L'outsourcing est un terme anglais qui se traduit par "externalisation". Un concept mis en place dans le monde de l'entreprise et qui se développe depuis quelques années, notamment depuis la crise économique et financière de 2008.
          </p>
          <p>
            Nous offrons nos services de Traduction, transcription, rédaction web, interprétation en ligne, sous-titrage, conception de site web et application, Community management, vente en ligne, infographie, montage vidéo et audio. Partout dans le monde et sur les plateformes de travail en ligne (Fiverr, Freelancers, Upwork, Gotranscript etc.) faites-nous confiance vous ne serez pas déçu.
          </p>
          <p>
            Vous êtes une PME, une StartUp, vous avez des problèmes pour la mise en place de votre business en ligne ? Nos experts en entrepreneuriat web vous accompagnent dans la création d'un revenu <span style={{color: 'var(--secondary-color)'}}>passif sur internet sans passer des heures devant un écran.</span>
          </p>
          <p>
            Mais ne savez pas comment faire. Donnez-nous les commandes de vos pages et site web, nous n'allons pas vous décevoir. Notre StartUp est un prestataire de services de qualité. Conseillée en stratégie digitale et spécialiste du Branding, elle vous accompagne dans le développement de votre notoriété en ligne avec un regard moderne, professionnel et objectif.
          </p>
          <p>
            Faire appel à notre StartUp est un réel gain de temps pour votre entreprise. De la mise en place de la stratégie webmarketing à la conception de votre identité de marque, votre interlocuteur se charge de tout.
          </p>
        </>
      )
    },
    redaction: {
      title: "Rédaction de contenu web",
      bgTitle: "Accueil > Rédaction de contenu web",
      content: (
        <>
          <p>
            Un contenu de qualité est essentiel pour attirer et retenir l'attention de vos clients. Chez Akaap Network, nous proposons des services de rédaction web professionnelle pour tous vos besoins digitaux.
          </p>
          <p>
            <strong>Nos services de rédaction incluent :</strong>
          </p>
          <ul>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Articles de blog</strong> — Contenus optimisés SEO pour améliorer votre visibilité en ligne</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Copywriting</strong> — Textes persuasifs pour vos pages de vente et landing pages</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Newsletters</strong> — Emails engageants pour fidéliser vos clients</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Contenus pour réseaux sociaux</strong> — Posts optimisés pour chaque plateforme</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Descriptions produits</strong> — Textes accrocheurs pour vos catalogues en ligne</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>White papers</strong> — Documents professionnels pour présenter votre expertise</li>
          </ul>
          <p>
            Nos rédacteurs maîtrisent parfaitement le français et l'anglais, ce qui nous permet de servir une clientèle locale et internationale. Chaque contenu est unique, bien researched, et optimisé pour les moteurs de recherche.
          </p>
          <p>
            <span style={{color: 'var(--secondary-color)', fontWeight: '600'}}>Tarifs :</span> Selon la complexité et le volume, nous établissons un devis personnalisé après discussion de vos besoins.
          </p>
        </>
      )
    },
    traduction: {
      title: "Traduction professionnelle",
      bgTitle: "Accueil > Traduction professionnelle",
      content: (
        <>
          <p>
            Dans un monde de plus en plus connecté, la traduction est devenue un outil indispensable pour les entreprises qui souhaitent se développer à l'international. Akaap Network propose des services de traduction professionnels pour toutes vos necesidades.
          </p>
          <p>
            <strong>Nos paires de langues :</strong>
          </p>
          <ul>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Français → Anglais</strong> — Pour vos communications avec le marché anglophone</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Anglais → Français</strong> — Traduction de documents techniques, commerciaux, et scientifiques</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Français → Espagnol</strong> — Pour le marché hispanophone</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Autres langues</strong> — Nous disposons d'un réseau de traducteurs professionnels</li>
          </ul>
          <p>
            <strong>Types de documents traduits :</strong>
          </p>
          <ul>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Sites web et contenus digitaux</li>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Documents commerciaux et contractuels</li>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Manuels techniques et guides d'utilisation</li>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Contenu marketing et publicitaire</li>
            <li style={{marginBottom: '0.25rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-light)'}}>Courriers et communications officielles</li>
          </ul>
          <p>
            Toutes nos traductions sont realizadas par des native speakers ou des traducteurs professionnels avec une expertise dans le domaine concerné. Nous garantissons une qualité, une confidentialité, et des délais respected.
          </p>
        </>
      )
    },
    transcription: {
      title: "Transcription et sous-titrage audio/vidéo",
      bgTitle: "Accueil > Transcription et sous-titrage audio/vidéo",
      content: (
        <>
          <p>
            Vous avez des enregistrements audio ou vidéo que vous souhaitez rendre accessibles ? Akaap Network propose des services de transcription et de sous-titrage précis et rapides.
          </p>
          <p>
            <strong>Nos services de transcription :</strong>
          </p>
          <ul>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Transcription simple</strong> — Conversion de vos fichiers audio en texte écrit</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Transcription avec timestamps</strong> — Pour une meilleure navigation dans les enregistrements longs</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Transcription speaker identification</strong> — Attribution du locuteur pour chaque intervention</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Transcription en plusieurs langues</strong> — Français, Anglais, langues africaines locales</li>
          </ul>
          <p>
            <strong>Nos services de sous-titrage :</strong>
          </p>
          <ul>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Sous-titres pour vidéos</strong> — Pour YouTube, réseaux sociaux, présentations</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Sous-titres traduits</strong> — Passage de vos vidéos dans une autre langue</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Sous-titres pour sourds et malentendants (SDH)</strong> — Incluant descriptions sonores et identification des locuteurs</li>
          </ul>
          <p>
            Nous acceptons les fichiers dans tous les formats courants (MP3, WAV, MP4, AVI, etc.) et livrons dans le format de votre choix. Nos délais sont rapides, avec la possibilité d'un service urgent pour vos projets prioritaires.
          </p>
        </>
      )
    },
    paiement: {
      title: "Paiement en ligne via PayPal et Payoneer",
      bgTitle: "Accueil > Paiement en ligne via PayPal et Payoneer",
      content: (
        <>
          <p>
            Vous travaillez avec des clients internationaux ou souhaitez être payé en ligne ? Akaap Network vous accompagne dans la création et la gestion de vos comptes de paiement internationaux.
          </p>
          <p>
            <strong>PayPal vs Payoneer : quelle solution choisir ?</strong>
          </p>
          <p>
            <strong>PayPal</strong> est le mastodonte du paiement en ligne. Tout le monde connaît, presque tout le monde a un compte. Il permet d'envoyer et de recevoir de l'argent, de payer en ligne, et de convertir dans différentes devises. Les frais sont d'environ 3,9% + 0,30€ par transaction.
          </p>
          <p>
            <strong>Payoneer</strong>, lui, est plus récent mais est devenu indispensable pour les freelances. Il fonctionne comme une carte prépayée connectée à un compte multi-devises. Les frais sont généralement moins élevés et il offre des avantages uniques pour les freelancers africains.
          </p>
          <p>
            <strong>Notre assistance inclut :</strong>
          </p>
          <ul>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}>Création de compte Payoneer</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}>Création de compte PayPal</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}>Configuration des préférences de paiement</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}>Résolution des problèmes de vérification</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}>Optimisation des frais de transaction</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}>Conseil sur la meilleure solution selon votre activité</li>
          </ul>
          <p>
            Nous avons accompagné des centaines de freelances camerounais et africains dans leurs premiers pas avec les paiements internationaux. Contactez-nous pour un accompagnement personnalisé.
          </p>
        </>
      )
    },
    marketing: {
      title: "Marketing digital",
      bgTitle: "Accueil > Marketing digital",
      content: (
        <>
          <p>
            Dans un marché de plus en plus compétitif, avoir une présence en ligne ne suffit plus. Il faut savoir comment l'exploiter pour attirer des clients et générer des revenus. Akaap Network propose des services de marketing digital complets.
          </p>
          <p>
            <strong>Nos services de marketing digital :</strong>
          </p>
          <ul>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Stratégie digitale</strong> — Élaboration d'un plan d'action personnalisé pour atteindre vos objectifs</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>SEO (Search Engine Optimization)</strong> — Optimisation de votre site pour améliorer votre classement Google</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Publicité en ligne</strong> — Campagnes Google Ads, Facebook Ads, Instagram Ads</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Email marketing</strong> — Création de newsletters, automatisation, séquences de nurture</li>
            <li style={{marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--secondary-color)'}}><strong>Analyse et reporting</strong> — Suivi des performances et optimisation continue</li>
          </ul>
          <p>
            <strong>Notre approche :</strong>
          </p>
          <p>
            Nous commençons toujours par une analyse approfondie de votre entreprise, de votre marché, et de vos concurrents. Ensuite, nous définissons une stratégie sur mesure qui correspond à votre budget et à vos objectifs.
          </p>
          <p>
            Contrairement aux agences qui proposent des solutions toutes faites, nous adaptons notre méthodologie à chaque client. Que vous soyez une petite entreprise locale ou une start-up en croissance, nous avons une solution pour vous.
          </p>
          <p>
            <span style={{color: 'var(--secondary-color)', fontWeight: '600'}}>Résultat attendu :</span> Plus de visibilité, plus de trafic qualifié, et plus de conversions.
          </p>
        </>
      )
    }
  };

  const currentService = serviceData[activeService as keyof typeof serviceData] || serviceData.web;

  return (
    <div className="page-container fade-in">
      <div className="page-header-bg">
        <div className="page-hero-box">
          <h1>{currentService.title}</h1>
          <div className="breadcrumbs">{currentService.bgTitle}</div>
        </div>
      </div>

      <div className="container page-layout-grid">
        <div className="page-content-wrapper">
          {currentService.content}
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default Services;
