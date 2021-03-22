import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategories } from '../../store/actions/categoryAction';
import Product from '../Shared/Product/Product';
import ProductSkeleton from '../Skeleton/ProductSkeleton';
import FilterArea from './FilterArea';


const Category = () => {
    const { categories } = useSelector(state => state.categories);
    const [categoryProducts, setCategoryProducts] = useState(null);
    const [subCategoryProducts, setSubCategoryProducts] = useState(null);

    const { catSlug, subCatSlug } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch, catSlug])

    useEffect(() => {
        if (catSlug && !subCatSlug) {
            setCategoryProducts(null);

            fetch(`https://dynobd-ecommerce.herokuapp.com/api/categories/category/${catSlug}`)
                .then(res => res.json())
                .then(data => setCategoryProducts(data))
                .catch(error => console.log(error));
        }

        if (catSlug && subCatSlug) {
            setSubCategoryProducts(null);

            fetch(`https://dynobd-ecommerce.herokuapp.com/api/sub-categories/sub-category/${subCatSlug}`)
                .then(res => res.json())
                .then(data => setSubCategoryProducts(data))
                .catch(error => console.log(error));
        }

    }, [catSlug, subCatSlug])

    console.log('subCategoryProducts', subCategoryProducts)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <FilterArea
                        categories={categories}
                    />
                </div>
                <div className="col-md-9">
                    <div className="row" style={{ marginTop: '25px' }}>
                        {catSlug && !subCatSlug &&
                            categoryProducts ?
                            categoryProducts.products?.length === 0 ?
                                <h2>Product Not found</h2>
                                :
                                categoryProducts.products?.map(product => (
                                    <div className="col-md-4" key={product.key}>
                                        <Product product={product} />
                                    </div>
                                ))
                            :
                            catSlug && !subCatSlug &&
                            <div className="container">
                                <div className="row">
                                    {new Array(6).fill('_').map((item, index) => (
                                        <div className="col-md-4 mt-3" key={index}>
                                            <div style={{ height: '320px' }}>
                                                <ProductSkeleton />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                        {catSlug && subCatSlug &&
                            subCategoryProducts ?
                            subCategoryProducts?.products.length === 0 ?
                                <h2>Product Not found</h2>
                                :
                                subCategoryProducts.products?.map(product => (
                                    <div className="col-md-4" key={product._id}>
                                        <Product product={product} />
                                    </div>
                                ))
                            :
                            catSlug && subCatSlug &&
                            <div className="container">
                                <div className="row">
                                    {new Array(3).fill('_').map((item, index) => (
                                        <div className="col-md-4 mt-3" key={index}>
                                            <div style={{ height: '320px' }}>
                                                <ProductSkeleton />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;