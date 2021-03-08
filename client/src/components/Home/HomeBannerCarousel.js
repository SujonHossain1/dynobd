import React from 'react';
import Slider from "react-slick";
import image1 from '../../assets/images/Slider/5b80297378cf7_thumb900.jpg';
import image2 from '../../assets/images/Slider/5b804e2431db5_thumb900.jpg';
import image3 from '../../assets/images/Slider/5b80a7ae8f6eb_thumb900.jpg';
import image4 from '../../assets/images/Slider/5b85828d6ea8c_thumb900.jpg';
import image5 from '../../assets/images/Slider/e-commerce.jpg';
import image6 from '../../assets/images/Slider/Website Banner Charles Berkeley.jpg';
import image7 from '../../assets/images/Slider/yaki-bags-slider.jpg';

const HomeBannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        // adaptiveHeight: true
    };
    return (
        <div className="mb-5 home-carousel">
            <Slider {...settings}>

                <div>
                    <img className="img-fluid" src={image4} alt="" />
                </div>
                <div>
                    <img className="img-fluid" src={image5} alt="" />
                </div>
                <div>
                    <img className="img-fluid" src={image3} alt="" />
                </div>
                <div>
                    <img className="img-fluid" src={image2} alt="" />
                </div>

                <div>
                    <img className="img-fluid" src={image6} alt="" />
                </div>
                <div>
                    <img className="img-fluid" src={image7} alt="" />
                </div>


            </Slider>
        </div>
    );
};

export default HomeBannerCarousel;