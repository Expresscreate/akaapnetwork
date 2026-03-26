import Sidebar from '../components/Sidebar';

const About = () => {
  return (
    <div className="page-container fade-in">
      <div className="page-header-bg">
        <div className="page-hero-box">
          <h1>Qui sommes-nous</h1>
          <div className="breadcrumbs">Accueil &gt; Qui sommes-nous</div>
        </div>
      </div>

      <div className="container page-layout-grid">
        <div className="page-content-wrapper">
          <p>
            AKAAP NETWORK est une start-up Africaine créée au Cameroun. Tout commence en 2010
          </p>
          <p>
            Lorsque deux jeunes entrepreneurs camerounais décideurs de se lancer dans l'entreprenariat numérique, après des mois de formation reçu des meilleurs coachent américains et français. Ils ont monté plusieurs projets 100% numérique qui ont parfois connu du succès et parfois pas. Nous nous interrogions sur comment contribuer à l'essor de l'Afrique avec peu de moyens et en utilisant le numérique comme lance-pierre.
          </p>
          <p>
            Notre défi était alors de voir : Comment utiliser notre passion pour le numérique pour booster le secteur privée, comment capitaliser la mine d'or que représente internet aujourd'hui pour résoudre le problème de chômage qui nous affecte tous directement ou indirectement?
          </p>
          <p>
            C'est ainsi que naquit l'idée d'une Start-up qui met internet à la disposition du grand public. Désireux d'aller au-delà du simple statut de prestataire de service, nous accompagnons nos clients et académiciens de A à Z dans l'accroissement quotidien de leur performance et dans la résolution de leurs problèmes avec pour objectif de vulgariser l'utilisation du numérique à des fins entrepreneuriales.
          </p>
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default About;
