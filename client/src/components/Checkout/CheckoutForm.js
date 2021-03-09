import React from 'react';
import { useForm } from 'react-hook-form';
import { FaDolly, FaRegAddressCard, FaRegCreditCard } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { placementInformation } from '../../store/actions/orderAction';

const CheckoutForm = ({ navigation }) => {
    const { register, handleSubmit, errors } = useForm();
    const { user, isAuth } = useSelector(state => state.auth);
    const dispatch = useDispatch();



    const onSubmit = (data, event) => {
        event.preventDefault();
        const { email, phone, address, city, postCode, divison } = data;
        dispatch(placementInformation({
            userId: user._id,
            email,
            phone,
            address: {
                address,
                city,
                divison,
                postCode,
            }
        }));
        if (email && phone && address && city && postCode && divison) {
            navigation.next()
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
                                <span className="checkout-nav-item-link">
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
                <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="checkout-form-title">Placement Information</h4>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <input
                                type="text"
                                name="firstname"
                                className="form-control"
                                placeholder="First name"
                                defaultValue={user?.firstname}
                                ref={register({
                                    required: "First name is required",
                                })}
                            />
                            {errors.firstname && <span className="bg-danger text-white px-2 rounded">{errors.firstname.message}</span>}
                        </div>
                        <div className="col-md-6 mb-2">
                            <input
                                type="text"
                                className="form-control"
                                name="lastname"
                                placeholder="Last name"
                                defaultValue={user?.lastname}
                                ref={register({
                                    required: "Last name is required",
                                })}
                            />
                            {errors.lastname && <span className="bg-danger text-white px-2 rounded">{errors.lastname.message}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone"
                                defaultValue={user?.phone}
                                ref={register({
                                    required: "Phone number is required",
                                })}
                            />
                            {errors.phone && <span className="bg-danger text-white px-2 rounded">{errors.phone.message}</span>}
                        </div>
                        <div className="col-md-6 mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                name="email"
                                defaultValue={user?.email}
                                ref={register({
                                    required: "Email Address is required",
                                })}
                            />
                            {errors.email && <span className="bg-danger text-white px-2 rounded">{errors.email.message}</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                name="address"
                                ref={register({
                                    required: "Address is required",
                                })}
                            />
                            {errors.address && <span className="bg-danger text-white px-2 rounded">{errors.address.message}</span>}
                        </div>
                        <div className="col-md-6 mb-2">
                            <select className="form-select form-control" aria-label="Default select example" name="divison" ref={register({ required: 'Division is required' })}>
                                <option value="">Select Your Division</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="dinajpur">Dinajpur</option>
                                <option value="chittagong">Chittagong</option>
                                <option value="mymensingh">Mymensingh</option>
                                <option value="barisal">Barisal</option>
                                <option value="rangpur">Rangpur</option>
                            </select>
                            {errors.divison && <span className="bg-danger text-white px-2 rounded">{errors.divison.message}</span>}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="City"
                                name="city"
                                ref={register({
                                    required: "City is required",
                                })}
                            />
                            {errors.city && <span className="bg-danger text-white px-2 rounded">{errors.city.message}</span>}
                        </div>
                        <div className="col-md-6 mb-2">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Post Code"
                                name="postCode"
                                ref={register({
                                    required: false,
                                })}
                            />
                            {errors.postCode && <span className="bg-danger text-white px-2 rounded">{errors.postCode.message}</span>}
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mt-3 ">
                        <Link to="/products/cart"><span className="btn btn-secondary btn__rounded  py-2" >Go Back Cart</span></Link>
                        {/* <button onClick={() => navigation.next()} type="submit" className="form-btn">Continue</button> */}
                        <button type="submit" className="form-btn">Continue</button>
                    </div>
                </form>

            </div>

        </>
    );
};

export default CheckoutForm;