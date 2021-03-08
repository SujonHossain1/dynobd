import React, { useEffect } from 'react';
import { BiGift } from 'react-icons/bi'
import { FaListUl, FaRegNewspaper } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { siteNavFun } from '../../../../../store/actions/siteNav';
import logo from '../../../../../assets/icons/dynoBD.png';
import { Link } from 'react-router-dom';

const SiteNavbar = () => {
    const { display, isOpen } = useSelector(state => state.siteNav);

    const dispatch = useDispatch();
    const siteNav = () => {
        dispatch(siteNavFun(false, 'none'));
    }

    useEffect(() => {
        const body = document.querySelector('body');

        if (isOpen) {
            let bodyStyle = {
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
            };
            Object.assign(body.style, bodyStyle);
        } else {
            let bodyStyle = {
                height: '100%',
                width: '100%',
            };
            Object.assign(body.style, bodyStyle);
            body.style.overflowX = 'hidden';
            body.style.overflowY = 'scroll';
        }
    }, [isOpen]);

    return (

        <div className="side-menu-overlay" style={{ display: display }}>
            <div className="side-menu">
                <div className="side-menu-top ">
                    <img className="navbar-brand-icon " src={logo} alt="" />
                    <span onClick={siteNav} id="times-icon" className="times-icon d-inline-block"> &times;</span>
                </div>

                <div className="side-menu-login" onClick={siteNav}>
                    <div className="side-menu-img">
                        {/* <img src="https://sujonhossain1.github.io/e-valy/images/icons/e-icon.png" alt="" /> */}
                        <span>Account</span>
                    </div>
                    <div className="side-menu-login-btn">
                        <Link to="/user/login" className="btn btn-outline-danger btn-block" style={{ width: '100%' }}> login </Link>
                    </div>
                </div>

                <div className="side-menu-link" onClick={siteNav}>

                    <Link to="/" className="side-menu-link-item">
                        <div>
                            <span className="side-menu-logo mr-3">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z">
                                    </path>
                                </svg>
                            </span>
                            <span className="side-menu-text">Products</span>
                        </div>
                        <span className="side-menu-arrow">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                            </svg>
                        </span>
                    </Link>

                    <Link to="/" className="side-menu-link-item">
                        <div>
                            <span className="side-menu-logo mr-3">
                                <FaRegNewspaper />
                            </span>
                            <span className="side-menu-text">News Feed</span>
                        </div>
                        <span className="side-menu-arrow">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                            </svg>
                        </span>
                    </Link>

                    <Link to="/" className="side-menu-link-item">
                        <div>
                            <span className="side-menu-logo mr-3">
                                <BiGift />
                            </span>
                            <span className="side-menu-text">Giftcard</span>
                        </div>
                        <span className="side-menu-arrow">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                            </svg>
                        </span>
                    </Link>

                    <Link to="/" className="side-menu-link-item">
                        <div>
                            <span className="side-menu-logo mr-3">
                                <FaListUl />
                            </span>
                            <span className="side-menu-text">Orders</span>
                        </div>
                        <span className="side-menu-arrow">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                            </svg>
                        </span>
                    </Link>
                </div>

                <div className="customer-service mt-3">
                    <svg viewBox="0 0 512 512" id="phone" className="customer-service-img">
                        <title>Phone</title>
                        <path
                            d="m503.74 133.13c0-68.962-70.397-124.87-157.23-124.87-86.838 0-157.23 55.907-157.23 124.87 0 61.61 56.184 112.8 130.08 123.01h-0.224c3.878 23.82-3.277 49.113-21.476 67.485 39.048 0 71.282-29.409 76.178-67.48h-0.224c73.912-10.206 130.12-61.396 130.12-123.01z"
                            fill="#FFD24D"></path>
                        <path
                            d="m346.97 406.74c-23.797-23.796-49.284-43.828-49.284-43.828l-37.135 37.135-148.59-148.59 37.134-37.135s-20.031-25.487-43.828-49.284c-23.797-23.796-49.284-43.828-49.284-43.828s-44.496 40.933-47.489 73.399c-4.003 43.455 41.996 122.46 114.22 194.68 72.22 72.218 151.23 118.22 194.68 114.22 32.466-2.994 73.4-47.489 73.4-47.489s-20.03-25.487-43.827-49.283z"
                            fill="#c7262e"></path>
                        <path
                            d="m462.83 38.366c-31.151-24.741-72.457-38.366-116.31-38.366-43.855 0-85.164 13.625-116.31 38.365-31.709 25.183-49.173 58.837-49.173 94.762 0 63.23 54.559 117.14 130.67 130.18 1.555 20.122-5.665 40.143-19.891 54.505-2.346 2.367-3.038 5.914-1.755 8.99s4.289 5.079 7.622 5.079c40.541 0 75.336-29.048 83.348-68.524 35.248-6.016 67.374-21.301 91.021-43.408 25.768-24.093 39.96-54.926 39.96-86.82-1e-3 -35.924-17.464-69.578-49.176-94.761zm-90.329 209.59c-4.301 0.593-7.408 4.416-7.11 8.746 4e-3 0.064 0.01 0.127 0.015 0.189-4.198 27.037-23.813 48.559-48.986 55.822 9.81-16.641 13.891-36.384 11.186-55.9 3e-3 -0.037 6e-3 -0.076 9e-3 -0.115 0.298-4.332-2.809-8.152-7.109-8.747-71.246-9.847-122.96-58.14-122.96-114.83-1e-3 -64.298 66.827-116.61 148.97-116.61s148.97 52.312 148.97 116.61c1e-3 56.701-51.723 105-122.99 114.83z">
                        </path>
                        <path
                            d="m291.09 124.32c-4.857 0-8.809 3.952-8.809 8.809s3.952 8.809 8.809 8.809 8.809-3.952 8.809-8.809-3.952-8.809-8.809-8.809z">
                        </path>
                        <path
                            d="m401.94 124.32c-4.857 0-8.809 3.952-8.809 8.809s3.952 8.809 8.809 8.809 8.809-3.952 8.809-8.809-3.951-8.809-8.809-8.809z">
                        </path>
                        <path
                            d="m346.52 124.32c-4.857 0-8.809 3.952-8.809 8.809s3.952 8.809 8.809 8.809 8.809-3.952 8.809-8.809-3.951-8.809-8.809-8.809z">
                        </path>
                        <path
                            d="m352.8 400.9c-23.872-23.871-48.964-43.651-50.02-44.48-3.287-2.583-7.985-2.303-10.943 0.653l-31.295 31.296-101.61-101.61c-3.224-3.223-8.453-3.225-11.678 0-3.225 3.226-3.225 8.454 0 11.679l107.45 107.45c1.548 1.548 3.649 2.418 5.839 2.418s4.29-0.87 5.84-2.418l31.882-31.883c8.769 7.199 26.308 22.026 42.858 38.576 16.591 16.59 31.477 34.209 38.653 42.951-13.904 13.788-42.105 37.818-63.143 39.757-41.116 3.806-118.45-42.199-188.09-111.83-69.634-69.632-115.62-146.98-111.83-188.09 1.939-21.037 25.97-49.241 39.757-63.142 8.743 7.176 26.36 22.06 42.952 38.653 16.533 16.533 31.37 34.083 38.575 42.858l-31.882 31.881c-3.225 3.226-3.225 8.454 0 11.678l17.779 17.78c3.225 3.224 8.454 3.224 11.678 0 3.225-3.226 3.225-8.454 0-11.678l-11.94-11.941 31.295-31.295c2.956-2.958 3.237-7.656 0.653-10.943-0.83-1.056-20.61-26.149-44.481-50.02s-48.963-43.651-50.02-44.48c-3.183-2.502-7.711-2.328-10.694 0.415-1.913 1.76-46.873 43.491-50.121 78.718-4.273 46.379 42.585 127.27 116.6 201.28 70.894 70.892 148.09 116.87 195.23 116.87 2.077 0 4.097-0.089 6.053-0.269 35.227-3.248 76.961-48.209 78.719-50.122 2.742-2.981 2.918-7.509 0.415-10.695-0.827-1.056-20.607-26.15-44.479-50.02z">
                        </path>
                    </svg>
                    <div className="customer-service-text">
                        <span>Hotline</span>
                        <h4><a href="tel:+">01788-888888</a></h4>
                    </div>
                </div>

                <div className="customer-service">
                    <img src="https://sujonhossain1.github.io/e-valy/images/icons/bkash-icon.png" alt="" />
                    <div className="customer-service-text">
                        <span>bKash</span>
                        <h4><a href="tel:+">01788-888888</a></h4>
                    </div>
                </div>

                <div className="customer-service">
                    <img
                        src="https://sujonhossain1.github.io/e-valy/images/icons/bkash-icon.png" alt="" />
                    <div className="customer-service-text">
                        <span>bKash</span>
                        <h4><a href="tel:+">01788-888888</a></h4>
                    </div>
                </div>
                <div className="side-menu-links">
                    <Link to="/">. About Us </Link>
                    <Link to="/">. Contact us </Link>
                    <Link to="/">. Privacy Policy</Link>
                    <Link to="/">. Purchasing Policy</Link>
                    <Link to="/">.Cookie Policy </Link>
                    <Link to="">. Terms & Conditions</Link>
                    <Link to=""> · Returns and Replacement</Link>
                </div>
                <p className="pl-4">© dynobd.com 2021</p>
            </div>
        </div>
    );
};

export default SiteNavbar;