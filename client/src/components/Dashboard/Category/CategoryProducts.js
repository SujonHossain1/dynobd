import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { getCategoriesProducts } from '../../../store/actions/categoryAction';
import AddProduct from '../Product/AddProduct';

const CategoryProducts = () => {
    const dispatch = useDispatch();
    const { categoriesProducts } = useSelector(state => state.categories);
    useEffect(() => {
        dispatch(getCategoriesProducts())
    }, [dispatch])
    console.log(categoriesProducts);

    const [product, setProduct] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);

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
        <div>
            <ToastContainer />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col"> Image</th>
                        <th scope="col"> Update </th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {categoriesProducts ?
                        categoriesProducts.length === 0 ?
                            <h1>No Product Founds</h1>
                            :
                            categoriesProducts.map((category) => (
                                <>
                                    {category.products.length > 0 &&
                                        <h4 className="btn btn-warning my-2"> {category.category} </h4>
                                    }
                                    {
                                        category?.products.map(product => (
                                            <tr key={product._id}>
                                                <td> {product.title} </td>
                                                <td> <img className="img-fluid" style={{ width: '80px' }} src={`https://dynobd-ecommerce.herokuapp.com/${product.image1}`} alt="" /> </td>
                                                <td> <button onClick={() => handleUpdateProduct(product)} className="btn btn-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Update</button> </td>
                                                <td> <button onClick={() => deleteProductHandler(product._id)} className="btn btn-danger btn-sm"> Delete</button> </td>
                                            </tr>
                                        ))
                                    }
                                </>
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

export default CategoryProducts;