import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import couponImage from '../../assets/icons/tag.png';
import { placementTotalPrice } from '../../store/actions/orderAction';
import { SubTotalPrice } from '../../utils/cart';

const PriceDetails = () => {
    const [shipping, setShipping] = useState(0);
    const [packaging, setPackaging] = useState(0);

    const dispatch = useDispatch();

    const subTotalPrice = SubTotalPrice();
    const totalPrice = subTotalPrice + shipping + packaging;

    useEffect(() => {
        dispatch(placementTotalPrice(totalPrice));
    }, [totalPrice, shipping, packaging, dispatch])

    const shippingFeeHandler = (event) => {
        setShipping(parseInt(event.target.value));
    };
    const packagingFeeHandler = (event) => {
        setPackaging(parseInt(event.target.value));
    };

    return (
        <div className="col-md-4">
            <div className="price-details">
                <h4 className="price-details-title">PRICE DETAILS</h4>
                <div className="order-list"> <p>Total MRP</p> <p> {subTotalPrice} Tk </p> </div>
                <div className="total-price"><p> Total</p> <p> {subTotalPrice} Tk </p> </div>
                <div className="cupon-box">
                    <div className="cupon-link">
                        <img src={couponImage} alt="Cupon tag" />
                        <span>HAVE A PROMOTION CODE?</span>
                    </div>
                </div>
                <form id="check-coupon-form" className="coupon">
                    <input type="text" placeholder="Coupon Code" id="code" required="" autoComplete="off" />
                    <button type="submit">Apply</button>
                </form>
                <div className="packaging-area">
                    <h4 className="title">Shipping Method</h4>

                    <div className="radio-design">
                        <input
                            type="radio"
                            id="free-shepping"
                            name="shipping"
                            value={0}
                            onClick={shippingFeeHandler}
                            defaultChecked={shipping === 0 && true}
                        />
                        <label htmlFor="free-shepping">
                            Free Shipping
					    	<small>(10 - 12 days)</small>
                        </label>

                    </div>

                    <div className="radio-design">
                        <input
                            type="radio"
                            id="express-shepping"
                            name="shipping"
                            value={50}
                            onClick={shippingFeeHandler}
                            defaultChecked={shipping === 50 && true}
                        />
                        <label htmlFor="express-shepping">
                            Express Shipping + 50 Tk
					    	<small>(5 - 6 days)</small>
                        </label>

                    </div>
                </div>

                <div className="packaging-area">
                    <h4 className="title">Packaging</h4>
                    <div className="radio-design">
                        <input
                            type="radio"
                            id="default-package"
                            name="packaging"
                            defaultValue={0}
                            onClick={packagingFeeHandler}
                            defaultChecked={packaging === 0 && true}
                        />
                        <label htmlFor="default-package">
                            Default packaging
					    	<small>Default packaging by store</small>
                        </label>

                    </div>
                    <div className="radio-design">
                        <input
                            type="radio"
                            id="gift-package"
                            name="packaging"
                            defaultValue={40}
                            onClick={packagingFeeHandler}
                            defaultChecked={packaging === 40 && true}

                        />
                        <label htmlFor="gift-package">
                            Gift packaging
					    	<small>Exclusive Gift packaging</small>
                        </label>
                    </div>
                </div>
                <div className="final-price">
                    <span>Final Price :</span>
                    <span id="final-cost"> {totalPrice} Tk</span>
                </div>
            </div>
        </div>
    );
};

export default PriceDetails;