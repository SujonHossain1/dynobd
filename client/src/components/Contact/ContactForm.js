import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="col-md-7 align-items-center">
            <form className="contact-form shadow-sm p-4 rounded">
                <div className="form-row">
                    <div >
                        <div className="input-group bg-light p-3 mb-2 rounded">
                            <span className="input-group-text border-0  text-brand bg-light">
                                <FaUser />
                            </span>
                            <input type="text" className="form-control bg-light border-0" placeholder="Name*" />
                        </div>
                        <div className="input-group bg-light p-3 mb-2 rounded">
                            <span className="input-group-text border-0  text-brand bg-light">
                                <FaPhoneAlt />
                            </span>
                            <input type="number" className="form-control bg-light border-0" placeholder="Phone Number*" />
                        </div>
                        <div className="input-group bg-light p-3 mb-2 rounded">
                            <span className="input-group-text border-0  text-brand bg-light">
                                <FaEnvelope />
                            </span>
                            <input type="email" className="form-control bg-light border-0" placeholder="Email Address*" />
                        </div>
                        <div className="input-group bg-light p-3 mb-2 rounded">
                            <textarea className="form-control border-0" placeholder="Your Text*" rows="3">
                            </textarea>
                        </div>
                    </div>
                </div>

                <button type="submit" className="form-btn mt-2" className="form-btn">Message</button>
            </form>
        </div>
    );
};

export default ContactForm;