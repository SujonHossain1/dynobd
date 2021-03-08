import React from 'react';

const ProductSize = ({size, sizeHandler, isAvailable}) => {
    return (
        <div className="product-size-container">
            <h6 className="product-size-title"> Size: </h6>
            <div className="product-size">
                <div className={size === 'small' ? 'size size-active' : 'size'}>
                    <label htmlFor="small"> S </label>
                    <input
                        id="small"
                        type="radio"
                        value="small"
                        checked={size === 'small'}
                        onChange={sizeHandler}
                    />
                </div>
                <div className={size === 'medium' ? 'size size-active' : 'size'}>
                    <label htmlFor="medium"> M </label>
                    <input
                        id="medium"
                        type="radio"
                        value="medium"
                        checked={size === 'medium'}
                        onChange={sizeHandler}
                    />
                </div>

                <div className={size === 'large' ? 'size size-active' : 'size'}>
                    <label htmlFor="large"> L </label>
                    <input
                        id="large"
                        type="radio"
                        value="large"
                        checked={size === 'large'}
                        onChange={sizeHandler}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductSize;