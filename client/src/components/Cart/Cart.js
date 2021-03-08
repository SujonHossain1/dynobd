import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import empty from '../../assets/images/empty.svg';
import { productQuantity, removeFromCart } from '../../store/actions/cartAction';
import { SubTotalPrice } from '../../utils/cart';

const Cart = () => {
    const { cartProducts } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const subTotalPrice = SubTotalPrice();


    const removeProductFromCart = productId => {
        dispatch(removeFromCart(productId))
    };

    const productQuantityHandler = (action, productId) => () => {
        dispatch(productQuantity(action, productId));
    }

    return (
        <section className="order-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-7">
                        <h2>Our Order </h2>
                        <div className="cart-order-list">
                            {
                                cartProducts.length === 0 ?
                                    <div className="text-center pt-4" style={{ height: '50vh' }}>
                                        <img width="50%" height="50%" src={empty} alt="" />
                                        <p className="fs-5 text-success">Nothing is added in the Cart</p>
                                        <Link to="/" className="fs-5 text-danger">Go back to shop</Link>
                                    </div>
                                    :
                                    cartProducts.map(p => (
                                        <div className="cart-item row" key={p._id}>
                                            <div className="col-md-3 col-sm-3 ">
                                                <img className="img-fluid cart-image rounded" src={`/${p.image1}`} alt="" />
                                            </div>
                                            <div className="cart__item-description col-md-9 col-sm-9">
                                                <div className="cart__item-description__productNameandPrice row">
                                                    <div className="cart__item-name col-md-8 col-sm-8">
                                                        <h6> {p.title} </h6>
                                                    </div>
                                                    <div className="cart-item__price col-md-4 col-sm-4">
                                                        <p> {p.price * p.quantity} TK</p>
                                                    </div>
                                                </div>
                                                <div className="cart__item-description__handle py-3">
                                                    <div className="cart__item-handler">
                                                        <button onClick={productQuantityHandler('decrease', p._id)} className="btn" style={{ padding: '0px 14px' }}>-</button>
                                                        <input type="text" className=" text-center" value={p.quantity} />
                                                        <button onClick={productQuantityHandler('increase', p._id)} className="btn">+</button>
                                                    </div>
                                                    <div>
                                                        <div className="cart__item-handler-remove">
                                                            <button onClick={() => removeProductFromCart(p._id)} className="btn">Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                            }

                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 col-sm-12 mx-auto">
                        <div className="order">
                            <h2 >Order Summary</h2>
                            <div className="py-4 order-item">
                                <div className="d-flex justify-content-between px-3">
                                    <p> Subtotal</p>
                                    <p> <small>৳</small> {subTotalPrice}</p>
                                </div>
                                <div className="d-flex justify-content-between px-3">
                                    <p>Shipping (Express) </p>
                                    <p><small>৳</small> 0</p>
                                </div>
                                <div className="d-flex justify-content-between px-3">
                                    <p>Total</p>
                                    <p><small>৳</small> {subTotalPrice}</p>
                                </div>
                                <div className="product-btn">
                                    {cartProducts.length === 0 ?
                                        <Link className="btn bg-brand w-100 confirm-btn disabled" to="/checkout" >Confirm Order</Link>
                                        :
                                        <Link className="btn  bg-brand w-100 confirm-btn" to="/checkout">Confirm Order</Link>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;