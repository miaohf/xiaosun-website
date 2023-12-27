import React from 'react';

const SliderCard03 = (props) => {
    return (
        <div className="swiper-slide">
            <div className="slider" style={{ backgroundImage: `url(${props.bgImg})` }}>
                <div className="container">
                    <div className="slide_content">
                        <div className="slide_content_wrapper mb-0 h-auto">
                            <div className="slide_content_inner">
                                <h4><a href="/project-details" className="text-white text-uppercase">{props.title}</a></h4>
                                <div className="details_link">
                                    <a href="/about">
                                        <span className="link_text">Mrittik Architecture Details - </span>
                                        <span className="link_icon">Click Here</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderCard03;