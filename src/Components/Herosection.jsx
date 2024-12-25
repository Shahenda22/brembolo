import React from 'react';
import styles from '../Modules/Herosection.module.css';

function Herosection() {
    return (
        <>
            <div className={`container ${styles.hero}`}>
                <div className="row align-items-center d-flex">
                    <div className="col-md-6">
                        <h1 className={styles.title}>Learn from the past to <br />protect the future.</h1>
                        <p>Welcome to Superteam Security, where you can learn from the past to protect the future...</p>
                        <button type="button" className="btn btn-warning"><a href="/Getpremium" className='nav-link'>Get Premium</a></button>
                        <button type="button" className="btn btn-outline-light m-4"><a href="/LogIn" className='nav-link'>For Free</a></button>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-md-5">
                        <img src="./imggg.png" alt="Hero" className="img-fluid" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Herosection
