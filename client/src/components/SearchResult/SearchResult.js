import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../store/actions/productAction';
import Product from '../Shared/Product/Product';

const SearchResult = () => {
    const [searchProducts, setSearchProducts] = useState('');
    const dispatch = useDispatch();
    let query = useQuery();
    const queryValue = query.get('query');
    const { products } = useSelector(state => state.products);


    useEffect(() => {
        if (queryValue) {
            setSearchProducts('');

            fetch(`/api/products/search/${queryValue}`)
                .then(res => res.json())
                .then(data => {
                    setSearchProducts(data);
                    console.log(data)
                })
                .catch(error => console.log(error))
        } else {
            dispatch(getProducts());
            setSearchProducts([...products]);
        }
    }, [dispatch, queryValue, products]);


    console.log("searchProducts", searchProducts);

    return (
        <div className="container">
            <div className="row">
                {searchProducts ?
                    searchProducts.length === 0 ?
                        <h3 className="py-5 my-5">Product Not Found</h3>
                        :
                        searchProducts.map(product => (
                            <div className="col-md-3 my-3">
                                <Product
                                    key={product._id}
                                    product={product}
                                />
                            </div>
                        ))
                    :
                    <h3>Loading ......</h3>
                }
            </div>
        </div>
    );
};

export default SearchResult;


function useQuery() {
    return new URLSearchParams(useLocation().search);
}