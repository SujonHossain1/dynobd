import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { getProducts } from '../../../store/actions/productAction';
import AddProduct from './AddProduct';

const Stock = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const [product, setProduct] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch]);


    const handleUpdateProduct = (product) => {
        setProduct(product);
        setIsUpdate(true);
    }

    const deleteProductHandler = (productId) => {
        const confirm = window.confirm('Are you sure you want to delete');
        if (confirm) {
            fetch(`https://dynobd-ecommerce.herokuapp.com/api/products/${productId}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(data.message);
                    console.log(data);
                })
                .catch(err => {
                    toast.error(err.message);
                })
        }
    }


    return (
        <div className="p-3">
            <ToastContainer />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col"> Image</th>
                        <th scope="col">Stocks</th>
                        <th scope="col"> Update </th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products ?
                        products.length === 0 ?
                            <h3>Product Not Found</h3>
                            :
                            products.map(product => (
                                <tr key={product._id}>
                                    <td> {product.title} </td>
                                    <td> <img className="img-fluid" style={{ width: '80px' }} src={`https://dynobd-ecommerce.herokuapp.com/${product.image1}`} alt="" /> </td>
                                    <td className="text-center"> {product.stock}  </td>
                                    <td> <button onClick={() => handleUpdateProduct(product)} className="btn btn-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Update</button> </td>
                                    <td> <button onClick={() => deleteProductHandler(product._id)} className="btn btn-danger btn-sm"> Delete</button> </td>
                                </tr>
                            ))
                        :
                        <h3>Loading ........</h3>
                    }
                </tbody>
            </table>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <AddProduct
                                updateProduct={product}
                                isUpdate={isUpdate}
                            />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stock;