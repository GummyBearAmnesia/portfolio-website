import React from "react";
import { Link } from "react-router-dom";
import '../css/notfound.css';

export default function NotFound() {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <p>Oops! The page you’re looking for doesn’t exist yet. I will am probably still working on it! Sorry!</p>
      <Link to="/" className="home-link">Go back home</Link>
    </div>
  );
}
