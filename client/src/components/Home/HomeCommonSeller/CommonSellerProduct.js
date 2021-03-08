import React from 'react';
import Product from '../../Shared/Product/Product';

const CommonSellerProduct = ({ products }) => {
    return (
        <div className="col-md-9">
            <div className="row g-1">
                {
                    products.map(product =>
                        <div className="col-6 col-sm-6 col-md-4 mt-1" key={product.id}>
                            <Product
                                product={product}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CommonSellerProduct;