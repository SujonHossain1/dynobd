import React, { useState } from 'react';
import Comments from './Comments';
import Description from './Description';
import Specification from './Specification';
import TabsRoutes from './TabsRoutes';

const Tabs = ({product}) => {
    const [tabsRoute, setTabsRoute] = useState('specification');

    const tabsRouteHanlder = (event) => {
        const { value } = event.target;
        setTabsRoute(value);
    };

    return (
        <div className="row product-details-section">
            <div className="col-md-12">
                <div className="product-details-tab">
                    <TabsRoutes
                        tabsRoute={tabsRoute}
                        tabsRouteHanlder={tabsRouteHanlder}
                    />
                    <div className="tab-content-wrapper">
                        {tabsRoute === 'specification' && <Specification product={product} />}
                        {tabsRoute === 'description' && <Description product={product} />}
                        {tabsRoute === 'reviews' && <h1>Helo</h1> }
                        {tabsRoute === 'comments' && <Comments />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;