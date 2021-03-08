import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/dynoBD.png';
import footerImg from '../../../assets/icons/footer.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-info-area">
                            <img className="img-fluid" style={{ width: '120px' }} src={logo} alt="" />
                            <div className="text">
                                <p style={{ lineHeight: '24px' }}>Techdyno BD is a one-stop IT solution to all your needs. Our story began on 26th March 2018. Techdyno BD is a forward-looking company focused on solving the problems and providing solutions to companies based on digital platforms.</p>
                            </div>
                        </div>
                        <div className="footer-icon">
                            <Link to="/" className="footer-icon-item">
                                <span> <FaFacebookF /> </span>
                            </Link>
                            <Link to="/" className="footer-icon-item">
                                <span > <FaTwitter /> </span>
                            </Link>
                            <Link to="/" className="footer-icon-item">
                                <span> <FaInstagram /> </span>
                            </Link>
                            <Link to="/" className="footer-icon-item">
                                <span> <FaYoutube /> </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 " >
                        <div className="footer-widget info-link-widget" style={{ paddingLeft: '50px' }}>
                            <h4 className="title"> Footer Links </h4>
                            <div className="link-list">
                                <li>
                                    <Link to="/"> <i className="fas fa-angle-double-right"></i>Home </Link>
                                </li>
                                <li>
                                    <Link to="/"> <i className="fas fa-angle-double-right"></i>Privacy & Policy </Link>
                                </li>
                                <li>
                                    <Link to="/"> <i className="fas fa-angle-double-right"></i>Terms & Condition </Link>
                                </li>
                                <li>
                                    <Link to="/contact-use"><i className="fas fa-angle-double-right"></i>Contact Us </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-widget ">
                            <h4 className="title"> Recent Post </h4>
                            <div className="footer">
                                <div className="post">
                                    <div className="post-img">
                                        <img className="img-fluid" src={footerImg} alt="" />
                                    </div>
                                    <div className="post-details">
                                        <h6 className="post-title"> How to design effective arts? </h6>
                                        <p className="date"> Jan 03 - 2019 </p>
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="post-img">
                                        <img className="img-fluid" src={footerImg} alt="" />
                                    </div>
                                    <div className="post-details">
                                        <h6 className="post-title"> How to design effective arts? </h6>
                                        <p className="date"> Jan 03 - 2019 </p>
                                    </div>
                                </div>
                                <div className="post">
                                    <div className="post-img">
                                        <img className="img-fluid" src={footerImg} alt="" />
                                    </div>
                                    <div className="post-details">
                                        <h6 className="post-title"> How to design effective arts? </h6>
                                        <p className="date"> Jan 03 - 2019 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;