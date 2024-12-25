import React from 'react';

function Footer() {
    return (
        <>
            <footer className="container mt-5">
                <div className="row mb-4">
                    <div className="col-4">
                        <h2 className="text-light">
                            Join the Community of <br /> Security Experts and <br /> Start Learning Today{" "}
                            <span role="img" aria-label="strong">
                                💪
                            </span>
                        </h2>
                    </div>
                    <div className="col-4">
                        <div className="footer-icons d-flex">
                            <img src="./Rating.png" width="60px" alt="" />
                            <div className="text-light align-content-center"><a href="#" className="nav-link fa-5">Rate Us</a></div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2">
                        <img src="./SecurityShield.png" width="60px" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <h5 className="text-light">Berimbolo Security</h5>
                        <p className="text-light blockquote-footer m-2">
                            Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. <br /> Nullam dictum aliquet accumsan <br />
                            porta lectus.
                        </p>
                        <div className="">
                            <img src="./vector1.png" width="25px" className="m-2" alt="" />
                            <img src="./vector2.png" width="25px" className="m-2" alt="" />
                            <img src="./vector3.png" width="25px" className="m-2" alt="" />
                            <img src="./vector4.png" width="25px" className="m-2" alt="" />
                        </div>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h5 className="text-light text-center">Company</h5>
                        <ul className="text-center">
                            <li><a href="#bounties" className="nav-link text-light">Bounties</a></li>
                            <li><a href="#jobs" className="nav-link text-light">Jobs</a></li>
                            <li><a href="#grants" className="nav-link text-light">Grants</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h5 className="text-light text-center">Help</h5>
                        <ul className="text-center">
                            <li><a href="#support" className="nav-link text-light">Customer Support</a></li>
                            <li><a href="#terms" className="nav-link text-light">Terms & Conditions</a></li>
                            <li><a href="#privacy" className="nav-link text-light">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h5 className="text-light text-center">Resources</h5>
                        <ul className="text-center">
                            <li><a href="#ebooks" className="nav-link text-light">Free eBooks</a></li>
                            <li><a href="#ctfs" className="nav-link text-light">CTFs Tutorial</a></li>
                            <li><a href="#hack" className="nav-link text-light">How to Hack</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
