import React from 'react';
import { Link } from 'react-router-dom';

const SingleBox = ({ product }) => {
    return (
        <div className="single-box">
            <Link to={`/product/details/${product?.slug}`}>
                <div className="left-area">
                    <img src={product?.image} alt="" />
                </div>
                <div className="right-area">
                    <h4 className="price"> {product?.sellingPrice} <del> {product?.buyingPrice} </del> </h4>
                    <p className="text">{product?.name} </p>
                </div>
            </Link>
        </div>
    );
};

export default SingleBox;