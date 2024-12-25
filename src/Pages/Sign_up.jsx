import React, { useState } from "react";
import styles from "../Modules/Signup.module.css";
const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Create Your Account</h2>
                <input type="text" placeholder="First Name..." className={styles.input} />
                <input type="text" placeholder="Last Name..." className={styles.input} />
                <input
                    type="text"
                    placeholder="Email or Phone..."
                    className={styles.input}
                />
                <div className={styles.passwordContainer}>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password..."
                        className={styles.input}
                        style={{ marginBottom: 0 }}
                    />
                    <button
                        onClick={togglePasswordVisibility}
                        className={styles.passwordToggle}
                    >
                    </button>
                </div>
                <button className="btn btn-outline-light">Sign Up</button>
                <div className={styles.separator}>
                    <span>Or sign in with</span>
                </div>
                <button className="btn btn-outline-light mb-2" style={{width:"70%"}}>
                    <img
                        src="googlelogo.png"
                        alt="Google logo"
                    />
                    Continue with Google
                </button>
                <button className="btn btn-outline-light" style={{width:"70%"}}>
                    <img
                        src="facebooklogo.png"
                        alt=""
                    />
                    Continue with Facebook
                </button>
            </div>
        </div>
    );
};

export default Signup;
