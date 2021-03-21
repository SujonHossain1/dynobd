import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import slugify from '../Slugify';

const SubCategory = ({ subCategoryUpdate, isUpdate }) => {
    const { register, handleSubmit, errors, reset } = useForm();
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState(null);
    const [subCategory, setSubCategory] = useState({
        category: '',
        subCategory: '',
        subCategorySlug: '',
        subCategoryImage: ''
    });

    const { category, subCategorySlug } = subCategory;
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setSubCategory((subCategory) => ({
            ...subCategory,
            [name]: value,
        }));
    };

    useEffect(() => {
        setSubCategory({ ...subCategory, subCategorySlug: slugify(subCategory.subCategory) })
    }, [subCategory.subCategory]);


    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }


    useEffect(() => {
        fetch('https://dynobd-ecommerce.herokuapp.com/api/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));

    }, []);

    const handleReset = () => {
        reset({
            category: '',
            subCategory: '',
            subCategorySlug: '',
        });
        setSubCategory({ subCategory: '' })
    }


    useEffect(() => {
        if (isUpdate) {
            const { _id, subCategory, subCategoryImage, subCategorySlug, } = subCategoryUpdate;
            setSubCategory({ _id, subCategory, subCategoryImage, subCategorySlug })
        }
    }, [subCategoryUpdate, isUpdate])

    const onSubmit = (data, event) => {
        event.preventDefault();

        const formData = new FormData();
        if (image) formData.append('image', image);

        for (const key of Object.keys(subCategory)) {
            formData.set(key, subCategory[key]);
            console.log(key, subCategory[key]);
        }

        if (isUpdate) {
            console.log('Yes Update', subCategory);

        } else {
            fetch(`https://dynobd-ecommerce.herokuapp.com/api/sub-categories/${subCategory.category}/category`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success(data.message);
                    handleReset();
                })
                .catch(err => {
                    console.error(err);
                    toast.error(data.error)
                });
        }

    }

    return (
        <div className="container bg-light py-5">
            <ToastContainer />
            <form className="col-md-7 mx-auto p-4 shadow bg-white rounded " onSubmit={handleSubmit(onSubmit)}>
                <h2 className="py-2">Add SubCategory</h2>
                <div className="mb-3">
                    <label htmlFor="subCategory" className="form-label">Product Category *</label>
                    <select
                        className="form-select"
                        name="category"
                        onChange={inputHandler}
                        ref={register({
                            required: ' Sub Category Name is required'
                        })}
                    >
                        <option value="">Choose Category</option>
                        {categories.map(category => (
                            <option
                                value={category._id}
                                key={category._id}
                            >
                                {category.category}
                            </option>
                        ))}
                    </select>
                    {errors.category && <span style={{ color: 'red' }}>{errors.category.message}</span>}
                </div>

                <div className="mb-3">
                    <label htmlFor="" className="form-label">Sub Category Name</label>
                    <input
                        name="subCategory"
                        onChange={inputHandler}
                        type="text"
                        className="form-control"
                        ref={register({
                            required: 'Product subCategory is required'
                        })}
                    />
                    {errors.subCategory && <span style={{ color: 'red' }}>{errors.subCategory.message}</span>}
                </div>


                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Image * </label>
                    <input onChange={handleImage} accept=".png, .jpeg, .jpg" name="image" className="form-control" type="file" filename="about.jpg"
                        ref={register({
                            required: 'Sub Category  Image is required'
                        })}
                    />
                    {errors.image && <span style={{ color: 'red' }}>{errors.image.message}</span>}
                </div>


                <div className="mb-3">
                    <label htmlFor="url" className="form-label">Sub Category URL *</label>
                    <input name="url" defaultValue={slugify(subCategory.subCategory)} onChange={inputHandler} type="text" id="url" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={handleReset} type="button" className="btn btn-warning ms-4">Reset</button>
            </form>
        </div>
    );
};

export default SubCategory;