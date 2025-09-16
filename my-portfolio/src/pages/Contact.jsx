import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div className="Contact">
      <h3>
        Contact Me!
      </h3>

      <p>
        If you wish to contact me, you can contact me through my good friend sygnxl. 
        Just add her on League of Legends and you can get to me from there! Very professional,
        I promise.
      </p>

      <h3>Okay.. But for real.</h3>

      <div className="contact-card">
        <div className="contact-links">
          <a href="mailto:aamukta.thogata@gmail.com">
            <FaEnvelope /> aamukta.thogata@gmail.com
          </a>
          <a
            href="https://github.com/gummybearamnesia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> github.com/gummybearamnesia
          </a>
          <a
            href="https://linkedin.com/in/ammubean"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> linkedin.com/in/ammubean
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
