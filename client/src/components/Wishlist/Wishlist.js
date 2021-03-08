import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import empty from '../../assets/images/empty.svg';
import { addToCart } from '../../store/actions/cartAction';
import { cartSideBarAction } from '../../store/actions/siteNav';
import { removeFromWishlist } from '../../store/actions/wishAction';

const Wishlist = () => {
    const { wishlist } = useSelector(state => state.wish);
    const dispatch = useDispatch();

    const removeWishlistHandler = (id) => () => {
        dispatch(removeFromWishlist(id));
    };

    const addToCartHandler = (product) => e => {
        e.preventDefault();

        dispatch(addToCart(product, 1));
        dispatch(cartSideBarAction('open'));
    }

    return (
        <section className="order-section py-5">
            <div className="container ">
                <div className="row">
                    {wishlist.length === 0 ?
                        <div className="text-center my-4" style={{ height: '50vh' }}>
                            <img width="50%" height="50%" src={empty} alt="" />
                            <p className="fs-5 text-success">Nothing is added in the Wishlist</p>
                            <Link to="/" className="fs-5 text-danger">Go back to shop</Link>
                        </div>
                        :
                        wishlist.map(wish => (
                            <div className="col-md-6" key={wish._id}>
                                <div className="cart-order-list">
                                    <div className="cart-item row">
                                        <div className="col-md-3 col-sm-3 ">
                                            <img className="img-fluid cart-image rounded" src={`/${wish.image1}`} alt="" />
                                        </div>
                                        <div className="cart__item-description col-md-9 col-sm-9">
                                            <div className="cart__item-description__productNameandPrice row">
                                                <div className="cart__item-name col-md-8 col-sm-8">
                                                    <h6> <Link to={`/product/details/${wish.slug}`}> {wish.title}  </Link></h6>
                                                </div>
                                                <div className="cart-item__price col-md-4 col-sm-4">
                                                    <p> {wish.price} TK</p>
                                                </div>
                                            </div>
                                            <div className="cart__item-description__handle py-3">
                                                <button onClick={addToCartHandler(wish)} className="cart__item__button">Add To Cart</button>
                                                <div>
                                                    <div onClick={removeWishlistHandler(wish._id)} className="cart__item-handler-remove">
                                                        <button className="btn btn-default">Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default Wishlist;