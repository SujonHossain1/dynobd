import React from 'react';
import { Link } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { cartSideNavFunc } from '../../../../../store/actions/siteNav';

const CartSideNav = () => {
    const { cartSideNav } = useSelector(state => state.siteNav);

    const dispatch = useDispatch();
    const leftArrowHandler = () => {
        dispatch(cartSideNavFunc('0%'))
    };

    const deleteProductHandler = () => {
        console.log('deleting product');
    }

    return (
        <div>
            <div className="cart-side-nav" style={{ width: cartSideNav }}>
                <div className="cart-side-nav-wrapper">
                    <div className="cart-side">
                        <span onClick={leftArrowHandler}> <ImArrowLeft2 /> </span>
                        <span>My Cart</span>
                    </div>
                    <div className="cart-header" >
                        <span> 4 Item(s)</span>
                        <span> View Cart</span>
                    </div>
                    <ul className="cart-products" >
                        <li className="product">
                            <div className="product-details">
                                <div className="content" onClick={leftArrowHandler}>
                                    <Link to="product" className="product-title">Physical Product Title Title will Be Here 100</Link>
                                    <span className="product-info" style={{ display: 'block' }}>
                                        <span className="quantity">2</span>
                                        <span> x </span>
                                        <span>$130</span>
                                    </span>
                                </div>
                                <figure className="product-image">
                                    <Link to="/" >
                                        <img src="http://lvcom.softcorebd.com/assets/images/products/1568026368qU5AILZo.png" alt="product" />
                                    </Link>
                                    <div className="cart-remove" onClick={deleteProductHandler}>
                                        <span > <FaTimes /> </span>
                                    </div>
                                </figure>
                            </div>
                        </li>
                    </ul>
                    <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="cart-total-price">$230</span>
                    </div>
                    <div className="drop-down-btn" onClick={leftArrowHandler}>
                        <Link to='/checkout' className="btn btn-outline-primary btn-sm rounded-pill"> Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSideNav;