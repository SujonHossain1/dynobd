import React from 'react';

const TabsRoutes = ({ tabsRoute, tabsRouteHanlder }) => {
    return (
        <div className="tabs-container">
            <div className={tabsRoute === 'specification' ? 'tabs-item tab-active' : 'tabs-item'}>
                <label htmlFor="specification"> Specification </label>
                <input
                    id="specification"
                    type="radio"
                    value="specification"
                    checked={tabsRoute === 'specification'}
                    onChange={tabsRouteHanlder}
                />
            </div>
            <div className={tabsRoute === 'description' ? 'tabs-item tab-active' : 'tabs-item'}>
                <label htmlFor="description"> Description </label>
                <input
                    id="description"
                    type="radio"
                    value="description"
                    checked={tabsRoute === 'description'}
                    onChange={tabsRouteHanlder}
                />
            </div>
            <div className={tabsRoute === 'reviews' ? 'tabs-item tab-active' : 'tabs-item'}>
                <label htmlFor="reviews"> Reviews(0) </label>
                <input
                    id="reviews"
                    type="radio"
                    value="reviews"
                    checked={tabsRoute === 'reviews'}
                    onChange={tabsRouteHanlder}
                />
            </div>
            <div className={tabsRoute === 'comments' ? 'tabs-item tab-active' : 'tabs-item'}>
                <label htmlFor="comments"> Comments(0) </label>
                <input
                    id="comments"
                    type="radio"
                    value="comments"
                    checked={tabsRoute === 'comments'}
                    onChange={tabsRouteHanlder}
                />
            </div>
        </div>
    );
};

export default TabsRoutes;