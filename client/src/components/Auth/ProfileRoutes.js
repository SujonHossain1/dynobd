import React from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { BiHeart } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { FaLuggageCart } from 'react-icons/fa';
import { FiKey } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { IoMdNotificationsOutline } from "react-icons/io";
import { VscPreview } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import image from '../../assets/images/avatar.png';

const ProfileRoutes = ({ profileRoute, profileRouteHanlder }) => {

    const { user } = useSelector(state => state.auth);

    return (
        <div className="profile-menu shadow-sm">
            <div className="profile__user">
                <img className="img-fluid profile__user__img" src={user.image ? user.image : image} alt="Profile" />
                <h3 className="profile__user__name"> {`${user.firstname} ${user.lastname}`} <BsCheckCircle className="profile__check__success" />  </h3>
                <button className="profile__btn">Check Account</button>
            </div>
            <div className={profileRoute === 'user-info' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="user-info">
                    <span className="profile-icon"> <AiOutlineUser /> </span>
                    <span className="profile-route"> Basic Information</span>
                </label>
                <input
                    type="radio"
                    id="user-info"
                    value="user-info"
                    checked={profileRoute === 'user-info'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'address' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="address">
                    <span className="profile-icon"> <GrLocation /> </span>
                    <span className="profile-route">Address</span>
                </label>
                <input
                    type="radio"
                    id="address"
                    value="address"
                    checked={profileRoute === 'address'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'orders' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="orders">
                    <span className="profile-icon"> <FaLuggageCart /> </span>
                    <span className="profile-route">Orders</span>
                </label>
                <input
                    type="radio"
                    id="orders"
                    value="orders"
                    checked={profileRoute === 'orders'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'reviews' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="reviews">
                    <span className="profile-icon"> <VscPreview /> </span>
                    <span className="profile-route">Reviews</span>
                </label>
                <input
                    type="radio"
                    id="reviews"
                    value="reviews"
                    checked={profileRoute === 'reviews'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'wishlist' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="wishlist">
                    <span className="profile-icon"> <BiHeart /> </span>
                    <span className="profile-route">Wishlist</span>
                </label>
                <input
                    type="radio"
                    id="wishlist"
                    value="wishlist"
                    checked={profileRoute === 'wishlist'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'changePassword' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="changePassword">
                    <span className="profile-icon"> <FiKey /> </span>
                    <span className="profile-route">Change Password</span>
                </label>
                <input
                    type="radio"
                    id="changePassword"
                    value="changePassword"
                    checked={profileRoute === 'changePassword'}
                    onChange={profileRouteHanlder}
                />
            </div>
            <div className={profileRoute === 'notifications' ? 'profile-menu-item profile-active' : 'profile-menu-item'}>
                <label htmlFor="notifications">
                    <span className="profile-icon"> <IoMdNotificationsOutline /> </span>
                    <span className="profile-route">Notifications</span>
                </label>
                <input
                    type="radio"
                    id="notifications"
                    value="notifications"
                    checked={profileRoute === 'notifications'}
                    onChange={profileRouteHanlder}
                />
            </div>
        </div>
    );
};

export default ProfileRoutes;