import React from 'react';
import styles from '../Modules/Nav.module.css'
import { Link, Route, Routes } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav class={`navbar navbar-expand-md `}>
            <div className="container">
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand text-light" href="/">Logo</a>
                
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link text-light" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="/about">About Us</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="/contact">Contact Us</a></li>
                            <li className="nav-item"><a className="nav-link text-light" href="/products">Products</a></li>
                        </ul>
                    </div>
                    <div classNmae="ml-5">
                        <button type="button" className="btn btn-warning"><a href="/LogIn" className='nav-link'>Log In</a></button>
                        <button type="button" className="btn btn-outline-light m-4"><a href="/SignUp" className='nav-link'>Sign Up</a></button>
                    </div>
                </div>
                    
            </nav>
        </>
    )
}

export default Nav
