import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/icons/dynoBD.png';
import image from '../../../../assets/images/avatar.png';
import { siteNavFun } from '../../../../store/actions/siteNav';
import SearchBox from '../utils/SearchBox';

const MobileNavbarTop = () => {
    const dispatch = useDispatch();
    const { user, isAuth } = useSelector(state => state.auth);

    const siteNav = () => {
        dispatch(siteNavFun(true, 'block'));
    }
    return (
        <div className="moblie-nav-section  d-md-none d-lg-none">
            <div className="container-fluid">
                <div className="mobile-nav">
                    <button onClick={siteNav} className="mobile-nav-button"> <FaBars /> </button>
                    <div>
                        <Link to="/" className="text-center">
                            <img className="mobile-nav-icon" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="mobile-nav-login">
                        <span className="mobile-nav-login-link" >
                            {isAuth ?
                                <li className="my-dropdown">
                                    <Link to='/user/dashboard'>
                                        <div className="icon-wrapper">
                                            <img src={user.image ? user.image : image} alt="" />
                                        </div>
                                    </Link>
                                </li>
                                :
                                <li className="my-dropdown tooltip_top">
                                    <Link to="/user/dashboard">
                                        <div className="icon-wrapper">
                                            <span className="icon"><FiUser /></span>
                                        </div>
                                    </Link>
                                </li>

                            }
                        </span>
                    </div>
                </div>
                <SearchBox />
            </div>

        </div>
    );
};

export default MobileNavbarTop;



