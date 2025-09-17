import { Link } from 'react-router-dom';
import '../css/header.css'

export default function Header() {
  return (
    <nav className="Header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li className="warcapes"><Link to="/warcapes">wARcAPES</Link></li>
      </ul>
    </nav>
  );
}   