import './css/Card.css'

function Contact() {
  return (
    <div className="columns">
      <div className="column">
        <h3>
          Contact Me!
        </h3>

        <p>
          Feel free to contact me if you have any questions, or want
          to get in touch ~

          <div className="contact">
            <a href="mailto:aamukta.thogata@gmail.com">
                  aamukta.thogata@gmail.com
            </a>
            <a
              href="https://github.com/gummybearamnesia"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/ammubean"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Contact;
