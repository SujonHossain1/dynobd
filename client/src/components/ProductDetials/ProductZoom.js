import React, { useEffect, useState } from 'react';
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import { MdZoomOutMap } from 'react-icons/md';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const ProductZoom = ({ product }) => {
    const [largeImage, setLargeImage] = useState(product.image1);

    useEffect(() => {
        setLargeImage(product.image1)
    }, [product]);


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 4

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 2
        }
    };

    return (
        <div className="image">
            <div className="image__LargeImg ">
                <TransformWrapper
                    defaultScale={1}
                    defaultPositionX={200}
                    defaultPositionY={100}
                >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                        <>
                            <TransformComponent>
                                <img className="" src={`/${largeImage}`} alt="" />
                            </TransformComponent>
                            <div className="mt-2">
                                <button onClick={resetTransform} className="p-1 m-1 image__zoomBtn"><MdZoomOutMap />&nbsp;Reset</button>
                                <button onClick={zoomOut} className="p-1 m-1 image__zoomBtn"><AiOutlineZoomOut />&nbsp;Zoom Out</button>
                                <button onClick={zoomIn} className="p-1 m-1 image__zoomBtn"><AiOutlineZoomIn />&nbsp;Zoom In</button>
                            </div>
                        </>
                    )}
                </TransformWrapper>
            </div>


            <div className="image__SmallImgs">
                <Carousel
                    responsive={responsive}
                >
                    {product.image1 &&
                        <div onClick={e => setLargeImage(product.image1)} className="image__SmallImg">
                            <img src={`/${product.image1}`} alt="" />
                        </div>
                    }
                    {product.image2 &&
                        <div onClick={e => setLargeImage(product.image2)} className="image__SmallImg">
                            <img src={`/${product.image2}`} alt="" />
                        </div>
                    }
                    {product.image3 &&
                        <div onClick={e => setLargeImage(product.image3)} className="image__SmallImg">
                            <img src={`/${product.image3}`} alt="" />
                        </div>
                    }
                    {product.image4 &&
                        <div onClick={e => setLargeImage(product.image4)} className="image__SmallImg">
                            <img src={`/${product.image4}`} alt="" />
                        </div>
                    }

                </Carousel>
            </div>
        </div>
    );
};

export default ProductZoom;