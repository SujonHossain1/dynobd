import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { getCategories } from '../../../store/actions/categoryAction';
import Category from './Category';

const Categories = () => {
    const { categories } = useSelector(state => state.categories);
    const [categoryUpdate, setCategoryUpdate] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const dispatch = useDispatch();

    const categoryUpdateHandler = (category) => {
        setCategoryUpdate(category);
        setIsUpdate(true);
    }


    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch, isDelete, isUpdate]);

    const categoryDeleteHandler = (categoryId) => {
        const confirm = window.confirm('Are you sure you want to delete');
        if (confirm) {
            fetch(`https://dynobd-ecommerce.herokuapp.com/api/categories/${categoryId}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(data.message);
                    setIsDelete(true)
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
                        <th scope="col">Product Image</th>
                        <th scope="col"> Update </th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {categories ?
                        categories.length === 0 ?
                            <h1>No Category Found</h1>
                            :
                            categories.map(category => (
                                <tr key={category._id}>
                                    <td> {category.category} </td>
                                    <td> <img className="img-fluid" style={{ width: '80px' }} src={`https://dynobd-ecommerce.herokuapp.com/${category.categoryImage}`} alt="" /> </td>
                                    <td> <button onClick={() => categoryUpdateHandler(category)} className="btn btn-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#categoryModal"> Update</button> </td>
                                    <td> <button onClick={() => categoryDeleteHandler(category._id)} className="btn btn-danger btn-sm"> Delete</button> </td>
                                </tr>
                            ))
                        :
                        <h3>Loading ........</h3>
                    }
                </tbody>
            </table>
            <div class="modal fade" id="categoryModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Category
                                categoryUpdate={categoryUpdate}
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

export default Categories;