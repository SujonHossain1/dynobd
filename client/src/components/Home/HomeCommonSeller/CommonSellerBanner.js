import React from 'react';

const CommonSellerBanner = ({ images }) => {
    return (
        <div className="col-md-3">
            {
                images.map((image, index) => (
                    <figure className="mb-2" key={index}>
                        <img src={image} alt="" />
                    </figure>
                ))
            }
        </div>
    );
};

export default CommonSellerBanner;