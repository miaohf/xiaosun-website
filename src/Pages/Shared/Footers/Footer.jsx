import $ from 'jquery';
import React, { useEffect } from 'react';
import SectionGridLines from '../../../components/SectionGridLines';

const Footer = () => {
    //  

    useEffect(() => {
        // Totop Button
        $('.totop a').on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, '300');
        });

        // Hide header on scroll down
        const nav = document.querySelector(".header");
        const scrollUp = "top-up";
        let lastScroll = 800;

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 800) {
                nav.classList.remove(scrollUp);
                $('.totop').removeClass('show');
                return;
            }

            if (currentScroll > lastScroll) {
                // down
                nav.classList.add(scrollUp);
                $('.totop').addClass('show');

            } else if (currentScroll < lastScroll) {
                // up
                nav.classList.remove(scrollUp);
                $('.totop').removeClass('show');
            }
            lastScroll = currentScroll;
        });

    }, []);
    return (
        <>
            <footer className="footer bg-dark-00 me-1 ms-1">
                <div className="footer_inner bg-black">
                    <div className="container">
                        <div className="row align-items-end">
                            {/* <div className="col-lg-4 col-md-2 col-sm-2">
                                <div className="section-header">
                                    <h2>Contact</h2>
                                </div>
                            </div> */}
                            <div className="col-lg-5 col-md-5 col-sm-5">
                                <div className="communication">
                                    <div className="info_body me-2 ms-2"
                                    >
                                        <h6>官网地址</h6>
                                        <h5>www.hongmuyang.cn</h5>
                                        <h6>电子邮箱</h6>
                                        <h5>info@hongmuyang.cn</h5>
                                        <h6>联系电话</h6>
                                        <h5>0519-87100000</h5>
                                        <h6>详细地址</h6>
                                        <h5>中国溧阳</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-5">
                                <div className="footer_elements d-flex align-items-center justify-content-end">
                                    <div className="footer_elements_inner me-2 ms-2">
                                        <div className="footer_logo"
                                        >
                                            {/* <a href="/" className="light_logo"><img src="" alt="logo" /></a> */}
                                        </div>
                                        <div className="footer_social">
                                            <ul className="social_list">
                                                <li className="wechat"
                                                ><a><i className="bi bi-wechat"></i></a></li>
                                                {/* <li className="twitter"
                                                ><a><i className="bi bi-twitter"></i></a></li>
                                                <li className="instagram"
                                                ><a><i className="bi bi-instagram"></i></a></li>
                                                <li className="youbetube"><a><i className="bi bi-youtube"></i></a></li> */}
                                            </ul>
                                        </div>
                                        <div className="terms_condition">
                                            <ul>
                                                <li><a>Terms</a></li>
                                                <li><a>Condition</a></li>
                                                <li><a>Policy</a></li>
                                            </ul>
                                        </div>
                                        <div className="copyright"
                                        >
                                            <p>江苏工美红木文化艺术研究所 2023. 版权所有</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <SectionGridLines />
                </div>
            </footer >

            <div className="totop">
                <a href="#">UP</a>
            </div>
        </>
    );
};

export default Footer;