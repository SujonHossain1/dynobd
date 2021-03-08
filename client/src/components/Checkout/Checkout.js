import React from 'react';
import { useStep } from "react-hooks-helper";
import CheckoutForm from './CheckoutForm';
import Confirm from './Confirm';
import Orders from './Orders';
import Payment from './Payment';
import PriceDetails from './PriceDetails';

const steps = [
    { id: "shipping", number: 1 },
    { id: "order", number: 2 },
    { id: "payment", number: 3 },
    { id: "confirm" }
];

const Checkout = () => {
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });
    const props = { step, navigation };

    switch (step.id) {
        case "order":
            return (
                <div className="container">
                    <div className="row">
                        <Orders {...props} />
                        <PriceDetails />
                    </div>
                </div>
            )

        case "payment":
            return (
                <div className="container ">
                    <div className="row">
                        <Payment {...props} />
                        <PriceDetails />
                    </div>
                </div>
            )
        case "confirm":
            return (
                <div className="container">
                    <Confirm {...props} />
                </div>
            )
        default:
            return (
                <div className="container">
                    <div className="row">
                        <CheckoutForm {...props} />
                        <PriceDetails />
                    </div>
                </div>

            )
    }
};

export default Checkout;