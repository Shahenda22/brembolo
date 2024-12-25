import React from 'react';
import styles from '../Modules/About.module.css';

const About = () => {
  return (
    <div className={`security-pro-section mt-3 ${styles.bgCustom} py-5`} style={{ borderRadius: "60px" , backgroundColor:"#7C7C7C"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="mb-4">
              Become a <span className="text-primary">Security Pro</span> <br />
              with Berimbolo
            </h2>
            <div className="info-cards">
              <div className="info-card d-flex align-items-center mb-3 p-3 bg-white shadow-sm rounded">
                <div className={`${styles.icon} text-primary me-3`}>✔️</div>
                <div>
                  <h5>Berimbolo Security</h5>
                  <p className="mb-0">
                    A collection of case studies and CTFs that demonstrate
                    popular Solana protocol hacks.
                  </p>
                </div>
              </div>
              <div className="info-card d-flex align-items-center mb-3 p-3 bg-white shadow-sm rounded">
                <div className={`${styles.icon} text-primary me-3`}>✔️</div>
                <div>
                  <h5>Our website</h5>
                  <p className="mb-0">
                    Provides practical walkthroughs of real-life security vulnerabilities, so you can understand and prevent them.
                  </p>
                </div>
              </div>
              <div className="info-card d-flex align-items-center p-3 bg-white shadow-sm rounded">
                <div className={`${styles.icon} text-primary me-3`}>✔️</div>
                <div>
                  <h5>Our content</h5>
                  <p className="mb-0">
                    Well-researched and frequently updated to ensure you have access to the latest security insights and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src="./Group.png"
              alt="Laptop security illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
