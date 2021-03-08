import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiCheckCircle } from 'react-icons/bi';
import { FaTimesCircle } from 'react-icons/fa';

const ProductInfo = ({ product }) => {

    return (
        <>
            <h4 className="product-name"> {product?.title} </h4>
            <div className="info-meta1">
                <ul>
                    <li className="product-isstock">
                        {
                            product?.stock >= 1 ?
                                <p> <span> <BiCheckCircle /> </span> In Stock</p>
                                :
                                <p style={{ color: 'red' }}> <span> <FaTimesCircle /> </span> Out Stock</p>
                        }

                    </li>
                    <li>
                        <div className="ratting">
                            <div className="empty-star">
                                <span> <AiFillStar /> </span>
                                <span> <AiFillStar /> </span>
                                <span> <AiFillStar /> </span>
                                <span> <AiOutlineStar /> </span>
                                <span> <AiOutlineStar /> </span>
                            </div>
                            <div className="full-star"> </div>
                        </div>
                    </li>
                    <li className="review-count">
                        <p> 0 Review(s) </p>
                    </li>
                    <li> <span className="mybadge">New</span> </li>
                </ul>
            </div>
        </>
    );
};

export default ProductInfo;