import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaFacebookF, FaGoogle, FaLock, FaTwitter, FaUser } from 'react-icons/fa';
import { ImPhone } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LOGIN } from '../../store/actions/types';

const Auth = () => {
    const { register, handleSubmit, watch, reset, errors } = useForm();
    const [error, setError] = useState({});
    const [user, setUser] = useState({});
    const [newUser, setNewUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();


    const inputHanlder = (event) => {
        const { name, value } = event.target;
        setUser((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }


    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };



    const onSubmit = async (value, event) => {
        event.preventDefault();
        try {
            if (newUser) {
                setLoading(true);
                const res = await fetch('https://dynobd-ecommerce.herokuapp.com/api/users/sign-up', {
                    method: 'POST',
                    body: JSON.stringify(value),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                const data = await res.json();

                if (res.status === 201) {
                    toast.success(data.message);
                    reset({
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                        phone: '',
                        confirmPassword: ''
                    })
                    setError({});
                    setNewUser(false);
                } else {
                    setError(data);
                }
                setLoading(false)
            }

            if (!newUser) {
                setLoading(true);
                const res = await fetch('https://dynobd-ecommerce.herokuapp.com/api/users/login', {
                    method: 'POST',
                    body: JSON.stringify(value),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                const data = await res.json();


                if (res.status === 200) {

                    localStorage.setItem('customer_auth_token', data.token);

                    let token = localStorage.getItem('customer_auth_token');

                    if (token) {
                        let decodeToken = jwtDecode(token)
                        dispatch({
                            type: LOGIN,
                            payload: {
                                customerToken: token,
                                user: decodeToken,
                                isAuth: true
                            },
                        })
                    }

                    history.replace(from);
                    setError({});
                    reset({
                        email: '',
                        password: '',
                    })
                    toast.success(data.message);
                } else {
                    setError(data);
                }
                setLoading(false);
            }
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <section className="form-section">
            <form className="col-md-5 form-container my-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <span className="nav-item nav-link login" onClick={() => setNewUser(false)} > Login </span>
                    <span className="nav-item nav-link active" onClick={() => setNewUser(true)}> Register </span>
                </div>
                <div className="form-input-wrapper">
                    <h1 className="login-header"> {newUser ? 'Register Now' : 'Login Now'} </h1>
                    {newUser &&
                        <>
                            <div className="input-item">
                                <label className="input-label">First Name</label>
                                <div className="input-field">
                                    <span className="input-icon"> <FaUser /> </span>
                                    <input
                                        type="text"
                                        name="firstname"
                                        onChange={inputHanlder}
                                        placeholder="First Name"
                                        ref={register({
                                            required: "First Name is required",
                                            minLength: {
                                                value: 3,
                                                message: "Al least 3 characters"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.firstname && <span className="bg-danger text-white px-2 rounded">{errors.firstname.message}</span>}
                                {error.firstname && <span className="bg-danger text-white px-2 rounded">{error.firstname}</span>}
                            </div>
                            <div className="input-item">
                                <label className="input-label">Last Name</label>
                                <div className="input-field">
                                    <span className="input-icon"> <FaUser /> </span>
                                    <input
                                        type="text"
                                        name="lastname"
                                        onChange={inputHanlder}
                                        placeholder="Last Name"
                                        ref={register({
                                            required: "Last Name is required",
                                            minLength: {
                                                value: 3,
                                                message: "Al least 3 characters"
                                            }
                                        })}
                                    />
                                </div>
                                {errors.lastname && <span className="bg-danger text-white px-2 rounded">{errors.lastname.message}</span>}
                                {error.lastname && <span className="bg-danger text-white px-2 rounded">{error.lastname}</span>}
                            </div>
                        </>
                    }
                    {newUser &&
                        <div className="input-item">
                            <label className="input-label">Phone Number</label>
                            <div className="input-field">
                                <span className="input-icon"><ImPhone /></span>
                                <input
                                    type="text"
                                    name="phone"
                                    onChange={inputHanlder}
                                    placeholder="Phone Number"
                                    ref={register({
                                        required: "Phone Number is required",
                                        pattern: {
                                            value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                                            message: "Invalid Phone Number"
                                        }
                                    })}
                                />
                            </div>
                            {errors.phone && <span className="bg-danger text-white px-2 rounded">{errors.phone.message}</span>}
                            {error.phone && <span className="bg-danger text-white px-2 rounded">{error.phone}</span>}
                        </div>

                    }
                    <div className="input-item">
                        <label className="input-label">Email Address</label>
                        <div className="input-field">
                            <span className="input-icon"><FaEnvelope /></span>
                            <input
                                type="email"
                                name="email"
                                onChange={inputHanlder}
                                placeholder="Email Address"
                                ref={register({
                                    required: "Email Address is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                        </div>
                        {errors.email && <span className="bg-danger text-white px-2 rounded">{errors.email.message}</span>}
                        {error.email && <span className="bg-danger text-white px-2 rounded">{error.email}</span>}
                    </div>
                    <div className="input-item">
                        <label className="input-label">Password</label>
                        <div className="input-field">
                            <span className="input-icon"><FaLock /></span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={inputHanlder}
                                ref={register({
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })}
                            />
                        </div>
                        {errors.password && <span className="bg-danger text-white px-2 rounded">{errors.password.message}</span>}
                        {error.password && <span className="bg-danger text-white px-2 rounded">{error.password}</span>}
                    </div>
                    {
                        newUser &&
                        <div className="input-item">
                            <label className="input-label">Confirm Password</label>
                            <div className="input-field">
                                <span className="input-icon"> <FaLock /> </span>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    onChange={inputHanlder}
                                    placeholder="Confirm Password"
                                    ref={register({
                                        validate: (value) => value === watch('password')
                                    })}
                                />
                            </div>
                            {errors.confirmPassword && <span className="bg-danger text-white px-2 rounded">Passwords don't match.</span>}
                            {error.confirmPassword && <span className="bg-danger text-white px-2 rounded">Passwords don't match.</span>}
                        </div>
                    }
                    {
                        newUser === false && <span className="forgot-password">Forgot Password?</span>
                    }

                    {loading ?
                        <div className="btn-style">
                            <button className="login-btn" type="submit" disabled>
                                <span className="spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>
                             Loading...
                         </button>
                        </div>
                        :
                        <div className="btn-style">
                            <button className="login-btn" type="submit"> {newUser ? 'Register' : 'Login'} </button>
                        </div>
                    }

                    {
                        newUser === false &&
                        <div className="login-with">
                            <span>Or Sign Up Using</span>
                            <span className="auth-icon facebook"> <FaFacebookF /> </span>
                            <span className="auth-icon google" id="google"> <FaGoogle></FaGoogle></span>
                            <span className="auth-icon twitter "><FaTwitter /></span>
                        </div>
                    }
                    <div className="have-account">
                        <span> {newUser ? "Already Have an Account?" : "Have not account yet?"} </span>
                        <span onClick={() => setNewUser(!newUser)} className="sign-up"> {newUser ? 'Sign In' : 'Sign Up'} </span>
                    </div>
                </div>
            </form>
        </section>

    );
};

export default Auth;