
import React, { useState, useEffect } from 'react';
import { EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../../components/SliderElements/SliderCard";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination } from 'swiper';

const Sliders = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const SliderCardData = [
    {
      id: "1",
      pc_bg_image: "/images/slider/1.jpg",
      mobile_bg_image: "/images/slider/m1.jpg",
    },
    {
      id: "2",
      pc_bg_image: "/images/slider/2.jpg",
      mobile_bg_image: "/images/slider/m2.jpg",
    },
    {
      id: "3",
      pc_bg_image: "/images/slider/3.jpg",
      mobile_bg_image: "/images/slider/m3.jpg",
    },
    {
      id: "4",
      pc_bg_image: "/images/slider/4.jpg",
      mobile_bg_image: "/images/slider/m4.jpg",
    },
    {
      id: "5",
      pc_bg_image: "/images/slider/5.jpg",
      mobile_bg_image: "/images/slider/m5.jpg",
    },
  ];


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="theme_slider bg-black">
      <div className="container">
        <div className="swiper swiper_theme_slider" data-swiper-autoplay="2000">
          <Swiper
            modules={[Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            {SliderCardData.map((data) => (
              <SwiperSlide key={data.id}>
                <SliderCard bgImage={windowWidth >= 768 ? data.pc_bg_image : data.mobile_bg_image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Sliders;



