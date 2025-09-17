import React from 'react';
import '../css/blog.css';

const blogPosts = [
  {
    title: "My First Blog Post",
    image: "/path/to/image1.jpg",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    link: "/blog/post-1"
  },
];

export default function Blog() {
  return (
    <div className="Blog">
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-card">
          <div className="blog-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-text">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={post.link} className="read-more">Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
}
