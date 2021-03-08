import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import image from '../../assets/images/products/product2.jpg';


const Orders = () => {
    const { user } = useSelector(state => state.auth);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`/api/orders/order/${user._id}`)
            .then(res => res.json())
            .then(data => setOrders(data.orders))
            .catch(err => console.log(err))
    }, [user._id]);

    console.log("orders", orders);


    return (
        <div>
            <div className="order__section">
                <div className="order__title">
                    <h5>Total Orders:5 </h5>
                    <h5>Total Checkout: Tk. 450</h5>
                </div>

                <div className="checkout__order__item shadow-sm">
                    <div className="checkout__order__date">
                        <h6>Date: 12 Feb 21</h6>
                        <h6>Price: 450</h6>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="checkout__order">
                                <img src={image} alt="" className="img-fluid checkout__order__img" />
                                <div className="checkout__order__content">
                                    <h4> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h4>
                                    <div className="checkout__order__content__item-edit">
                                        <p>Price:</p>
                                        <p>Tk. 482</p>
                                    </div>
                                    <div className="checkout__order__content__item-edit">
                                        <p>Quantity:</p>
                                        <p> 2 </p>
                                    </div>
                                    <div className="checkout__order__content__item-edit">
                                        <p>Total:</p>
                                        <p>34223</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="checkout__order">
                                <img src={image} alt="" className="img-fluid checkout__order__img" />
                                <div className="checkout__order__content">
                                    <h4> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h4>
                                    <div className="checkout__order__content__item-edit">
                                        <p>Price:</p>
                                        <p>Tk. 482</p>
                                    </div>
                                    <div className="checkout__order__content__item-edit">
                                        <p>Quantity:</p>
                                        <p> 2 </p>
                                    </div>
                                    <div className="checkout__order__content__item-edit">
                                        <p>Total:</p>
                                        <p>34223</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>

                    <button className="btn btn-warning btn-sm me-3">Pending</button>
                    <button className="btn btn-danger btn-sm">Cancel</button>
                </div>


                

                {/* {orders?.map(order => (
                    order.products.map(product => (
                        <div className="checkout__order" key={product._id}>
                            <img src={`/${product.image}`} alt="" className="img-fluid checkout__order__img" />
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
                    ))
                ))} */}
            </div>
        </div>
    );
};

export default Orders;