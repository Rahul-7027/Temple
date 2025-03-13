import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./nav.css";
import GuruG from '../../images/profile1.png';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className='gurug1' src={GuruG} alt="श्री श्री 108 महन्त सरजूदास जी महाराज" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* ms-auto aligns menu items to the right */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">HOME</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ABOUT
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/about/guru">Shri Shri 108 महंत सरजूदास जी महाराज Ji</Link></li>
                                    <li><Link className="dropdown-item" to="/about/temple">श्री राम झरोखा कैलाशधाम</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/register">REGISTER</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/news">NEWS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">CONTACT US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;
