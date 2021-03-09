import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { getAllSubCategories } from '../../../store/actions/subCategoryAction';
import SubCategory from './SubCategory';

const SubCategories = () => {
    const { allSubCategories } = useSelector(state => state.subCategories);
    const [subCategoryUpdate, setSubCategoryUpdate] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const dispatch = useDispatch();

    const categoryUpdateHandler = (category) => {
        setSubCategoryUpdate(category);
        setIsUpdate(true);
    }

    console.log(allSubCategories)

    useEffect(() => {
        dispatch(getAllSubCategories())
    }, [dispatch, isDelete, isUpdate]);

    const categoryDeleteHandler = (subCatId) => {
        const confirm = window.confirm('Are you sure you want to delete');
        if (confirm) {
            fetch(`/api/sub-categories/${subCatId}/sub-category`, {
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
                        <th scope="col"> Image </th>
                        <th scope="col"> Update </th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allSubCategories ?
                        allSubCategories.length === 0 ?
                            <h1>No Sub Category Found</h1>
                            :
                            allSubCategories.map(subCat => (
                                <tr key={subCat._id}>
                                    <td> {subCat.subCategory} </td>
                                    <td> <img className="img-fluid" style={{ width: '80px' }} src={`/${subCat.subCategoryImage}`} alt="" /> </td>
                                    <td> <button onClick={() => categoryUpdateHandler(subCat)} className="btn btn-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#categoryModal"> Update</button> </td>
                                    <td> <button onClick={() => categoryDeleteHandler(subCat._id)} className="btn btn-danger btn-sm"> Delete</button> </td>
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
                            <SubCategory
                                subCategoryUpdate={subCategoryUpdate}
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

export default SubCategories;