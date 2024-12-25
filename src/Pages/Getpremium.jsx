import React from 'react';
import styles from '../Modules/GetPremium.module.css'

function Getpremium() {
  return (
    <>
      <div className={styles.container}>
      <h1 className={styles.title}>Start Using Premium Berimbolo Security</h1>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.basic}`}>
          <h3 className={styles.plan}>BASIC</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod.
          </p>
          <h2 className={styles.price}>
            $99 <span>/ per month</span>
          </h2>
          <ul className={styles.features}>
            <li>Real-time Threat Monitoring</li>
            <li>User Training Programs</li>
            <li>Email Security</li>
          </ul>
          <button className={styles.button}>Purchase</button>
        </div>
        <div className={`${styles.card} ${styles.standard}`}>
          <h3 className={styles.plan}>STANDARD</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod.
          </p>
          <h2 className={styles.price}>
            $199 <span>/ per month</span>
          </h2>
          <ul className={styles.features}>
            <li>Everything in Basic</li>
            <li>Vulnerability Assessments</li>
            <li>Free Snack and Refill 2x</li>
            <li>24/7 Incident Response</li>
          </ul>
          <button className={styles.button}>Purchase</button>
        </div>
        <div className={`${styles.card} ${styles.premium}`}>
          <h3 className={styles.plan}>PREMIUM</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod.
          </p>
          <h2 className={styles.price}>
            $399 <span>/ per month</span>
          </h2>
          <ul className={styles.features}>
            <li>Everything in Standard</li>
            <li>Compliance Audits</li>
            <li>Advanced Threat Intelligence</li>
          </ul>
          <button className={styles.button}>Purchase</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Getpremium;
