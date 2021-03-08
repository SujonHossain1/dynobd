import React from 'react';
import ContactArea from './ContactArea';
import ContactForm from './ContactForm';
import ContactTitle from './ContactTitle';

const Contact = () => {
    return (
        <section className="contact-section" style={{ backgroundColor: ' #f7f8fa' }}>
            <div className="container py-5">
                <ContactTitle />
                <div className="row d-flex align-items-center">
                    <ContactForm />
                    <ContactArea />
                </div>
            </div>
        </section>
    );
};

export default Contact;