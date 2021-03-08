import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ children, ...rest }) => {
        const { isAuth } = useSelector(state => state.auth)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/user/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;