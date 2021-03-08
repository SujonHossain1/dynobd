import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../../../store/actions/cartAction';
import { SubTotalPrice } from '../../../../utils/cart';

const CartDropdown = () => {
    const { cartProducts, cartNumbers } = useSelector(state => state.cart);
    const subTotalPrice = SubTotalPrice();
    const dispatch = useDispatch();

    const removeProductFromCartHandler = (productId) => e => {
        e.preventDefault();
        dispatch(removeFromCart(productId));
    }
    return (
        <div className="cart-dropdown-menu">
            <div className="cart-dropdown-menu-wrapper">
                {
                    cartProducts.length === 0 ?
                        <p style={{ textAlign: 'left' }}>Cart is Empty</p>
                        :
                        <>
                            <div className="cart-header">
                                <span> {cartNumbers} Item(s)</span>
                                <span> View Cart</span>
                            </div>
                            <ul className="cart-products">
                                {
                                    cartProducts.map(p => (
                                        <li className="product" key={p._id}>
                                            <div className="product-details">
                                                <div className="content">
                                                    <h6 className="product-title"> {p?.title} </h6>
                                                    <span className="product-info">
                                                        <span className="quantity"> {p?.quantity} </span>
                                                        <span> x </span>
                                                        <span> {p?.price} Tk </span>
                                                    </span>
                                                </div>
                                                <figure className="product-image">
                                                    <Link to="/" >
                                                        <img src={`/${p?.image1}`} alt="product" />
                                                    </Link>
                                                    <div onClick={removeProductFromCartHandler(p._id)} className="cart-remove">
                                                        <span> <FaTimes /> </span>
                                                    </div>
                                                </figure>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="dropdown-cart-total">
                                <span>Total</span>
                                <span className="cart-total-price"> {subTotalPrice} Tk </span>
                            </div>
                            <div className="drop-down-btn">
                                <Link to='/checkout' className="btn btn-outline-primary btn-sm rounded-pill"> Checkout</Link>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default CartDropdown;