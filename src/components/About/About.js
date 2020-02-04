import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Anilkumar
            <span className="text-primary">Adhikari</span>
          </h1>
          <div className="subheading mb-5">Austin, TX 78702 · (201) 699-6321 ·
            <a href="mailto:anilkumar.adhikari01@email.com">anilkumar.adhikari01@gmail.com</a>
          </div>
          <p className="lead mb-5">An ambitious, self-starter and problem solver with a passion for online businesses, and who would like to join a team of likeminded developers. Experienced in creating logical and innovative solutions to complex problems. Thorough and precise in
everything, and has a keen interest in technology, user interface and user experience. Continually evaluating and upgrading skills
to stay at the cutting edge of web development. Proven natural problem solver, successfully completing projects for software
houses and web design agencies.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/anilkumaradhikari/" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/aadhikar" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/adhikari124/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/anilzkf" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;