import React, { useState } from 'react';
import ProductAdd from './ProductAdd';
import ProductInfo from './ProductInfo';
import ProductShare from './ProductShare';
import ProductSize from './ProductSize';



const ProductView = ({ product }) => {
    const [size, setSize] = useState('small');
    const sizeHandler = (event) => {
        const { value } = event.target;
        setSize(value);
    }

    return (
        <div className="product-info">
            <ProductInfo
                product={product}
            />
            <ProductSize
                size={size}
                product={product}
                sizeHandler={sizeHandler}
            />
            <ProductAdd
                product={product}
            />
            <ProductShare
                product={product}
            />

        </div>
    );
};

export default ProductView;