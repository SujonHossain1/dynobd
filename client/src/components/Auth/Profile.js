import React, { useState } from 'react';
import Events from './Event';
import Information from './Information';
import Orders from './Orders';
import ProfileRoutes from './ProfileRoutes';


const Profile = () => {
    const [profileRoute, setProfileRoute] = useState("user-info");

    const profileRouteHanlder = (event) => {
        const { value } = event.target;
        setProfileRoute(value);
    }
    console.log(profileRoute);
    return (
        <section className="profile__section">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-3">
                        <ProfileRoutes
                            profileRoute={profileRoute}
                            profileRouteHanlder={profileRouteHanlder}
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="profile__routes__content shadow-sm">
                            {profileRoute === 'user-info' && <Information />}
                            {profileRoute === 'address' && <Events />}
                            {profileRoute === 'orders' && <Orders />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;