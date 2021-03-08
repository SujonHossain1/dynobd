import React from 'react';
import { Link } from 'react-router-dom';
import BoxSkeleton from '../Skeleton/BoxSkeleton';

const HomeCategory = ({ categories }) => {
    console.log(categories)
    return (
        <section className="home-category mb-3">
            <div className="container">
                <div className="row">
                    {
                        categories ?
                            categories.length === 0 ?
                                <h1>No Category Found</h1>
                                :
                                categories?.map((category) => (
                                    <div className="col-xl-2 col-lg-3 col-md-4 col-6 sc-common-padding" key={category?._id}>
                                        <Link to={`/category/${category?.categorySlug}`} className="single-category">
                                            <div className="left">
                                                <h5 className="title"> {category?.category} </h5>
                                                <p className="count"> {category?.products.length} Item(s) </p>
                                            </div>
                                            <div className="right">
                                                <img src={`http://localhost:4000/${category?.categoryImage}`} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                ))

                            :
                            Array(12).fill("i").map((item, index) => (
                                <div className="col-xl-2 col-lg-3 col-md-4 col-6 mt-3" style={{ height: '100px' }} key={index}>
                                    <BoxSkeleton />
                                </div>
                            ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeCategory;