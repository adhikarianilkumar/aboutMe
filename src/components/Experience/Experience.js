import React from 'react';
import { Link } from 'react-router-dom';

function Experience() {
  return (
    <div className="container-fluid p-0">
      <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">FRONT END DEVELOPER</h3>
              <div className="subheading mb-3">DELOITTE, AUSTIN, TX</div>
              {/* <p>Description</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">FEB 2016 – PRESENT</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">FRONT END DEVELOPER</h3>
              <div className="subheading mb-3">INSTITUTE FOR INDUSTRY, CHENNAI, INDIA</div>
              {/* <p>Description</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">SEP 2012 – JUL 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">FRONT END DEVELOPER (INTERN)</h3>
              <div className="subheading mb-3">M/S. AN POWER ENGINEERING(P) LTD., CHENNAI, INDIA</div>
              {/* <p>Description</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">MAY 2011 – JUL 2011</span>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Experience;