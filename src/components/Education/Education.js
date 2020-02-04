import React from 'react';
import { Link } from 'react-router-dom';

function Education() {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">NEW YORK INSTITUTE OF TECHNOLOGY</h3>
              <div className="subheading mb-3">MASTER OF SCIENCE IN ELECTRICAL &amp; COMPUTER ENGINEERING</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2015</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">MANIPAL INSTITUTE OF TECHNOLOGY</h3>
              <div className="subheading mb-3">BACHELOR OF ENGINEERING IN ELECTRONICS &amp; COMMUNICATION ENGINEERING</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2012</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Education;