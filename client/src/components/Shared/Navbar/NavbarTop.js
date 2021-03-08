import React from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LOGIN } from '../../../store/actions/types';
const NavbarTop = () => {
    const { user, isAuth } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem('customer_auth_token');
        dispatch({
            type: LOGIN,
            payload: {
                customerToken: '',
                user: {},
                isAuth: false
            }
        });
        toast.success('Logout Sucessfully');
    }


    return (
        <section className="top-navbar d-none d-md-block">
            <ul className="container nav">
                <li className="nav-item mr-3" >
                    <span className="icon"> <FiPhoneCall /> </span>
                    <a className="text-decoration-none" href="tel:01686276704" >01686-276704</a>
                </li>
                <li className="nav-item">
                    <span className="icon"><FiMail /></span>
                    <a className="text-decoration-none ml-2" href="mailto:teamtechdyno@gmail.com">teamtechdyno@gmail.com</a>
                </li>
                <div className="nav" style={{ marginLeft: 'auto' }}>
                    {isAuth ?
                        <li onClick={logoutHandler} className="nav-item">
                            <span className="text-decoration-none" style={{ cursor: 'pointer' }} >
                                <strong>Logout</strong>
                            </span>
                        </li>
                        :
                        <li className="nav-item">
                            <Link to="/user/login" className="text-decoration-none" >Sign In | Join </Link>
                        </li>

                    }

                    {isAuth &&
                        <li className="nav-item ml-3">
                            <Link to="/user/dashboard" className="text-decoration-none sell-btn"> {`${user.firstname} ${user.lastname}`} </Link>
                        </li>
                    }

                </div>
            </ul>
        </section>
    );
};

export default NavbarTop;