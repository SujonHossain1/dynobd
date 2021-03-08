import React from 'react';
import { Link } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { wishSideNavFunc } from '../../../../../store/actions/siteNav';

const WishSideNav = () => {
    const { wishSideNav } = useSelector(state => state.siteNav);

    const dispatch = useDispatch();
    const leftArrowHandler = () => {
        dispatch(wishSideNavFunc('0%'))
    }

    return (
        <div>
            <div className="cart-side-nav" style={{ width: wishSideNav }}>
                <div className="cart-side-nav-wrapper">
                    <div className="cart-side">
                        <span onClick={leftArrowHandler}> <ImArrowLeft2 /> </span>
                        <span>My Wishlist</span>
                    </div>
                    <div className="cart-header">
                        <span> 4 Item(s)</span>
                        <span> View Cart</span>
                    </div>
                    <ul className="cart-products">
                        <li className="product">
                            <div className="product-details">
                                <div className="content">
                                    <h6 className="product-title">Physical Product Title Title will Be Here 100</h6>
                                    <span className="product-info">
                                        <span className="quantity">2</span>
                                        <span> x </span>
                                        <span>$130</span>
                                    </span>
                                </div>
                                <figure className="product-image">
                                    <Link to="/" >
                                        <img src="http://lvcom.softcorebd.com/assets/images/products/1568026368qU5AILZo.png" alt="product" />
                                    </Link>
                                    <div className="cart-remove">
                                        <span> <FaTimes /> </span>
                                    </div>
                                </figure>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="cart-total-price">$230</span>
                    </div>
                    <div className="drop-down-btn">
                        <Link to='/wishlist' className="btn btn-outline-primary btn-sm rounded-pill"> Continue Order </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishSideNav;