import React, { useEffect } from "react";
import Paragraph from "../Paragraph";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const ProjectCard10 = ({ data }) => {
  // console.log('projectCard10: ', data.id, data.content)
  const style = {
    "font-size": "1rem",
    "font-weight": 600,
  };
  // const adjustTextElementPosition = () => {
  //   const currentSlide = document.querySelector(".swiper-slide-active");
  //   if (currentSlide) {
  //     const imageHeight = currentSlide.querySelector("img").clientHeight;
  //     const textElement = currentSlide.querySelector(".text-element");
  //     textElement.style.top = `${imageHeight}px`;
  //   }
  // };

  // useEffect(() => {}, [data]);

  console.log(data.items)

  return (
    <div className="grid-item ms-3 me-3">
      <div>
        <h6 className="text-olive mt-3 mb-0" style={style}>
          {data.year}
        </h6>
        {/* <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="swiper-slide"
          // onSlideChange={() => adjustTextElementPosition()}
        >
          {data.imgs.map((img) => (
            <SwiperSlide>
              <img className="item_image" key={img.id} src={img.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper> */}

{/* {
  id: 29,
  items:[{id:1,       pics: [
    {
      id: 1,
      url: "images/blog/2022/1.jpg",
    },
    {
      id: 2,
      url: "images/blog/2022/2.jpg",
    },
    {
      id: 3,
      url: "images/blog/2022/3.jpg",
    },
  ],
  content: [
    {
      id: 1,
      text: "子日:工欲善其事，必先利其器。随着时代的变迁，老一辈的手艺人已经退出了历史的舞台，从业人员的年龄也已经偏高，所谓的全手工的传统手工艺，也逐渐被科技取代。研发新一代的，符合时代发展，提高工作效率和降低劳动强度的木工机械，已经势在必行。经过杨金荣师徒3年多的不断努力，新一代智能化木工机械的研发工作取得突破性进展， 智能样卵机、多功能工作台和立铣的研发 已经基本完成。现代科技的应用，使得传统手工艺在最大限度发挥人的价值同时，搭上人工智能、物联网和互联网的快车，必将进入新的辉煌。",
    },
  ],}],
  year: "2022",
}, */}
        {data.items.map((item) => (
          item.contents.map((content) =>(
    
              <Paragraph
              className="text-element ms-2 me-2 mt-0"
              key={content.id}
              text={content.text}
            ></Paragraph>
            
          ))
        ))}
      </div>
    </div>
  );
};

export default ProjectCard10;
