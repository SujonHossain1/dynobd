import React, { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsCaretRight } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import Carousel from '../Shared/Carousel/Carousel';
import MultiRowCarousel from "../Shared/Carousel/MultiRowCarousel";
import Product from '../Shared/Product/Product';
import Title from '../Shared/Title/Title';
import ProductDetailsSkeleton from '../Skeleton/ProductDetailsSkeleton';
import ProductSkeleton from '../Skeleton/ProductSkeleton';
import ProductView from './ProductView';
import ProductZoom from './ProductZoom';
import Tabs from './Tabs/Tabs';


const ProductDetails = () => {
    const [relatedProducts, setRelatedProducts] = useState('');
    const [product, setProduct] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        setProduct(null);
        fetch(`/api/products/${slug}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error))
    }, [slug]);

    useEffect(() => {
        fetch(`/api/categories/category/${product?.category?.categorySlug}`)
            .then(res => res.json())
            .then(data => setRelatedProducts(data.products))
            .catch(error => console.log(error));
    }, [product, slug]);

    const products = relatedProducts ? relatedProducts?.filter(product => product.url !== slug) : [];

    return (
        <>
            <div className="container">
                <div className="page__header">
                    <AiOutlineHome />
                    <Link to="/">HOME</Link>
                    <BsCaretRight />
                    <Link to={`/category/${product?.category?.categorySlug}`}>{product?.category?.category}</Link>
                    <BsCaretRight />
                    <Link to={`/category/${product?.category?.categorySlug}/${product?.subCategory?.subCategorySlug}`}>{product?.subCategory?.subCategory}</Link>
                    <BsCaretRight />
                    <Link to={`/product/details/${product?.url}`}> {product?.title} </Link>
                </div>
            </div>
            <div className="container ">
                {product ?
                    <>
                        <div className="row">
                            <div className="col-md-6">
                                <ProductZoom product={product} />
                            </div>
                            <div className="col-md-6">
                                <ProductView
                                    product={product}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-9">
                                <Tabs product={product} />
                            </div>
                            <div className="col-md-3">
                                <MultiRowCarousel
                                    products={products}
                                    title="Sale"
                                />
                            </div>
                        </div>
                    </>
                    :
                    <ProductDetailsSkeleton />

                }

                {relatedProducts ?
                    products && products?.length === 0 ?
                        <div className="container">
                            <h2 className="py-2">No Product Found</h2>
                        </div>
                        :
                        products.length <= 3 ?
                            <div className="container">
                                <Title title="Related Products" />
                                <div className="row">
                                    {
                                        products.map(product => (
                                            <div className="col-md-3" key={product._id}>
                                                <Product product={product} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            :
                            <Carousel
                                isInfinite={true}
                                isAutoPlay={false}
                                products={products}
                                title="Related Products"
                            />

                    :
                    <div className="container">
                        <div className="row py-5">
                            {new Array(4).fill('_').map((item, index) => (
                                <div className="col-md-3" style={{ height: '320px' }}>
                                    <ProductSkeleton
                                        key={index}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                }

            </div>
        </>
    );
};

export default ProductDetails;