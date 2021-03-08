import React from 'react';
import { Link } from 'react-router-dom';
import fullBanner from '../../assets/icons/full-bannerjpg.jpg';

const HomeFullBanner = () => {
    return (
        <section className="full-banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="full-banner-img">
                            <Link to="/">
                                <img src={fullBanner} alt="" className="img-fluid" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFullBanner;