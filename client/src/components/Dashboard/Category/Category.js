import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import slugify from '../Slugify';

const Category = ({ categoryUpdate, isUpdate }) => {

    const { register, handleSubmit, errors, reset } = useForm();
    const [category, setCategory] = useState({
        _id: '',
        category: '',
        categorySlug: '',
        categoryIcon: '',
        categoryImage: ''
    });

    const [image, setImage] = useState(null);

    const imageHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setCategory((category) => ({
            ...category,
            [name]: value,
        }));
    };

    useEffect(() => {
        setCategory({ ...category, categorySlug: slugify(category.category) })
    }, [category.category]);

    useEffect(() => {
        if (isUpdate) {
            const { _id, category, categoryIcon, categorySlug, categoryImage } = categoryUpdate;
            setCategory({ _id, category, categoryIcon, categorySlug, categoryImage })
        }
    }, [categoryUpdate, isUpdate])


    const handleReset = () => {

        reset({
            category: "",
            categorySlug: "",
            categoryIcon: ""
        })
        setCategory({ category: '' })
    }

    const onSubmit = async (data, event) => {
        event.preventDefault();
        const formData = new FormData();

        if (image) formData.append('image', image);

        for (const key of Object.keys(category)) {
            formData.append(key, category[key]);
        };

        if (isUpdate) {
            fetch(`http://localhost:4000/api/categories/${category._id}`, {
                method: 'PATCH',
                body: formData,
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(data.message);
                    console.log(data);
                })
                .catch(err => {
                    toast.error(data.error);
                    console.log(err)
                });
            console.log(category);

        } else {
            try {
                const res = await fetch('http://localhost:4000/api/categories', {
                    method: 'POST',
                    body: formData,
                });
                const data = await res.json();
                if (res.status === 200) {
                    toast.success(data.message);
                } else {
                    toast.error(data.message);
                }
               
                console.log(data);
            } catch (error) {
                toast.error(error.error);
                console.log("error", error)

            }

        }
    }



    return (
        <>
            <ToastContainer />
            <div className="container bg-light py-5">
                <form className="col-md-7 mx-auto p-4 shadow bg-white rounded " onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="py-2">Add Category</h2>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Category Name *</label>
                        <input
                            name="category"
                            onChange={inputHandler}
                            type="text"
                            className="form-control"
                            defaultValue={category.category}
                            ref={register({
                                required: 'Category Name  is required'
                            })}
                        />
                        {errors.category && <span style={{ color: 'red' }}>{errors.category.message}</span>}
                    </div>


                    <div className="mb-3">
                        <label htmlFor="categoryIcon" className="form-label">Category Icon</label>
                        <input name="categoryIcon" onChange={inputHandler} type="text" className="form-control" id="categoryIcon"
                            defaultValue={category.categoryIcon}
                            ref={register({
                                required: "Category Icon is required",
                            })}
                        />
                        {errors.categoryIcon && <span style={{ color: 'red' }}>{errors.categoryIcon.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Image *  </label>
                        <img style={{ width: '120px' }} src={`http://localhost:4000/${categoryUpdate && categoryUpdate.categoryImage}`} alt="" />
                        <input onChange={imageHandler} accept=".png, .jpeg, .jpg" name="image" className="form-control" type="file"
                        />
                        {errors.image && <span style={{ color: 'red' }}>{errors.image.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Slug" className="form-label">Slug *</label>
                        <input name="categorySlug" defaultValue={slugify(category.category)} onChange={inputHandler} type="text" id="url" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" onClick={handleReset} className="btn btn-warning ms-4">Reset</button>
                </form>
            </div>
        </>
    );
};

export default Category;