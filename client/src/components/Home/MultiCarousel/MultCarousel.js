import React from 'react';
import { useSelector } from 'react-redux';
import MultiRowCarousel from '../../Shared/Carousel/MultiRowCarousel';

const MultiCarousel = () => {
    const { products } = useSelector(state => state.products);

    return (
        <div className="container my-4 multi-carousel">
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <div className="p-2">
                        <MultiRowCarousel
                            products={products}
                            title="Hot"
                        />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="p-2">
                        <MultiRowCarousel
                            products={products}
                            title="New"
                        />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="p-2">
                        <MultiRowCarousel
                            products={products}
                            title="Trending"
                        />
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="p-2">
                        <MultiRowCarousel
                            products={products}
                            title="Sale"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiCarousel;