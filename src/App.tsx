import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qui-sommes-nous" element={<About />} />
          <Route path="/nos-formations" element={<Training />} />
          <Route path="/nos-services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/conditions-d-utilisation" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
