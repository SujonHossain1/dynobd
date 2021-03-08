import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/icons/banner1.jpg';
import banner2 from '../../assets/icons/banner2.jpg';
const HomeBanner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-6">
                        <div className="banner">
                            <Link to="/" className="banner-effect">
                                <img className="img-fluid" src={banner1} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner">
                            <Link to="/" className="banner-effect">
                                <img className="img-fluid" src={banner2} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;