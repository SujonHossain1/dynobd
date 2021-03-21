import React from 'react';
import { FiHeart, FiUser } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/dynoBD.png';
import image from '../../../assets/images/avatar.png';
import CartDropdown from './utils/CartDropdown';
import SearchBox from './utils/SearchBox';


const NavbarMiddle = () => {
    const { cartProducts } = useSelector(state => state.cart);
    const { wishlist } = useSelector(state => state.wish);
    const { compare } = useSelector(state => state.compare);
    const { user, isAuth } = useSelector(state => state.auth);


    return (
        <section className="middle-navbar  d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-6 col-5 p-0">
                        <div className="logo">
                            <Link to="/">
                                <img className="img-fluid" style={{ width: '121px' }} src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 remove-padding order-last order-sm-2 order-md-2 p-0">
                        <SearchBox />
                    </div>
                    <div className="col-lg-3 col-sm-6 col-7 order-lg-last p-0">
                        <ul className="dropdown-container">
                            <li className="my-dropdown cart-dropdown">
                                <Link to="/products/cart">
                                    <div className="icon-wrapper tooltip_top">
                                        <span className="icon"><HiOutlineShoppingCart /></span>
                                        <span className="cart-quantity" id="cart-count"> {cartProducts.length} </span>
                                        <span className="tooltiptext_top"> Cart </span>
                                    </div>
                                </Link>
                                <CartDropdown />
                            </li>
                            <li className="my-dropdown" >
                                <Link to="/products/wishlist">
                                    <div className="icon-wrapper tooltip_top">
                                        <span className="icon"><FiHeart /></span>
                                        <span className="cart-quantity" id="cart-count"> {wishlist.length} </span>
                                        <span className="tooltiptext_top"> Wishlist </span>
                                    </div>
                                </Link>
                            </li>
                            <li className="my-dropdown tooltip_top">
                                <Link to="/products/compare">
                                    <div className="icon-wrapper">
                                        <span className="icon"><RiArrowLeftRightFill /></span>
                                        <span className="cart-quantity" id="cart-count"> {compare.length} </span>
                                        <span className="tooltiptext_top"> Compare </span>
                                    </div>
                                </Link>
                            </li>
                            {isAuth ?
                                <li className="my-dropdown">
                                    <Link to='/user/dashboard'>
                                        <div className="icon-wrapper">
                                            <img src={user.image ? `/${user.image}` : image} alt="" />
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
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavbarMiddle;