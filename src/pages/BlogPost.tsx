import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const blogPosts = {
  'travailler-depuis-domicile': {
    cat: 'Formation',
    catColor: '#ff5a1f',
    date: '15 Mars 2026',
    readTime: '8 min de lecture',
    image: 'https://images.pexels.com/photos/36508716/pexels-photo-36508716.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Comment travailler de chez soi sur Internet en 2026 ? Guide complet pour débuter',
    excerpt: 'Le travail à distance n\'est plus une tendance, c\'est devenu une réalité pour des millions de personnes. Voici comment vous pouvez en profiter.',
    content: `
      <p>Vous en avez marre des embouteillages matinaux, du bureau bruyant, ou simplement envie de flexibilité ? Vous n'êtes pas seul. En 2026, le travail depuis la maison sur Internet est devenu une option viable pour des milliers d'Africains, et surtout pour les Camerounais.</p>

      <h2>Pourquoi le télétravail explose en Afrique</h2>
      <p>La pandémie a accéléré une transformation qui était déjà en marche. Aujourd'hui, les entreprises du monde entier recrutent des talents不在乎 où ils se trouvent. Pour nous en Afrique, c'est une opportunité en or de accéder à des marchés internationaux sans quitter notre salon.</p>
      
      <p>Les plateformes comme Upwork, Fiverr, et Freelancer.com connectent chaque jour des freelances africains avec des clients du monde entier. Mais attention, ce n'est pas parce que c'est accessible que c'est facile. La concurrence est rude.</p>

      <h2>Les compétences les plus demandées en 2026</h2>
      <p>Si vous cherchez par où commencer, voici les domaines qui marchent le mieux :</p>
      
      <ul>
        <li><strong>Rédaction de contenu web</strong> — Les entreprises ont besoin d'articles, de newsletters, de posts réseaux sociaux. C'est un excellent point de départ si vous savez bien écrire.</li>
        <li><strong>Assistance virtuelle</strong> — Gestion d'emails, planification, service client. Les compétences organisationnelles sont très appréciées.</li>
        <li><strong>Développement web</strong> — HTML, CSS, WordPress restent des compétences très demandées. Pas besoin d'être un ninja du code pour commencer.</li>
        <li><strong>Transcription audio</strong> — Beaucoup de podcasts et vidéos ont besoin d'être transcrits. C'est simple et ça paie.</li>
        <li><strong>Traduction</strong> — Français-Anglais ou Anglais-Français, c'est très demandé surtout avec le contexte bilingue du Cameroun.</li>
      </ul>

      <h2>Les erreurs à éviter absolument</h2>
      <p>J'ai vu beaucoup de débutants galérer parce qu'ils ont foncé tête baissée. Voici les pièges à éviter :</p>
      
      <p><strong>1. Vouloir tout apprendre en même temps.</strong> Choisissez une compétence, maîtrisez-la, puis diversifiez. Un jack-of-all-trades est un master of none dans le freelancing.</p>
      
      <p><strong>2. Négliger votre profil.</strong> Votre profil freelancer, c'est votre carte de visite. Photos professionnelles, description claire de vos services, portfolio même si vous débutez.</p>
      
      <p><strong>3. Travailler sans contrat.</strong> Que ce soit avec un client local ou international, toujours formaliser les accords. Cela vous protège et donne du professionnalisme.</p>

      <h2>Combien peut-on réellement gagner ?</h2>
      <p>C'est la question que tout le monde se pose. La vérité ? Ça dépend de vous. Un débutant peut commencer avec 100-300€ par mois en prenant des petits jobs. Avec de l'expérience, on voit facilement des freelances africains gagner 1000-3000€ mensuels. Certains ont même dépassé ce seuil.</p>
      
      <p>Mais ne vous méprenez pas : derrière ces chiffres, il y a des mois de travail acharné, des proposal rejections, et de l'apprentissage constant.</p>

      <h2>Les outils indispensables pour travailler depuis chez soi</h2>
      <p>Pas besoin d'un matériel dernier cri. Un ordinateur correct, une connexion internet stable, et ces outils gratuits :</p>
      
      <ul>
        <li><strong>Canva</strong> — Pour créer des visuels professionnels sans être designer.</li>
        <li><strong>Google Drive</strong> — Pour stocker et partager vos fichiers.</li>
        <li><strong>Slack ou WhatsApp</strong> — Pour communiquer avec vos clients.</li>
        <li><strong>Notion ou Trello</strong> — Pour organiser votre travail et vos deadlines.</li>
        <li><strong>Payoneer ou PayPal</strong> — Pour recevoir vos paiements internationaux.</li>
      </ul>

      <h2>Par où commencer concrètement ?</h2>
      <p>Si vous lisez cet article et que vous hésitez encore, voici mon conseil : commencez cette semaine. Pas le mois prochain. Pas après les exams. Cette semaine.</p>
      
      <p>Créez un compte sur une plateforme de freelancing, perfectionnez votre profil, et soumettez votre première proposition. Vous allez peut-être essuyer des refus. C'est normal. C'est même nécessaire pour progresser.</p>

      <h2>Conclusion</h2>
      <p>Le travail depuis domicile sur Internet est une vraie opportunité pour les jeunes Africains. Les barrières à l'entrée sont basses, les possibilités infinies. Mais comme tout dans la vie, ça demande du travail et de la persévérance.</p>
      
      <p>La question n'est plus "est-ce possible ?" mais "est-ce que j'ai la discipline pour y arriver ?"</p>
    `,
  },
  'paypal-vs-payoneer': {
    cat: 'Services',
    catColor: '#0b0f24',
    date: '10 Mars 2026',
    readTime: '6 min de lecture',
    image: 'https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'PayPal vs Payoneer : quelle solution choisir pour recevoir vos paiements en 2026 ?',
    excerpt: 'Deux giants du paiement en ligne s\'affrontent. Voici notre comparaison honnête pour vous aider à faire le bon choix.',
    content: `
      <p>Vous venez de完成 votre premier projet freelance et le client vous demande comment vous payer. Vous hésitez entre PayPal et Payoneer. C'est une question qu'on nous pose tout le temps chez Akaap Network, et la réponse n'est pas aussi simple qu'on pourrait le croire.</p>

      <h2>Commençons par le basics</h2>
      <p><strong>PayPal</strong> est le mastodonte du paiement en ligne. Tout le monde connaît, presque tout le monde a un compte. Il permet d'envoyer et de recevoir de l'argent, de payer en ligne, et de convertir dans différentes devises.</p>
      
      <p><strong>Payoneer</strong>, lui, est plus récent dans l'esprit du grand public mais est devenu indispensable pour les freelances. Il fonctionne comme une carte prépayée connectée à un compte multi-devises.</p>

      <h2>Les frais : là où ça compte</h2>
      <p>Quand on gagne sa vie en ligne, chaque pourcentage compte. Voici la réalité :</p>

      <p><strong>PayPal</strong> prend environ 3,9% + 0,30€ par transaction pour les paiements internationaux. Si vous recevez 500€, il vous en reste environ 480€. Ça a l'air small, mais sur un mois à 2000€, vous perdez presque 80€ en frais.</p>
      
      <p><strong>Payoneer</strong> est généralement moins cher pour recevoir des paiements, surtout via sa fonction de "Receive Payment Service". Les frais tournent autour de 1% à 3% selon la source du paiement. Et si vous utilisez la carte Payoneer pour retirer dans un ATM au Cameroun, les frais sont compétitifs.</p>

      <h2>Ce qui m'amène à mon point crucial : le retrait en Afrique</h2>
      <p>C'est là que tout change. PayPal est notorious pour ses restrictions en Afrique. Au Cameroun par exemple :</p>
      
      <ul>
        <li>Vous ne pouvez pas lier un compte bancaire camerounais à PayPal</li>
        <li>Vous ne pouvez retirer que via une carte Payoneer ( workaround officiel)</li>
        <li>Certains clients refusent de payer sur PayPal à cause des restrictions géographiques</li>
      </ul>

      <p>Payoneer, lui, a des partenariats avec des banques locales. Vous pouvez retirer en FCFA directement, ce qui élimine les tracasseries de conversion.</p>

      <h2>La carte virtuelle vs physique</h2>
      <p>Payoneer propose une Mastercard physique que vous pouvez utiliser dans les ATMs et pour les achats en ligne. PayPal propose aussi une carte (dans certaines régions), mais au Cameroun, c'est compliqué.</p>
      
      <p>Si vous êtes au Cameroun et que vous voulez une solution qui marche vraiment, Payoneer avec sa carte physique est plus pratique.</p>

      <h2>Et pour les clients qui utilisent PayPal ?</h2>
      <p>Good news : vous pouvez maintenant connecter PayPal à Payoneer. Vous demandez à votre client de vous payer sur PayPal, et vous utilisez Payoneer pour retirer. Comme ça, vous avez le meilleur des deux mondes.</p>

      <h2>Notre verdict</h2>
      <p>Pour un freelance basé en Afrique,尤其是 le Cameroun :</p>
      
      <p><strong>Payoneer est votre meilleur ami.</strong> Il offre plus de flexibilité, des frais réduits, et fonctionne vraiment avec les banques locales.</p>
      
      <p><strong>Garder PayPal quand même</strong> — parce que certains clients insistent pour payer via PayPal, et refuser un client pour des raisons de paiement, c'est舍money sur la table.</p>
      
      <p>Notre recommandation : ouvrez les deux comptes. Utilisez Payoneer comme compte principal pour recevoir et retirer vos gains. Gardez PayPal pour les clients qui ne jurent que par cette plateforme.</p>

      <h2>Comment ouvrir un compte Payoneer au Cameroun</h2>
      <p>C'est simple :</p>
      <ol>
        <li>Allez sur payoneer.com et cliquez sur "S'inscrire"</li>
        <li>Choisissez le type de compte "Compte de recevoir de paiements"</li>
        <li>Remplissez vos informations personnelles</li>
        <li>Attendez la validation (généralement 2-3 jours ouvrables)</li>
        <li>Une fois validé, vous pouvez demander votre carte Mastercard</li>
      </ol>
      
      <p>Et si vous avez besoin d'aide pour configurer vos comptes de paiement, n'hésitez pas à nous contacter chez Akaap Network. On a accompagné des centaines de freelances camerounais dans leurs premiers pas.</p>
    `,
  },
  'pourquoi-un-site-web-en-2026': {
    cat: 'Numérique',
    catColor: '#ff5a1f',
    date: '2 Mars 2026',
    readTime: '7 min de lecture',
    image: 'https://images.pexels.com/photos/29459444/pexels-photo-29459444.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Pourquoi votre entreprise a besoin d\'un site web professionnel en 2026',
    excerpt: 'Un site web n\'est plus un luxe, c\'est une nécessité absolue. Voici pourquoi votre entreprise ne peut plus se permettre d\'ignorer le digital.',
    content: `
      <p>Je me souviens encore de cette conversation avec un entrepreneur camerounais qui me disait : "Mon negocio marche très bien, j'ai pas besoin d'internet." Trois mois plus tard, il m'a recontacté en panique parce qu'un concurrent avait pris une grande partie de sa clientèle avec un simple site web et une bonne présence Google.</p>

      <h2>La réalité en 2026</h2>
      <p>Les chiffres parlent d'eux-mêmes : plus de 80% des consommateurs africains font des recherches en ligne avant d'acheter un produit ou service. Et quand je dis "en ligne", je ne parle pas que des jeunes en ville. Même dans les quartiers populaires, les gens utilisent WhatsApp, Facebook, et Google pour trouver ce dont ils ont besoin.</p>

      <p>Votre client potentiel tape le nom de votre entreprise dans Google. S'il ne trouve rien, il va chez votre concurrent qui, lui, a pris le temps de créer une présence en ligne.</p>

      <h2>Un site web, c'est quoi exactement ?</h2>
      <p>Certaines personnes думают que c'est compliqué. Non. Un site web, c'est simplement une adresse internet (comme akaapnetwork.com) où vos clients peuvent :</p>
      <ul>
        <li>Voir ce que vous proposez</li>
        <li>Vous contacter facilement</li>
        <li>Vous faire confiance avant même de vous rencontrer</li>
        <li>Acheter ou réserver si vous avez une boutique en ligne</li>
      </ul>

      <h2>5 raisons concrètes d'avoir un site web</h2>
      
      <p><strong>1. La crédibilité</strong><br/>
      Quand quelqu'un vous découvre sur Facebook ou par bouche-à-oreille, la première chose qu'il fait, c'est vous Googler. Ce qu'il trouve définit votre image. Un site professionnel dit "je suis sérieux, je suis établi, vous pouvez me faire confiance."</p>

      <p><strong>2. Être trouvé 24h/24</strong><br/>
      Votre boutique ferme à 18h. Votre site web, lui, travaille même à 3h du matin. Un client potentiel à l'étranger peut découvrir vos services pendant que vous dormez et vous envoyer un message pour le lendemain.</p>

      <p><strong>3. Ne plus dépendre des réseaux sociaux</strong><br/>
      Facebook change ses règles chaque année. Les algorithmes font que vos publications atteignent de moins en moins de monde. Un site web vous appartient. Personne ne peut le supprimer ou décider de limiter votre visibilité.</p>

      <p><strong>4. Gagner du temps</strong><br/>
      Combien de fois on vous appelle pour demander vos prix, vos horaires, votre adresse ? Mettez tout ça sur votre site. Vous recevrez moins d'appels inutiles et plus de demandes qualifiées.</p>

      <p><strong>5. Concurrencer les grands</strong><br/>
      Avec un site web bien fait, une petite boutique à Yaoundé peut avoir l'air aussi professionnelle qu'une entreprise internationale. C'est le grand égaliseur du business moderne.</p>

      <h2>Mais attendez, j'ai déjà une page Facebook...</h2>
      <p>C'est bien, continuez à l'utiliser. Mais voici le problème : vous ne possédez pas vraiment cette page. Facebook peut la supprimer demain si l'algorithme décide que vous avez violé une règle obscure. Vous avez déjà vu des pages avec des milliers de followers disparaître du jour au lendemain ?</p>
      
      <p>Votre site web, c'est votre terre. Votre présence sur réseaux sociaux, c'est comme louer un appartement. C'est bien, mais ça reste la propriété de quelqu'un d'autre.</p>

      <h2>Combien ça coûte ?</h2>
      <p>C'est souvent la première question, et la réponse dépend de vos besoins. Voici les options :</p>
      
      <ul>
        <li><strong>Site simple (5-10 pages)</strong> — À partir de 65.000 FCFA. Idéal pour une présence professionnelle de base.</li>
        <li><strong>Site e-commerce (boutique en ligne)</strong> — À partir de 150.000 FCFA. Si vous vendez des produits en ligne.</li>
        <li><strong>Site sur mesure avec fonctionnalités avancées</strong> — Sur devis, selon le projet.</li>
      </ul>

      <p>Oui, c'est un investissement. Mais comparez ça au coût d'un bail commercial, des marchandises, ou de la publicité traditionnelle. Un site web, c'est un actif qui génère des revenus passifs pendant des années.</p>

      <h2>Et le SEO dans tout ça ?</h2>
      <p>SEO, c'est l'art d'apparaître en haut de Google quand quelqu'un cherche ce que vous proposez. Un bon site web intègre le SEO dès le départ. C'est comme avoir une boutique en plein centre-ville au lieu d'un dépôt dans une ruelle.</p>
      
      <p>Quand quelqu'un à Douala cherche "meilleur restaurant africain Yaoundé" ou "cours d'informatique pas cher Cameroun", c'est votre site qui doit apparaître. Pas celui de votre concurrent.</p>

      <h2>Par où commencer ?</h2>
      <p>Si vous êtes prêt à franchir le pas, voici les étapes :</p>
      <ol>
        <li><strong>Définissez vos objectifs</strong> — Voulez-vous générer des ventes, des prises de contact, ou simplement informer ?</li>
        <li><strong>Choisissez votre nom de domaine</strong> — Quelque chose de simple, mémorisable, qui correspond à votre activité.</li>
        <li><strong>Travaillez votre contenu</strong> — Photos professionnelles, textes clairs, informations de contact à jour.</li>
        <li><strong>Optimisez pour les moteurs de recherche</strong> — C'est là qu'on intervient chez Akaap Network.</li>
      </ol>

      <h2>Conclusion</h2>
      <p>En 2026, ne pas avoir de site web, c'est comme ne pas avoir de téléphone portable dans les années 2000. On peut survivre, mais on rate tellement d'opportunités.</p>
      
      <p>La bonne nouvelle ? Commencer n'a jamais été aussi accessible. Les outils existent, les prix sont démocratisés, et les bénéfices sont concrets et mesurables.</p>
      
      <p>Votre entreprise mérite d'être vue. Donnez-lui la visibilité qu'elle mérite.</p>
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="page-container fade-in">
        <div className="page-header-bg">
          <div className="page-hero-box">
            <h1>Article non trouvé</h1>
            <div className="breadcrumbs">Accueil &gt; Blog &gt; Article non trouvé</div>
          </div>
        </div>
        <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
            Cet article n'existe pas ou a été déplacé.
          </p>
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container fade-in">
      <div className="page-header-bg">
        <div className="page-hero-box">
          <h1 style={{ fontSize: '1.8rem' }}>{post.title}</h1>
          <div className="breadcrumbs">
            Accueil &gt; Blog &gt; {post.cat}
          </div>
        </div>
      </div>

      <div className="container page-layout-grid">
        <article className="page-content-wrapper blog-article">
          <div className="blog-article-image" style={{ backgroundImage: `url(${post.image})` }} />
          
          <div className="blog-article-header">
            <span 
              className="blog-cat-badge" 
              style={{ background: post.catColor, color: 'white' }}
            >
              {post.cat}
            </span>
            <div className="blog-article-meta">
              <span><Calendar size={14} /> {post.date}</span>
              <span><Clock size={14} /> {post.readTime}</span>
            </div>
          </div>

          <p className="blog-article-excerpt">{post.excerpt}</p>

          <div 
            className="blog-article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="blog-article-footer">
            <Link to="/" className="blog-back-link">
              <ArrowLeft size={16} /> Retour aux articles
            </Link>
          </div>
        </article>

        <Sidebar />
      </div>
    </div>
  );
};

export default BlogPost;
