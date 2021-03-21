import React, { useEffect, useState } from 'react';
import { FaDolly, FaRegAddressCard, FaRegCreditCard } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { placementPaymentMethod } from '../../store/actions/orderAction';
import { RESET_CART } from '../../store/actions/types';

const Payment = ({ navigation }) => {
    const [payment, setPayment] = useState('');
    const dispatch = useDispatch();

    const order = useSelector(state => state.order);

    const paymentHandler = (event) => {
        const { value } = event.target;
        setPayment(value);
    };

    useEffect(() => {
        dispatch(placementPaymentMethod(payment));
    }, [dispatch, payment]);

    const confirmOrderHandler = async () => {
        if (payment) {
            const res = await fetch('https://dynobd-ecommerce.herokuapp.com/api/orders/add-order', {
                method: 'POST',
                body: JSON.stringify(order),
                headers: {
                    'content-type': 'application/json'
                }
            });
            const data = await res.json();

            console.log(data);

            if (res.status === 200) {
                toast.success(data.message);
                dispatch({ type: RESET_CART });
                navigation.next();
            } else {
                toast.error(data.message);
            }
        } else {
            toast.error('Select Payment Method')
        }
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
                                <span className="checkout-nav-item-link checkout__nav__active">
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
                <div className="payment__content  p-2">
                    <div className="p-5 ">
                        <h4>Please choose your payment method</h4>
                        <div>
                            <input name="cash" type="radio" value="cash" onChange={paymentHandler} />
                            <label className="ml-2 mt-2"> &nbsp;&nbsp;Cash On Delivery</label>
                        </div>
                        <select disabled className="form-select mt-3">
                            <option >Select Payment Gate Way</option>
                            <option value="visa">Visa</option>
                            <option value="masterCard">Master Card</option>
                            <option value="dbblNexus">DBBL NEXUS</option>
                            <option value="americanExpress">American Express</option>
                        </select>
                        <select disabled className="form-select mt-3">
                            <option >Select One</option>
                            <option value="bkash">Bkash</option>
                            <option value="rocket">Rocket</option>
                            <option value="sure cash">Dure cash</option>
                            <option value="nagad">Nagad</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <button onClick={() => navigation.previous()} className="btn btn-secondary btn__rounded px-4 py-2">Back</button>
                        <button onClick={confirmOrderHandler} className="btn btn-danger btn__rounded px-4 py-2">CONFIRM ORDER</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;