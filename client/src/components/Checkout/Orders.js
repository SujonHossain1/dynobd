import React from 'react';
import { FaDolly, FaRegAddressCard, FaRegCreditCard } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { placementProducts } from '../../store/actions/orderAction';

const Orders = ({ navigation }) => {

    const { cartProducts } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const orderProducts = [];

    for (let i = 0; i < cartProducts.length; i++) {
        const item = cartProducts[i];
        const product = {
            _id: item._id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            total: item.quantity * item.price,
            image: item.image1
        }
        orderProducts.push(product);
    };

    const orderProductHandler = () => {
        dispatch(placementProducts(orderProducts))
        navigation.next();
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12 ">
                    <div className="checkout-process">
                        <ul className="checkout-nav">
                            <li className="checkout-nav-item">
                                <span className="checkout-nav-item-link checkout__nav__active">
                                    <span className="step"> 1 </span>
                                    <span className="step-name"> Address </span>
                                    <span className="step-icon"> <FaRegAddressCard /> </span>
                                </span>
                            </li>
                            <li className="checkout-nav-item">
                                <span className="checkout-nav-item-link checkout__nav__active">
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

            <div className="col-md-8">
                <div className="checkout__order__section">
                    {cartProducts.map(product => (
                        <div className="checkout__order" key={product._id}>
                            <img src={`/${product.image1}`} alt="" className="img-fluid checkout__order__img" />
                            <div className="checkout__order__content">
                                <h4> {product.title} </h4>
                                <div className="checkout__order__content__item">
                                    <p>Price:</p>
                                    <p>Tk. {product.price}</p>
                                </div>
                                <div className="checkout__order__content__item">
                                    <p>Quantity:</p>
                                    <p> {product.quantity} </p>
                                </div>
                                <div className="checkout__order__content__item">
                                    <p>Total:</p>
                                    <p> {product.quantity * product.price} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="d-flex justify-content-between mt-3 ">
                        <button onClick={() => navigation.previous()} className="btn btn-secondary btn__rounded py-2" >Edit Address</button>
                        <button onClick={orderProductHandler} className="btn btn-danger px-5 btn__rounded py-2">Next</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Orders;