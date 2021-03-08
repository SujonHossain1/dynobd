import React from 'react';

const CheckoutNavItem = ({step, stepName, stepIcon}) => {
    return (
        <li className="checkout-nav-item">
            <span className="checkout-nav-item-link">
                <span className="step">{step} </span>
                <span className="step-name"> {stepName} </span>
                <span className="step-icon"> {stepIcon} </span>
            </span>
        </li>
    );
};

export default CheckoutNavItem;