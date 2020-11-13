import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
    <div className="container ">
        <nav className="navbar navbar-expand-lg bg-dark  fixed-top ">
            <Link to="/home" className="navbar-brand ml-5 pl-5" href="#">
                <img src={logo} classNameName="img-fluid w-50" alt=""/>
            </Link>

            <button className="navbar-toggler menu-icon " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon menu-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-white" id="navbarNav">
                <ul className="navbar-nav ml-auto mr-5 pr-5">
                    <li className="nav-item mr-4 active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className="nav-link" to="/images">MultipleImage</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <a className="nav-link" href="/tshirt">Tshirt</a>
                    </li>
                    <li className="nav-item mt-2">
                        <Link to="/" className="login-btn" href="#">Order</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;