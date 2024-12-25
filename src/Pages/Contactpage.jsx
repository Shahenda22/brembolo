import React from 'react';
import styles from '../Modules/Contact.module.css';

function Contactpage() {
  return (
    <div className={styles.contactSection}>
      <div>
        <img src="./Hero_Section.png" alt="" className="w-100" style={{backgroundSize:"cover"}}/>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <h2>Get In Touch</h2>
          <form>
            <div className={styles.formGroup}>
              <div>
                <label>First Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div>
                <label>Your Phone</label>
                <input type="text" placeholder="+14 5443 231..." />
              </div>
              <div>
                <label>Your Email</label>
                <input type="email" placeholder="example@domain.com" />
              </div>
            </div>

            <div>
              <label>Message</label>
              <textarea placeholder="Enter Your Message"></textarea>
            </div>

            <button type="submit" className="btn btn-warning">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Help Information */}
        <div className="align-content-center">
          <h2>Need More Help?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id
            aliquam dignissim risus diam dictum.
          </p>
          <ul>
            <li>
            <img src="./Call.png" width="25px" className="m-2" alt="" /> +14 1929 2102
            </li>
            <li>
            <img src="./Message.png" width="25px" className="m-2" alt="" /> berimbolo@domain.com
            </li>
            <li>
            <img src="./Location.png" width="25px" className="m-2" alt="" /> lorem lorem lorem
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
