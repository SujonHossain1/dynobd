import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';
import { Link } from 'react-router-dom';
import empty from '../../assets/images/empty.svg';

const Orders = () => {
    const { user } = useSelector(state => state.auth);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCancelled, setIsCancelled] = useState(false);


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://dynobd-ecommerce.herokuapp.com/api/orders/order/${user._id}`)
            .then(res => res.json())
            .then(data => setOrders(data.orders))
            .catch(err => console.log(err))
    }, [user._id, isCancelled]);

    useEffect(() => {
        fetch(`https://dynobd-ecommerce.herokuapp.com/api/orders/total-price/${user._id}`)
            .then(res => res.json())
            .then(data => setTotalPrice(data[0].totalPrice))
            .catch(error => console.log(error))
    }, [user._id, isCancelled]);



    const orderCancelHandler = async (id) => {
        const isYes = window.confirm('Are you sure you want to cancel');

        if (isYes) {
            const res = await fetch(`https://dynobd-ecommerce.herokuapp.com/api/orders/cancel-order/${id}`, {
                method: 'DELETE'
            });
            const data = await res.json();

            if (res.status === 200) {
                toast.success(data.message);
                setIsCancelled(true);
                console.log(isCancelled);
            } else {
                toast.error(data.message);
                setIsCancelled(false);
            };

            console.log(data);
        };
    }




    return (
        <div>
            <div className="order__section">
                <div className="order__title">
                    <h5>Total Orders: {orders.length} </h5>
                    <h5>Total Checkout: Tk. {totalPrice}</h5>
                </div>

                {orders.length === 0 ?
                    <div className="text-center pt-4" style={{ height: '50vh' }}>
                        <img width="50%" height="50%" src={empty} alt="" />
                        <p className="fs-5 text-success">Nothing To Found</p>
                        <Link to="/" className="fs-5 text-danger">Go back to shop</Link>
                    </div>
                    :
                    orders.map(order => (
                        <div className="checkout__order__item shadow-sm" key={order._id}>
                            <div className="checkout__order__date">
                                <h6>Time: {moment(order.createdAt).fromNow()}</h6>
                                <h6>Total Price: Tk.{order.totalPrice} </h6>
                            </div>
                            <div className="row">
                                {order.products.map((product) => (
                                    <div className="col-md-6" key={product._id}>
                                        <div className="checkout__order">
                                            <img src={`/${product.image}`} alt="" className="img-fluid checkout__order__img" />
                                            <div className="checkout__order__content">
                                                <h4> {product.title}</h4>
                                                <div className="checkout__order__content__item-edit">
                                                    <p>Price:</p>
                                                    <p>Tk. {product.price} </p>
                                                </div>
                                                <div className="checkout__order__content__item-edit">
                                                    <p>Quantity:</p>
                                                    <p> {product.quantity} </p>
                                                </div>
                                                <div className="checkout__order__content__item-edit">
                                                    <p>Total:</p>
                                                    <p>Tk. {product.total} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <button className="btn btn-warning btn-sm me-3"> {order.status} </button>
                            <button onClick={() => orderCancelHandler(order._id)} className="btn btn-danger btn-sm">Cancel</button>
                        </div>

                    ))
                }

            </div>
        </div>
    );
};

export default Orders;