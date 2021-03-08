import React from 'react';
import { useSelector } from 'react-redux';

const Information = () => {
    const { user } = useSelector(state => state.auth);
    return (
        <div className="information">
            <div className="information__title">
                <h3>Personal Information </h3>
                <button className="btn btn-secondary btn-sm mb-1">Edit</button>
            </div>
            <div className="information__body">
                <div className="information__body_item">
                    <p>First Name:  </p>
                    <p> {user.firstname ? `${user.firstname}` : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Last Name: </p>
                    <p> {user.lastname ? `${user.lastname}` : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Contact Number: </p>
                    <p> {user.phone ? user.phone : 'N/A'}</p>
                </div>
                <div className="information__body_item">
                    <p>Email Address: </p>
                    <p>  {user.email ? user.email : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Gender: </p>
                    <p>  {user.gender ? user.gender : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Date of Birth: </p>
                    <p> {user.birthday ? user.birthday : 'N/A'} </p>
                </div>
                <div className="information__body_item">
                    <p>Member Since: </p>
                    <p>{user.since ? user.since : 'N/A'} </p>
                </div>
            </div>
        </div>
    );
};

export default Information;