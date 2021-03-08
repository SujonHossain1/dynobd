import React from 'react';

const FooterTop = () => {
    return (
        <section className="offer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-6 col-xl-3 p-0">
                        <div className="offer">
                            <div className="offer-icon"><a href="/"><i className="fas fa-truck-moving"></i></a></div>
                            <div className="offer-info">
                                <h4>FREE SHIPPING</h4>
                                <p>Free Shipping All Order</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-6 col-xl-3 p-0">
                        <div className="offer">
                            <div className="offer-icon"><a href=""><i className="far fa-check-circle"></i></a></div>
                            <div className="offer-info">
                                <h4>PAYMENT METHOD</h4>
                                <p>Secure Payment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-xl-3 p-0">
                        <div className="offer">
                            <div className="offer-icon"><a href=""><i className="fas fa-circle-notch"></i></a></div>
                            <div className="offer-info">
                                <h4>30 DAY RETURNS</h4>
                                <p>30-Day Return Policy Update</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3 col-6 col-xl-3 p-0">
                        <div className="offer">
                            <div className="offer-icon"> <a href="/"><i className="fas fa-headset"></i></a></div>
                            <div className="offer-info">
                                <h4>HELP CENTER</h4>
                                <p>24/7 Support System Help Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterTop;