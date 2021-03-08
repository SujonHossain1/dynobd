import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import brand1 from '../../assets/images/brands/1563165366brand-1.png';
import brand2 from '../../assets/images/brands/1563165393brand-3.png';
import brand3 from '../../assets/images/brands/1563165411brand-2.png';
import Title from '../Shared/Title/Title';

const Brands = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const brands = [brand1, brand2, brand3, brand1, brand2, brand3];


    return (
        <div className="container">
            <Title title={"Brands"} />
            <Slider {...settings}>
                {
                    brands.map(brand => (
                        <div key={brand._id}>
                            <Link to='/'>
                                <img className="img-fluid" src={brand} alt="" style={{ padding: '5px 25px', display: 'block' }} />
                            </Link>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Brands;