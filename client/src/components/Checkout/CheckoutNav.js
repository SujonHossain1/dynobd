import React from 'react';
import { FaDolly, FaRegAddressCard, FaRegCreditCard } from 'react-icons/fa';


const CheckoutNav = () => {
    return (
        <div className="row">
            <div className="col-md-12 ">
                <div className="checkout-process">
                    <ul className="checkout-nav">
                        <li className="checkout-nav-item">
                            <span className="checkout-nav-item-link">
                                <span className="step"> 1 </span>
                                <span className="step-name"> Address </span>
                                <span className="step-icon"> <FaRegAddressCard /> </span>
                            </span>
                        </li>
                        <li className="checkout-nav-item">
                            <span className="checkout-nav-item-link">
                                <span className="step"> 2 </span>
                                <span className="step-name"> Order </span>
                                <span className="step-icon"> <FaDolly /> </span>
                            </span>
                        </li>
                        <li className="checkout-nav-item">
                            <span className="checkout-nav-item-link">
                                <span className="step"> 3 </span>
                                <span className="step-name"> Payment </span>
                                <span className="step-icon"> <FaRegCreditCard /></span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CheckoutNav;