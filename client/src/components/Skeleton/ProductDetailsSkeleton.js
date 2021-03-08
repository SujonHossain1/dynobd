import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductDetailsSkeleton = (props) => {
    return (
        <ContentLoader
            viewBox="0 0 1300 600"
            backgroundColor={'#dee2e6'}
            foregroundColor={'#eaeaea'}
            {...props}>
            <rect x="120" y="15" rx="20" ry="20" width="500" height="500" />
            <rect x="220" y="540" rx="5" ry="5" width="45" height="45" />
            <rect x="280" y="540" rx="5" ry="5" width="45" height="45" />
            <rect x="340" y="540" rx="5" ry="5" width="45" height="45" />
            <rect x="650" y="17" rx="10" ry="10" width="420" height="33" />
            <rect x="650" y="71" rx="10" ry="10" width="315" height="33" />
            <rect x="650" y="125" rx="10" ry="10" width="233" height="20" />
            <rect x="650" y="216" rx="5" ry="5" width="195" height="13" />
            <rect x="650" y="251" rx="5" ry="5" width="195" height="13" />
            <rect x="650" y="311" rx="8" ry="8" width="130" height="38" />
            <rect x="800" y="311" rx="8" ry="8" width="130" height="38" />
            <rect x="800" y="311" rx="8" ry="8" width="130" height="38" />
            <rect x="650" y="370" rx="10" ry="10" width="315" height="33" />
            <rect x="650" y="420" rx="10" ry="10" width="315" height="33" />
            <rect x="650" y="480" rx="10" ry="10" width="315" height="33" />
        </ContentLoader>
    );
};

export default ProductDetailsSkeleton;