import React from 'react';
import Slider from 'react-slick';
import Product from '../Product/Product';
import Title from '../Title/Title';

const Carousel = ({ isInfinite, isAutoPlay, products, title }) => {
	var settings = {
		dots: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className='container'>
			{products.length > 0 ? <Title title={title} /> : ''}

			<Slider {...settings}>
				{products &&
					products?.map((product) => (
						<Product key={product.id} product={product} />
					))}
			</Slider>
		</div>
	);
};

export default Carousel;
