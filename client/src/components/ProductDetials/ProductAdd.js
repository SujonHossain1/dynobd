import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart } from '../../store/actions/cartAction';
import { addToCompare } from '../../store/actions/compareAction';
import { cartSideBarAction } from '../../store/actions/siteNav';
import { addToWishlist } from '../../store/actions/wishAction';


const ProductAdd = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleQuantity = (isAdding) => {
        if (isAdding) {
            setQuantity(quantity + 1);
        } else {
            if (quantity !== 1) {
                setQuantity(quantity - 1);
            }
        }
    };

    const addToCartAction = (event) => {
        event.preventDefault();

        dispatch(addToCart(product, quantity));
        dispatch(cartSideBarAction('open'));
    };

    const buyNowHandler = (e) => {
        e.preventDefault();
        dispatch(addToCart(product, quantity));
        dispatch(cartSideBarAction('close'));
        history.push('/checkout');
    };

    const addToWishlistHandler = (e) => {
        e.preventDefault();
        dispatch(addToWishlist(product))
    }

    const addToComapareHandler = (e) => {
        e.preventDefault();
        dispatch(addToCompare(product));
    }

    return (
        <>
            <div className="product-price pt-3">
                <p className="p-title">Price: </p>
                <p className="price">
                    <span id="sizeprice" className="me-2">৳ {product?.price}  </span>
                    <small><del>৳ {product?.previousPrice} </del></small>
                </p>
            </div>
            <p> {product.shortDescription} </p>
            <div className="product-quantity mt-4">
                <span className="ct1" onClick={() => handleQuantity(false)}><i className="fa fa-minus"></i></span>
                <span className="qty">
                    <input id="product-count" type="text" name="" value={quantity} />
                </span>
                <span className="ct1" onClick={() => handleQuantity(true)}><i className="fa fa-plus"></i> </span>
            </div>
            <ul className="product-add">
                <li className="product-add-btn" onClick={addToCartAction} > <span> <HiOutlineShoppingCart /> </span> Add To Cart </li>
                <li className="product-add-btn" onClick={buyNowHandler}>  <span> <HiOutlineShoppingCart /> </span> Buy Now </li>
                <li onClick={addToWishlistHandler}> <span className="product-add-wishlist"> <FaHeart /> </span> </li>
                <li onClick={addToComapareHandler}> <span className="product-add-compare"> <RiArrowLeftRightFill /> </span> </li>
            </ul>
        </>
    );
};

export default ProductAdd;