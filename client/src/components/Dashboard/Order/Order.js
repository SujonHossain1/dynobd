import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [detailsOrder, setDetailsOrder] = useState({});

    const handleDetailsOrder = (order) => {
        setDetailsOrder(order);
    }

    useEffect(() => {
        fetch('http://localhost:4000/api/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => console.log(err))
    }, []);

    console.log(orders, 'orders');

    return (
        <div className="me-3 table-responsive">
            <table class="table table table-bordered my-4">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Total</th>
                        <th scope="col" width="150px"> Details </th>
                        <th scope="col" width="150px" > Status </th>

                    </tr>
                </thead>
                <tbody>
                    {orders?.map(order => (
                        <tr>
                            <td > {order?.name} </td>
                            <td> {order?.phone} </td>
                            <td> {order?.address[0].address}, {order?.address[0].city} {order?.address[0].postCode}, {order?.address[0].division} </td>
                            <td> Tk. {order.totalPrice} </td>
                            <td >
                                <button onClick={() => handleDetailsOrder(order)} className="btn btn-warning btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#orderModal">Details</button>
                            </td>
                            <td width="150px" >
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option selected>Status</option>
                                    <option value="1">Pending</option>
                                    <option value="2">Packing</option>
                                    <option value="3">Confirm</option>
                                </select>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content ">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Order Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="checkout__order__item shadow-sm">
                                <div className="checkout__order__date">
                                    <h6>Time: {moment(detailsOrder?.createdAt).fromNow()}</h6>
                                    <h6>Total Price: Tk.{detailsOrder?.totalPrice} </h6>
                                </div>
                                <div className="row">
                                    {detailsOrder?.products?.map((product) => (
                                        <div className="col-md-6" key={product?._id}>
                                            <div className="checkout__order">
                                                <img src={`/${product?.image}`} alt="" className="img-fluid checkout__order__img" />
                                                <div className="checkout__order__content">
                                                    <h4> {product?.title}</h4>
                                                    <div className="checkout__order__content__item-edit">
                                                        <p>Price:</p>
                                                        <p>Tk. {product?.price} </p>
                                                    </div>
                                                    <div className="checkout__order__content__item-edit">
                                                        <p>Quantity:</p>
                                                        <p> {product?.quantity} </p>
                                                    </div>
                                                    <div className="checkout__order__content__item-edit">
                                                        <p>Total:</p>
                                                        <p>Tk. {product?.total} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;