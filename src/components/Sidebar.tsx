import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const recentPosts = [
  {
    slug: 'travailler-depuis-domicile',
    title: 'Comment travailler de chez soi sur Internet en 2026 ?',
    date: '15 Mars 2026',
    cat: 'Formation',
    image: 'https://images.pexels.com/photos/36508716/pexels-photo-36508716.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    slug: 'paypal-vs-payoneer',
    title: 'PayPal vs Payoneer : quelle solution choisir ?',
    date: '10 Mars 2026',
    cat: 'Services',
    image: 'https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    slug: 'pourquoi-un-site-web-en-2026',
    title: 'Pourquoi votre entreprise a besoin d\'un site web',
    date: '2 Mars 2026',
    cat: 'Numérique',
    image: 'https://images.pexels.com/photos/29459444/pexels-photo-29459444.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

const Sidebar = () => {
  return (
    <aside className="page-sidebar">
      <div className="sidebar-widget">
        <h4 className="widget-title">Search</h4>
        <div className="widget-search-form">
          <input type="text" placeholder="Rechercher..." className="widget-search-input" />
          <button className="widget-search-btn">Rechercher</button>
        </div>
      </div>

      <div className="sidebar-widget">
        <h4 className="widget-title">Articles récents</h4>
        <div className="sidebar-recent-posts">
          {recentPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="sidebar-post-item">
              <div 
                className="sidebar-post-img-placeholder"
                style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <span className="sidebar-post-cat">{post.cat}</span>
              </div>
              <div className="sidebar-post-content">
                <h5 className="sidebar-post-title">{post.title}</h5>
                <span className="sidebar-post-date">
                  <Calendar size={12} /> {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar-widget sidebar-cta-widget">
        <h4 className="widget-title">Besoin d'aide ?</h4>
        <p>Notre équipe est prête à vous accompagner dans votre projet digital.</p>
        <Link to="/contact" className="btn-primary btn-primary-sm">
          Contactez-nous
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
