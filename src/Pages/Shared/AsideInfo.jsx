import React from 'react';

const AsideInfo = () => {
    return (
        <div className="aside_info_wrapper">
            <button className="aside_close"><i className="bi bi-x-lg"></i></button>
            <div className="aside_logo">
                <a href="/" className="light_logo"><img src="images/logo-light-lg.svg" alt="logo" /></a>
                <a href="/" className="dark_logo"><img src="images/logo-dark-lg.svg" alt="logo" /></a>
            </div >
            <div className="aside_info_inner">
                <p>国家级非物质文化遗产</p>

                <div className="aside_info_inner_box">
                    <h5>联系方式</h5>
                    <p>0519-87100000</p>
                    {/* <p>江苏 溧阳 <br /> 中国</p> */}
                    <p>info@xiaosun.co</p>

                    <p>中国 溧阳</p>
                </div>
                {/* <div className="social_sites">
                    <ul className="d-flex align-items-center justify-content-center">
                        <li><a><i className="bi bi-facebook"></i></a></li>
                        <li><a><i className="bi bi-twitter"></i></a></li>
                        <li><a><i className="bi bi-instagram"></i></a></li>
                        <li><a><i className="bi bi-youtube"></i></a></li>
                    </ul>
                </div> */}
            </div>
        </div >

    );
};

export default AsideInfo;