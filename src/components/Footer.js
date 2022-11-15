import React from "react";

const Footer = () => (
  <footer className="flex justify-center">
    <section>
        <a 
            className='social-icon-link github'
            href="https://github.com/cmetcalf8"
            target='_blank'
            aria-label='Github'
        > 
            <i className="fab fa-github" />
        </a>
        <a
              className='social-icon-link Linkedin'
              href="https://www.linkedin.com/in/cory-metcalf/"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
        </a>
    </section>
  </footer>
);

export default Footer;