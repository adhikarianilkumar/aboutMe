import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from './../../../src/assets/images/profilePicture.jpg';

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <Link className="nav-link js-scroll-trigger" to="/about">
      <span className="d-block d-lg-none">Anilkumar Adhikari</span>
      <span className="d-none d-lg-block">
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profilePicture} alt="" />
      </span>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/experience">Experience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/education">Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to="/interests">Interests</Link>
        </li>
      </ul>
    </div>
  </nav>


  )
}

export default Navbar;