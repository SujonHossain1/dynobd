import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductSkeleton = (props) => {
    return (
        <ContentLoader
            viewBox="0 0 100% 100%"
            height={"100%"}
            width={"100%"}
            backgroundColor={'#dee2e6'}
            foregroundColor={'#eaeaea'}
            {...props}
        >
            <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        </ContentLoader>
    );
};

export default ProductSkeleton;