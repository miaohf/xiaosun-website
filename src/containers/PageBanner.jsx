import React from 'react';

const PageBanner = (props) => {
    return (
        <>
            <div className="page_header">
                <div className="page_header_inner">
                    <div className="container">
                        {/* <div className="page_header_content d-flex align-items-center justify-content-between"> */}
                        <div className="page_header_content">
                            <h2 className="heading">{props.title}</h2>
                            <ul className="breadcrumb d-flex align-items-center">
                                <li><a href="/">Home</a></li>
                                {/* <li><a href="#">{props.pageTitle}</a></li> */}
                                <li className="active">{props.activePage}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageBanner;