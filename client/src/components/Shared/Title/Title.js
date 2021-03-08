import React from 'react';

const Title = ({ title }) => {
    return (
        <div className="row">
            <div className="col-lg-12 pd-remove">
                <div className="section-top">
                    <h2 className="section-title"> {title} </h2>
                </div>
            </div>
        </div>
    );
};

export default Title;