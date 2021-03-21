import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import image1 from '../../assets/images/watch.jpg';
import image2 from '../../assets/images/zoom.jpg';
import { getCategories } from '../../store/actions/categoryAction';
import { getProducts } from '../../store/actions/productAction';
import Carousel from '../Shared/Carousel/Carousel';
import FooterTop from '../Shared/Footer/FooterTop';
import ProductSkeleton from '../Skeleton/ProductSkeleton';
import Brands from './Brands';
import HomeBanner from './HomeBanner';
import HomeBannerCarousel from './HomeBannerCarousel';
import HomeCategory from './HomeCategory';

const Home = () => {
    const [categoriesWithProduct, setCategoriesWithProduct] = useState(null);
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const { categories } = useSelector(state => state.categories);



    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        fetch('https://dynobd-ecommerce.herokuapp.com/api/categories/products')
            .then(res => res.json())
            .then(data => setCategoriesWithProduct(data))
            .catch(error => console.log(error))
    }, [])

    const images = [
        image1,
        image2
    ];


    console.log("categoriesWithProduct", categoriesWithProduct)


    return (
        <>
            <HomeBannerCarousel />
            <HomeCategory
                categories={categories}
            />

            {products ?
                products.length === 0 ?
                    <div className="container">
                        <h1>No Product Found</h1>
                    </div>
                    :
                    <Carousel
                        isInfinite={true}
                        isAutoPlay={false}
                        products={products}
                        title="Featured"
                    />
                :
                <div className="container">
                    <div className="row">
                        {new Array(8).fill('_').map((item, index) => (
                            <div className="col-md-3 mt-3" key={index}>
                                <div style={{ height: '320px' }}>
                                    <ProductSkeleton />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }

            {categoriesWithProduct ?
                categoriesWithProduct.length === 0 ?
                    <h1>No Product Found</h1>
                    :
                    categoriesWithProduct.map(category => (
                        <Carousel
                            key={category._id}
                            isInfinite={true}
                            isAutoPlay={false}
                            products={category.products}
                            title={category.category}
                        />
                    ))
                :
                <div className="container">
                    <div className="row">
                        {new Array(8).fill('_').map((item, index) => (
                            <div className="col-md-3 mt-3" key={index}>
                                <div style={{ height: '320px' }}>
                                    <ProductSkeleton />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            }


            <HomeBanner />
            {/* <HomeCommonSeller
                products={products}
                images={images}
                title="Best Seller"
            />
            <Carousel
                isInfinite={true}
                isAutoPlay={true}
                products={products}
                title="Best Deal"
            /> */}
            {/* <HomeFullBanner /> */}

            {/* <MultiCarousel /> */}
            <Brands />
            <FooterTop />
        </>
    );
};

export default Home;