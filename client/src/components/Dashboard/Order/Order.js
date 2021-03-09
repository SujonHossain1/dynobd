import React, { useEffect, useState } from 'react';

const Order = () => {
    const [orders, setOrders] = useState([]);


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
                        <th scope="col">Order Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Total</th>
                        <th scope="col" width="150px"> Details </th>
                        <th scope="col" width="150px" > Status </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td >
                            <button className="btn btn-warning btn-sm">Details</button>
                        </td>
                        <td width="150px" >
                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                <option selected>Status</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Order;