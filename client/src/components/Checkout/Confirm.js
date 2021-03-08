import React from 'react';
import { Link } from 'react-router-dom';
import success_shop from '../../assets/images/success_order.svg';

const Confirm = () => {
    return (
        <>
            <div className="text-center pt-3 pb-5">
                <div className="text-center p-3">
                    <img width="50%" height="50%" src={success_shop} alt="" />
                    <div style={{ cursor: 'pointer' }} className="text-success fs-3">
                        Hurray! Your order successfully placed
                  <br />
                        <span className="text-warning">Track your order</span>
                    </div>
                </div>
                <div style={{ cursor: 'pointer' }} className="text-danger fs-5">
                    <Link className="text-danger" to="/">Go back to shop</Link>
                </div>
            </div>
        </>
    );
};

export default Confirm;