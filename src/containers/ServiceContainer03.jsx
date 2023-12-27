import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import GalleryImg from '../components/GalleryImg';
import Paragraph from '../components/Paragraph';
import PointOrder from '../components/PointOrder';
import PointOrder02 from '../components/PointOrder02';
import PostFooter from '../components/PostFooter';
import RelatedProjects from '../components/ProjectElements/RelatedProjects';
import WidgetTitle from '../components/WidgetTitle';
import PostHeader from './PostHeader';

const ServiceContainer03 = () => {

    return (
        <main className="wrapper">
            <section className="project-details bg-dark-200">
                <div className="container">
                    <div className="gallery_slider">
                        <div className="swiper swiper_gallery">
                            <Swiper
                                modules={[EffectFade, Navigation]}
                                effect="slide"
                                slidesPerView={1}
                                loop={true}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next',
                                }}
                            >
                                <SwiperSlide>
                                    <GalleryImg img='images/portfolio/details/sl-1.jpg' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GalleryImg img='images/portfolio/details/sl-2.jpg' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GalleryImg img='images/portfolio/details/sl-3.jpg' />
                                </SwiperSlide>
                            </Swiper>

                            {/* <!-- Add Buttons --> */}
                            <div className="swiper-navigation">
                                <div className="swiper-button-prev"><i className="bi bi-arrow-left"></i></div>
                                <div className="swiper-button-next"><i className="bi bi-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="sidebar">
                                <div className="service-information">
                                    <PointOrder02 href='/service-details' li1='红木1' li2='红木2' li3='红木3' li4='红木4' li5='红木5' />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-8">
                            <div className="project-details_inner">
                                <div className="post_content">
                                    <PostHeader title='研究红木家具的设计理念' />
                                    <div className="fulltext">
                                        <Paragraph text='研究红木家具的设计理念、结构构造、雕刻工艺等方面的研究。我们致力于传承和发展古代家具的设计理念，并融入现代审美观念，以创新的方式呈现红木家具的精湛工艺。' />

                                        <WidgetTitle title='Project Features' />
                                        <Paragraph text='研究红木家具的设计理念、结构构造、雕刻工艺等方面的研究。我们致力于传承和发展古代家具的设计理念，并融入现代审美观念，以创新的方式呈现红木家具的精湛工艺。' />

                                        <PointOrder li1='研究红木家具的设计理念、结构构造、雕刻工艺等方面的研究。' li2='我们致力于传承和发展古代家具的设计理念，并融入现代审美观念。' li3='以创新的方式呈现红木家具的精湛工艺。' />

                                        <Paragraph text='研究红木家具的设计理念、结构构造、雕刻工艺等方面的研究。我们致力于传承和发展古代家具的设计理念，并融入现代审美观念，以创新的方式呈现红木家具的精湛工艺。' />

                                        <Paragraph text='研究红木家具的设计理念、结构构造、雕刻工艺等方面的研究。我们致力于传承和发展古代家具的设计理念，并融入现代审美观念，以创新的方式呈现红木家具的精湛工艺。' />

                                        <PostFooter />
                                    </div>

                                    {/* <RelatedProjects /> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </main>
    );
};

export default ServiceContainer03;