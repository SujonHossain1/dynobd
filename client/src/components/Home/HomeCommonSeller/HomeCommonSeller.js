import React from 'react';
import Title from '../../Shared/Title/Title';
import CommonSellerBanner from './CommonSellerBanner';
import CommonSellerProduct from './CommonSellerProduct';

const HomeCommonSeller = ({ products, title, images }) => {

    return (
        <section className="home-common-seller">
            <div className="container">
                <Title title={title} />
                <div className="row">
                    <CommonSellerProduct products={products} />
                    <CommonSellerBanner images={images} />
                </div>
            </div>
        </section>
    );
};

export default HomeCommonSeller;