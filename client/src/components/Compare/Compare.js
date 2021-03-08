import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import empty from '../../assets/images/empty.svg';
import { removeFromCompare } from '../../store/actions/compareAction';

const Compare = () => {
    const { compare } = useSelector(state => state.compare);
    const dispatch = useDispatch();

    const removeFromCompareHandler = (productId) => e => {
        e.preventDefault();
        dispatch(removeFromCompare(productId));
    }
    return (
        <div className="container my-4 py-4">
            {compare.length === 0 ?
                <div className="text-center my-4" style={{ height: '50vh' }}>
                    <img width="50%" height="50%" src={empty} alt="" />
                    <p className="fs-5 text-success" style={{fontWeight: '600'}}>Nothing is added in the Compare</p>
                    <Link to="/" className="fs-5 text-danger">Go back to shop</Link>
                </div>
                :
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th style={{ width: '200px' }}> Product Name </th>
                            {compare.map(p => (
                                <td key={p._id}>
                                    <img className="img-fluid" src={`/${p.image1}`} alt="" />
                                    <p className="pt-2"> {p.title} </p>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <th> Reviews</th>
                            {compare.map(p => (
                                <td key={p._id}>Reviews Here</td>
                            ))}
                        </tr>
                        <tr>
                            <th>Price</th>
                            {compare.map(p => (
                                <td key={p._id}> Tk.{p.price} </td>
                            ))}
                        </tr>
                        <tr>
                            <th>Action</th>
                            {compare.map(p => (
                                <td key={p._id}>
                                    <button className="cart__item__button">Add To Cart</button>
                                    <button className="cart__item__button my-2">Buy Now</button>
                                    <div onClick={removeFromCompareHandler(p._id)} class="cart__item-handler-remove">
                                        <button class="btn">Remove</button>
                                    </div>

                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    );
};

export default Compare;