import React from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';
import { RiExchangeLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import imagePlacholder from '../../../assets/images/placeholder-image.png';
import { addToCart } from '../../../store/actions/cartAction';
import { addToCompare } from '../../../store/actions/compareAction';
import { cartSideBarAction } from '../../../store/actions/siteNav';
import { addToWishlist } from '../../../store/actions/wishAction';
import ProductModal from './ProductModal';



const Product = ({ product }) => {

    const { url, title, image1, price, previousPrice } = product;

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    };
    const quickShowHandler = (event) => {
        event.preventDefault();
        openModal();
    };

    const dispatch = useDispatch();
    const history = useHistory();

    const addToCartHandler = (event) => {
        event.preventDefault();
        product.quantity = 1;
        dispatch(addToCart(product));
        dispatch(cartSideBarAction('open'));
    };

    const buyNowHandler = (e) => {
        e.preventDefault();
        dispatch(addToCart(product));
        dispatch(cartSideBarAction('close'));
        history.push('/checkout');
    };

    const addToWishlistHandler = (e) => {
        e.preventDefault();
        dispatch(addToWishlist(product));
    };

    const addToCompareHandler = (e) => {
        e.preventDefault();
        dispatch(addToCompare(product, 1));
    }


    return (
        <>

            <div className="pd-remove">
                <Link className="item" to={`/product/details/${url}`}  >
                    <div className="item-img">
                        <div className="extra-list">
                            <ul>
                                <li onClick={addToWishlistHandler}>
                                    <span type="button" className="item-icon tooltip_right" > <FaHeart />
                                        <span className="tooltiptext_right"> Wishlist</span>
                                    </span>
                                </li>
                                <li onClick={quickShowHandler} >
                                    <span type="button" className="item-icon tooltip_right"> <FaEye />
                                        <span className="tooltiptext_right"> View</span>
                                    </span>
                                </li>
                                <li onClick={addToCompareHandler}>
                                    <span type="button" className="item-icon tooltip_right"> <RiExchangeLine />
                                        <span className="tooltiptext_right">Compare</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {image1 ?
                            <img className="img-fluid" src={`https://dynobd-ecommerce.herokuapp.com/${image1}`} alt="" />
                            :
                            <img src={imagePlacholder} alt="" />
                        }
                    </div>
                    <div className="item-info">
                        <div className="item-info-starts"></div>
                        <h4 className="item-info-price">Tk.{price}<small className="del"> Tk.{previousPrice} </small></h4>
                        <h5 className="item-info-name"> {title} </h5>

                        <div className="item-info-cart">
                            <span className=" add-to-cart-btn" onClick={addToCartHandler}>
                                <i className="icofont-cart"></i> Add To Cart
                            </span>
                            <span className="add-to-cart-btn" onClick={buyNowHandler}>
                                <i className="icofont-cart"></i> Buy Now
						    </span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="container">
                <ProductModal
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                    product={product}
                />
            </div>
        </>
    );
};

export default Product;