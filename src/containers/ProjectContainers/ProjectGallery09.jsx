import React, { useEffect } from 'react';
import $ from 'jquery';
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PageHeder from "../../components/PageHeder";
import Paragraph from "../../components/Paragraph";
import ProjectCard09 from "../../components/ProjectElements/ProjectCard09";
import SectionGridLines from "../../components/SectionGridLines";
import SectionHeader from "../../components/SectionHeader";

const ProjectGallery09 = () => {
  const ProductData = [
    {
      id: "1",
      imgs: ["images/portfolio/packery/1/1.jpg"],
      title: "双月洞对料吉字花格架子床",
      text: "该作品使用2042个榫卯",
      tag: "beds",
    },
    {
      id: "2",
      imgs: ["images/portfolio/packery/2/1.jpg"],
      title: "杨氏第六代素圈椅套组",
      text: "材料：黑黄檀 Dalbergia cultrata Benth.）",
      tag: "zuhe",
    },
    {
      id: "3",
      imgs: ["images/portfolio/packery/3/1.jpg"],
      title: "杨氏第七代素圈椅套组",
      text: "材料：东非黑黄檀 Dalbergi a melanoxylon Guill. & Perr.",
      tag: "zuhe",
    },
    {
      id: "4",
      imgs: ["images/portfolio/packery/4/1.jpg"],
      title: "仿竹节圈椅",
      text: "杨金荣老师自创作品",
      tag: "chairs",
    },
    {
      id: "5",
      imgs: ["images/portfolio/packery/5/1.jpg"],
      title: "镂空雕麒麟背交椅",
      text: "吴学忠大师作品",
      tag: "chairs",
    },
    {
      id: "6",
      imgs: ["images/portfolio/packery/6/1.jpg"],
      title: "同图案双面镂空雕吉祥花鸟屏风",
      text: ".",
      tag: "pingfeng",
    },
    {
      id: "7",
      imgs: ["images/portfolio/packery/7/1.jpg"],
      title: "镂空绞藤纹茶橱",
      text: ".",
      tag: "chu",
    },
    {
      id: "8",
      imgs: ["images/portfolio/packery/8/1.jpg"],
      title: "五足圆花架",
      text: ".",
      tag: "huajia",
    },
    {
      id: "9",
      imgs: ["images/portfolio/packery/9/1.jpg"],
      title: "禹门洞高圆花架",
      text: ".",
      tag: "huajia",
    },
    {
      id: "10",
      imgs: ["images/portfolio/packery/10/1.jpg"],
      title: "雕绳纹琴桌",
      text: ".",
      tag: "tables",
    },
    {
      id: "11",
      imgs: ["images/portfolio/packery/11/1.jpg"],
      title: "云纹插角绷藤面茶台",
      text: ".",
      tag: "tables",
    },
    {
      id: "12",
      imgs: ["images/portfolio/packery/12/1.jpg"],
      title: "一腿三牙裹足条案",
      text: ".",
      tag: "tables",
    },
    {
      id: "13",
      imgs: ["images/portfolio/packery/13/1.jpg"],
      title: "云纹小条凳",
      text: ".",
      tag: "dengzi",
    },
    {
      id: "14",
      imgs: ["images/portfolio/packery/14/1.jpg"],
      title: "东非黑黄檀都承盘",
      text: ".",
      tag: "chengpan",
    },
    {
      id: "15",
      imgs: ["images/portfolio/packery/15/1.jpg"],
      title: "汉风小茶橱",
      text: ".",
      tag: "chu",
    },
    {
      id: "16",
      imgs: ["images/portfolio/packery/16/1.jpg"],
      title: "凹线条禹门洞鼓型圆桌凳",
      text: ".",
      tag: "zuhe",
    },
  ];

  return (
    
      <section className="projects packery" >
      <SectionGridLines />
      <div className="large_font">
        <SectionHeader title="Gallery" />
      </div>
      <div className="container">
        <div className="section-header text-center has_line">
          {/* <PageHeder className="text-white" title="主要藏品" /> */}
          <div className="section-header text-center has_line">
          <h3 className="text-white">主要藏品</h3>
        </div>
          <div className="section-desc row align-items-center justify-content-center">
            <div className="col-lg-6 text-end">
              <Paragraph text="传承和发展，是两个相悖的方向，需要在两个不同的方向之间平衡和博奕。传承的是智慧和精髓，而不是简单的生搬硬套。发展是让这门手艺在传统的基础上，得到升华，而不是简单的产业化、规模化、商业化。" />
            </div>
            <div className="col-lg-6 text-start">
              <Paragraph text="精细木作技艺的发展，需要匠人严格遵守选材、工艺、造型的基本标准，追求极致的审美原则，并在个人品德、审美和艺术造诡上有着很高的要求，严格遵循实用家具、工艺家具和艺术品家具的分级制度。" />
            </div>
          </div>
        </div>

        <div className="swiper swiper_gallery_2">
          <Swiper
            modules={[Navigation, EffectFade]}
            effect="slide"
            breakpoints={{
              768: {
                width: 768,
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            zoom={{ toggle: true }}
          >
            {ProductData.map((data) => (
              <SwiperSlide data-swiper-zoom="true">

                <ProjectCard09 key={data.id} data={data} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <!-- Add Buttons --> */}
          <div className="swiper-button-prev text_link l-dir pagination-previous">
            <a href="#">
              <span className="link_icon">
                <span className="line"></span> <span className="circle"></span>
                <span className="dot"></span>
              </span>
            </a>
          </div>
          <div className="swiper-button-next text_link r-dir pagination-next">
            <a href="#">
              <span className="link_icon">
                <span className="line"></span> <span className="circle"></span>
                <span className="dot"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery09;
