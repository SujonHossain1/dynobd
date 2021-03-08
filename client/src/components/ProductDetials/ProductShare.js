import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
const ProductShare = () => {
    return (
        <>
            <ul className="product-share">
                <li className="product-share-icon">
                    <span><FaFacebookF /></span>
                </li>
                <li className="product-share-icon">
                    <span><FaTwitter /></span>
                </li>
                <li className="product-share-icon">
                    <span><FaLinkedinIn /></span>
                </li>
                <li className="product-share-icon">
                    <span><FaPinterestP /></span>
                </li>
            </ul>
            <div className="shopping-time">
                <p>Estimated Shipping Time: <span> 5-7 days</span> </p>
                <p>Product SKU: <span>pr604jsv</span></p>
            </div>
        </>
    );
};

export default ProductShare;