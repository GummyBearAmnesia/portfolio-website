import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx'
import Blog from './pages/Blog.jsx';
import Warcapes from './pages/Warcapes.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <Header /> {/* stays visible on all pages */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/warcapes" element={<Warcapes />} />
      </Routes>
    </Router>
  );
}

export default App;

