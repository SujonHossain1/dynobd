import React from 'react';
import { BsThreeDots, FiHeart, HiOutlineShoppingCart, IoChatboxOutline } from 'react-icons/all';
import { useHistory } from 'react-router';

const MobileNavbarBottom = () => {
    const history = useHistory();

    const cartShowHandler = () => {
        history.push('/products/cart');
    };
    const wishShowHandler = () => {
        history.push('/products/wishlist');
    };

    return (
        <nav className="mobile-bottom-menu fixed-nav-bottom  d-md-none d-lg-none">
            <div className="container px-3">
                <div className="d-flex justify-content-between py-3">

                    <div className="bottom-menu-item" onClick={cartShowHandler}>
                        <div className="icon-wrapper">
                            <span className="icon"><HiOutlineShoppingCart /></span>
                            <span className="cart-quantity" id="cart-count">0</span>
                        </div>
                        <span className="menu-text"> Cart</span>
                    </div>

                    <div className="bottom-menu-item" onClick={wishShowHandler}>
                        <div className="icon-wrapper">
                            <span className="icon"><FiHeart /></span>
                            <span className="cart-quantity" id="cart-count">0</span>
                        </div>
                        <span className="menu-text"> Wishlist</span>
                    </div>
                    <div className="bottom-menu-item">
                        <div className="icon-wrapper">
                            <span className="icon"><IoChatboxOutline /></span>
                        </div>
                        <span className="menu-text"> Chat</span>
                    </div>
                    <div className="bottom-menu-item">
                        <div className="icon-wrapper">
                            <span className="icon"> <BsThreeDots /></span>
                        </div>
                        <span className="menu-text">Menu</span>
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default MobileNavbarBottom;