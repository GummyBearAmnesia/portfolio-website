import React from 'react';
import '../css/blog.css';
import Osha from '../assets/pictures/oshawott.webp'

const blogPosts = [
  {
    title: "My First Blog Post",
    image: Osha,
    excerpt: "It was my childhood dream to make this website :) And today I finally did it.",
    link: "/blog/post-1"
  },
];

export default function Blog() {
  return (
    <div className="Blog">
      <div className="columns">
        <div className ="columns">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-text">
                <h3>{post.title}</h3>
                <div className='text'>{post.excerpt}</div>
                <a href={post.link} className="read-more">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
