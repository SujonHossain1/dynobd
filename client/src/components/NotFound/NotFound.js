import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/404.svg';

const NotFound = () => {
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
            <div className="text-center p-3">
                <img width="60%" height="60%" src={notFound} alt="" />
                <p className="text-success fs-3">Page Not Found</p>
            </div>
            <Link to="/" className="text-danger fs-5">Go back to shop</Link>
        </div>
    )
}
export default NotFound