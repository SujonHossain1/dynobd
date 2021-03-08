import React from 'react';
import { BsBagFill } from 'react-icons/bs';
import { FaAngleRight, FaTrash } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import empty from '../../../assets/images/empty.svg';
import { productQuantity, removeFromCart } from '../../../store/actions/cartAction';
import { cartSideBarAction } from '../../../store/actions/siteNav';
import { SubTotalPrice } from '../../../utils/cart';

const CartSidebar = () => {
    const { cartProducts, cartSideBar } = useSelector(state => state.cart);

    const dispatch = useDispatch();
    const history = useHistory();

    const subTotalPrice = SubTotalPrice();
    console.log("subTotalPrice", subTotalPrice);

    const checkoutAction = () => {
        history.push('/checkout');
        dispatch(cartSideBarAction('close'));
    }

    let viewCartAction = e => {
        e.preventDefault()
        dispatch(cartSideBarAction('close'));
        history.push('/products/cart');
    }



    return (
        <div>
            <div className={`cart-sidebar my__transition dark__shadow ${!cartSideBar && 'cart-sidebar__hide'}`}>
                <div onClick={e => dispatch(cartSideBarAction())} className="cart-sidebar__close-icon dark__shadow my__transition"><FaAngleRight /></div>
                <div className="cart-sidebar__header my-bg">
                    <div className="cart-sidebar__header-content">
                        <div className="cart-sidebar__headerIcon"><BsBagFill /></div>
                        <div className="cart-sidebar__header-total-product" style={{ color: '#333' }}>{cartProducts.length}</div>
                        <div className="h3">Cart</div>
                        <div onClick={e => dispatch(cartSideBarAction())} className="cart-sidebar__header-close-icon"><RiCloseFill /></div>
                    </div>
                </div>

                <div className="cart-sidebar__items">
                    {
                        cartProducts.length === 0 ?
                            <div className="text-center" style={{ height: '50vh' }}>
                                <img width="50%" height="50%" src={empty} alt="" />
                                <p className="fs-5 text-success">Nothing is added in the cart</p>
                            </div>
                            :
                            cartProducts.map(p => (
                                <div key={p._id} className="cart-sidebar__item">
                                    <div className="d-flex">
                                        <button onClick={e => dispatch(removeFromCart(p._id))} className="cart-sidebar__removeIcon" data-toggle="tooltip" data-placement="top" title="Remove product">
                                            <FaTrash />
                                        </button>
                                        <img width="200px" height="100px" className="" src={`/${p.image1}`} alt="" />
                                        <div className="cart-sidebar__item-info">
                                            <div className="">
                                                <div className=""><span>{p.title}</span></div>
                                                <div className="cart-sidebar__total"><span>price:</span>&#2547;{p.price}</div>
                                                <div className="cart-sidebar__total"><span>total price:</span>&#2547;{p.quantity * p.price}</div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-sidebar__quantity shadow-sm">
                                        <div onClick={e => dispatch(productQuantity('decrease', p._id))} className="p-2" style={{ cursor: 'pointer', borderRight: '1px solid #dbdbdb' }}>-</div>
                                        <div className="p-2" style={{ borderRight: '1px solid #dbdbdb' }}>{p.quantity}</div>
                                        <div onClick={e => dispatch(productQuantity('increase', p._id))} className="p-2" style={{ cursor: 'pointer' }}>+</div>
                                    </div>
                                </div>
                            ))
                    }
                </div>


                <div className="cart-sidebar__footer">
                    <div className="p-3 d-flex justify-content-between fs-5 my-1 dark__shadow" style={{ background: '#eee' }}>
                        <div className="">SubTotal Amount: </div>
                        <div className=""><strong style={{ color: "#428b46" }}>&#2547; {SubTotalPrice()}</strong></div>
                    </div>
                    {cartProducts.length === 0 ?
                        <button onClick={checkoutAction} className="btn disabled cart-sidebar__footer-btn my__transition " disabled> Checkout </button>
                        :
                        <button onClick={checkoutAction} className="cart-sidebar__footer-btn my__transition "> Checkout </button>
                    }
                    <button onClick={viewCartAction} className="cart-sidebar__footer-btn my__transition"> View Cart </button>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;