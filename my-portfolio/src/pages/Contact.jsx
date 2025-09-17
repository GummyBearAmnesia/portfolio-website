import './css/Card.css'

function Contact() {
  return (
    <div className="Contact">
      <h3>
        Contact Me!
      </h3>

      <p>
        Feel free to contact me if you have any questions, or want
        to get in touch ~
      </p>

      <div className="contact-card">
        <div className="contact-links">
          <a href="mailto:aamukta.thogata@gmail.com">
             aamukta.thogata@gmail.com
          </a>
          <a
            href="https://github.com/gummybearamnesia"
            target="_blank"
            rel="noopener noreferrer"
          >
             github.com/gummybearamnesia
          </a>
          <a
            href="https://linkedin.com/in/ammubean"
            target="_blank"
            rel="noopener noreferrer"
          >
             linkedin.com/in/ammubean
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
