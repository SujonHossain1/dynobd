import React from 'react';
import aboutImage from '../../assets/images/about.png';
import visionImage from '../../assets/images/about2.png';

const About = () => {
    return (
        <div className="about-section py-5" >
            <div className="container">
                <h2 className="text-brand" style={{ fontWeight: '700' }}>About Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-content">
                            <p>Techdyno BD is a one-stop IT solution to all your needs. Our story began on 26th March 2018. Techdyno BD is a forward-looking company focused on solving the problems and providing solutions to companies based on digital platforms. </p>
                            <div className="about-content-flex pt-3">
                                <div className="client">
                                    <h2>Client</h2>
                                    <h2> <strong>110+</strong> </h2>
                                </div>
                                <div className="project">
                                    <h2>Project</h2>
                                    <h2> <strong>1200+</strong> </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-image">
                            <img src={aboutImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-md-6">
                        <div className="vision">
                            <div className="vision-image">
                                <img src={visionImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 vision-content">
                        <div >
                            <h2>Our Vision</h2>
                            <p>As a global information and technology company, we connect decision makers to a dynamic network of data, people and ideas - accurately delivering business information, Web solution, Graphical representation, Apps, Animation and many more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;