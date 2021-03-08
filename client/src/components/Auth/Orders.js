import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Orders = () => {
    const { user } = useSelector(state => state.auth);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`/api/orders/order/${user._id}`)
            .then(res => res.json())
            .then(data => setOrders(data.orders))
            .catch(err => console.log(err))
    }, [user._id]);


    return (
        <div>
            <div className="checkout__order__section">
                {orders?.map(order => (
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
                ))}
            </div>
        </div>
    );
};

export default Orders;