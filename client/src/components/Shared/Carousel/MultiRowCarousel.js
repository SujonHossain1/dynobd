import React from 'react';
import Slider from "react-slick";
import SingleBox from '../Product/SingleBox';
import Title from '../Title/Title';
const MultiRowCarousel = ({ products, title }) => {
  const settings = {
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    speed: 1000,
    rows: 3,
    slidesPerRow: 1,
    autoplaySpeed: 5000,
  };

  return (
    <div className="carousel-sec">
      <Title title={title} />
      <Slider {...settings}>
        {
          products?.map((product) => (
            <SingleBox
            key={product._id}
              product={product}
            />
          ))
        }
      </Slider>
    </div>
  );
};

export default MultiRowCarousel;