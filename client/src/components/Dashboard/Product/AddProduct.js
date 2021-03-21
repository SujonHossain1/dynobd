import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { getCategories } from '../../../store/actions/categoryAction';
import { getSubCategories } from '../../../store/actions/subCategoryAction';
import slugify from '../Slugify';
import CkEditor from './CkEditor';
import Tables from './Tables';

const AddProduct = ({ updateProduct, isUpdate }) => {
    const { categories } = useSelector(state => state.categories);
    const { subCategories } = useSelector(state => state.subCategories);
    const [selectCategory, setSelectCategory] = useState({});
    const [selectSubCategory, setSelectSubCategory] = useState({});
    const dispatch = useDispatch();

    const [ckEditorContent, setCkEditorContent] = useState("");
    const [errorMsg, setErrorMsg] = useState('');
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);

    const { register, handleSubmit, reset, errors } = useForm();
    const [product, setProduct] = useState({
        _id: '',
        title: '',
        url: '',
        category: '',
        subCategory: '',
        shortDescription: "",
        stock: '',
        previousPrice: '',
        price: '',
        productKey: '',
        alt: ''
    });

    const [inputFields, setInputsFields] = useState([
        {
            index: Math.random(),
            heading: '',
            tableData: [
                { index: Math.random(), name: '', value: '' },
                { index: Math.random(), name: '', value: '' },
            ]
        }
    ]);

    useEffect(() => {
        if (isUpdate) {
            const { _id, category, subCategory, title, description, previousPrice, price, stock, productKey, shortDescription, alt, url } = updateProduct;
            setProduct({ _id, category, subCategory, title, previousPrice, price, stock, productKey, shortDescription, alt, url });
            const cat = categories.find(item => item._id === category);
            setSelectCategory(cat);
            const subCat = subCategories.find(item => item._id === subCategory);
            setSelectSubCategory(subCat);


            setCkEditorContent(description);
            if (updateProduct.specification) {
                setInputsFields(updateProduct.specification)
            }

        }
    }, [isUpdate, updateProduct, categories, subCategories]);




    const inputHandler = (e) => {
        const { name, value } = e.target;
        setProduct((product) => ({
            ...product,
            [name]: value,
        }));
    };

    useEffect(() => {
        setProduct({ ...product, url: slugify(product.title) })
    }, [product.title]);

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getSubCategories(product.category))
    }, [dispatch, product.category]);


    const imageHandler1 = (e) => {
        const file = e.target.files[0];
        setImage1(file);
    };
    const imageHandler2 = (e) => {
        const file = e.target.files[0];
        setImage2(file);
    }
    const imageHandler3 = (e) => {
        const file = e.target.files[0];
        setImage3(file);
    }
    const imageHandler4 = (e) => {
        const file = e.target.files[0];
        setImage4(file);
    }

    const handleReset = () => {
        reset({
            category: "",
            categorySlug: "",
            title: "",
            shortDescription: "",
            description: '',
            stock: '',
            previousPrice: '',
            price: '',
            productKey: '',
            alt: ''
        })
        setProduct({ title: '' });
        setInputsFields([
            {
                index: Math.random(),
                heading: '',
                tableData: [
                    { index: Math.random(), name: '', value: '' },
                    { index: Math.random(), name: '', value: '' },
                ]
            }
        ])
    }

    const onSubmit = (data, event) => {
        event.preventDefault();

        const formData = new FormData();

        if (image1) formData.append('image1', image1);
        if (image2) formData.append('image2', image2);
        if (image3) formData.append('image3', image3);
        if (image4) formData.append('image4', image4);


        for (const key of Object.keys(product)) {
            formData.set(key, product[key]);
        };

        formData.append('specification', JSON.stringify(inputFields));
        formData.append('description', ckEditorContent);



        const { category, subCategory } = data;

        if (isUpdate) {
            fetch(`https://dynobd-ecommerce.herokuapp.com/api/products/${product.category}/${product.subCategory}/update-product`, {
                method: 'PATCH',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    toast.success(data.message);
                    console.log(data)
                })
                .catch(err => {
                    setErrorMsg(err.message);
                    toast.error(data.error);
                });
        } else {
            if (category && subCategory) {
                fetch(`https://dynobd-ecommerce.herokuapp.com/api/products/${product.category}/${product.subCategory}/add-product`, {
                    method: 'POST',
                    body: formData,
                })
                    .then(response => response.json())
                    .then(data => {
                        // handleReset();
                        toast.success(data.message);
                        console.log(data)
                    })
                    .catch(err => {
                        setErrorMsg(err.message);
                        toast.error(data.error);
                    });
            }
        }


    }


    return (
        <>
            <ToastContainer />
            <div className="container bg-light py-5">
                <form className="col-md-10 mx-auto p-4 shadow bg-white rounded " onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="py-2"> {isUpdate ? 'Update Product' : 'Add Product'} </h2>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Product Category *</label>
                        <select
                            className="form-select"
                            name="category"
                            onChange={inputHandler}
                            ref={register({
                                required: 'Product Category is required'
                            })}
                        >
                            <option value={selectCategory._id ? selectCategory._id : ''}>
                                {selectCategory.category ? selectCategory.category : 'Choose Category'}
                            </option>
                            {categories?.map(category => (
                                <option
                                    value={category?._id}
                                    key={category?._id}
                                >
                                    {category?.category}
                                </option>
                            ))}
                        </select>
                        {errors.category && <span style={{ color: 'red' }}>{errors.category.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subCategory" className="form-label">Product Sub Category *</label>
                        <select
                            className="form-select"
                            name="subCategory"
                            onChange={inputHandler}
                            ref={register({
                                required: 'Product Sub Category is required'
                            })}
                        >
                            <option value={selectSubCategory && selectSubCategory._id ? selectSubCategory._id : ""}>
                                {selectSubCategory && selectSubCategory.subCategory ? selectSubCategory.subCategory : 'Choose Sub Category'}
                            </option>
                            {subCategories?.map(subCat => (
                                <option
                                    value={subCat._id}
                                    key={subCat._id}
                                >
                                    {subCat.subCategory}
                                </option>
                            ))}
                        </select>
                        {errors.subCategory && <span style={{ color: 'red' }}>{errors.subCategory.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title *</label>
                        <input
                            name="title"
                            onChange={inputHandler}
                            type="text"
                            className="form-control"
                            defaultValue={product.title}
                            ref={register({
                                required: 'Product Title is required'
                            })}
                        />
                        {errors.title && <span style={{ color: 'red' }}>{errors.title.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">*Stock</label>
                        <input name="stock" onChange={inputHandler} type="number" id="stock" className="form-control"
                            defaultValue={product.stock}
                            ref={register({
                                required: "Product Stock is required",
                            })}
                        />
                        {errors.stock && <span style={{ color: 'red' }}>{errors.stock.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="previousPrice" className="form-label">Previous Price</label>
                        <input
                            name="previousPrice"
                            onChange={inputHandler}
                            type="number"
                            defaultValue={product.previousPrice}
                            className="form-control"
                            id="previousPrice"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">* Price</label>
                        <input
                            name="price"
                            onChange={inputHandler}
                            type="number"
                            className="form-control"
                            id="price"
                            defaultValue={product.price}
                            ref={register({
                                required: "Product Price is required",
                            })}
                        />
                        {errors.price && <span style={{ color: 'red' }}>{errors.price.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Image 1 </label>
                        <img className="img-fluid" style={{ width: '100px' }} src={`https://dynobd-ecommerce.herokuapp.com/${updateProduct?.image1}`} alt="" />
                        <input onChange={imageHandler1} accept=".png, .jpeg, .jpg" name="image1" className="form-control" type="file" filename="about.jpg" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Image 2 </label>
                        <img className="img-fluid" style={{ width: '100px' }} src={`https://dynobd-ecommerce.herokuapp.com/${updateProduct?.image2}`} alt="" />
                        <input onChange={imageHandler2} accept=".png, .jpeg, .jpg" name="image2" className="form-control" type="file" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Image 3 </label>
                        <img className="img-fluid" style={{ width: '100px' }} src={`https://dynobd-ecommerce.herokuapp.com/${updateProduct?.image3}`} alt="" />
                        <input onChange={imageHandler3} accept=".png, .jpeg, .jpg" name="image2" className="form-control" type="file" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Image 4 </label>
                        <img className="img-fluid" style={{ width: '100px' }} src={`https://dynobd-ecommerce.herokuapp.com/${updateProduct?.image4}`} alt="" />
                        <input onChange={imageHandler4} accept=".png, .jpeg, .jpg" name="image2" className="form-control" type="file" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="productKey" className="form-label">Product Key</label>
                        <input
                            name="productKey"
                            onChange={inputHandler}
                            type="text"
                            id="productKey"
                            className="form-control"
                            defaultValue={product.productKey}
                            ref={register({
                                required: 'Product key is required'
                            })}
                        />
                        {errors.productKey && <span style={{ color: 'red' }}>{errors.productKey.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alt" className="form-label">Alt</label>
                        <input
                            name="alt"
                            onChange={inputHandler}
                            type="text"
                            id="alt"
                            defaultValue={product.alt}
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="url" className="form-label">*Url</label>
                        <input name="url" defaultValue={slugify(product.title)} onChange={inputHandler} type="text" id="url" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="shortDescription" className="form-label">Short Description</label>
                        <textarea
                            onChange={inputHandler}
                            name="shortDescription"
                            className="form-control"
                            id="shortDescription"
                            defaultValue={product.shortDescription}
                            rows="3">
                        </textarea>
                    </div>
                    <CkEditor
                        setCkEditorContent={setCkEditorContent}
                        ckEditorContent={ckEditorContent}
                    />
                    <Tables
                        inputFields={inputFields}
                        setInputsFields={setInputsFields}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>


            </div>
        </>
    );
};

export default AddProduct;