import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/actions/categoryAction';
import { getProducts } from '../../store/actions/productAction';
import { getAllSubCategories } from '../../store/actions/subCategoryAction';


const Home = () => {
    const { categories } = useSelector((state) => state.categories);
    const { products } = useSelector((state) => state.products);
    const { allSubCategories } = useSelector((state) => state.subCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getAllSubCategories());
        dispatch(getProducts());
    }, [dispatch]);

    console.log("products", products);


    return (
        <div id='transaction-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='deposit box'>
                            <h5>Categories</h5>
                            <h2>
                                <CountUp
                                    start={0}
                                    end={categories?.length || 0}
                                    duration={2.5}
                                    separator=','
                                />
                            </h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='withdraw box'>
                            <h5>Sub Categories</h5>
                            <h2>
                                <CountUp
                                    start={0}
                                    end={allSubCategories?.length || 0}
                                    duration={2.5}
                                    separator=','
                                />
                            </h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='balance box'>
                            <h5>Products</h5>
                            <h2>
                                <CountUp
                                    start={0}
                                    end={products && products.length}
                                    duration={2.5}
                                    separator=','
                                />
                            </h2>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='orders box'>
                            <h5>Customers</h5>
                            <h2>
                                <CountUp
                                    start={0}
                                    end={0}
                                    duration={2.5}
                                    separator=','
                                />
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;