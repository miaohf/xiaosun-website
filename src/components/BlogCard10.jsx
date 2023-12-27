import React from "react";
import Paragraph from "./Paragraph";
// import { Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
const BlogCard = ({ data }) => {
  console.log(data.items);
  // const { id, img, title, text, date, dateTime} = data;
  // let shortText = text
  // if (text.length > 150) {
  //     shortText = `${text.substring(0, 150)} ...`;
  // }

  // const ImageWrapper = {
  //   width: "100%",
  //   height: 0,
  //   "padding-bottom": "56.25%",
  //   position: "relative",
  //   overflow: "hidden",
  // }

  // const ItemImage = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   width: "auto",
  //   height: "100%",
  //   transform: "translate(-50%, -50%)",
  //   "object-fit": "cover",
  // }

  const TestImage = {
    width: "200px",
    height: "100px",
    border: "1px solid #000",
    "margin-top": "5px",
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div className="mb-5">
        <h6 className="text-olive mt-1">{data.year}</h6>

        {/* <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="swiper-slide"
        >
          {data.imgs.map((img) => (
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // backgroundColor: "#CCCCCC",
                  height: "320px",
                }}
              >
                <img
                  className="item_image"
                  key={img.id}
                  src={img.img}
                  alt=""
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <div className="mt-2">
          {data.items.map((item) => (
            <div key={item.id}>
              <div className="mt-3">
                {item.contents.map((content) => (
                  <Paragraph
                    className="text-element ms-2 me-2"
                    key={content.id}
                    text={content.text}
                  ></Paragraph>
                ))}
              </div>
              {item.pics.map((pic) => (
                <div>
                  <div className={TestImage}>
                    <img
                      // className="item_image mt-2 mb-0"
                      key={pic.id}
                      src={pic.url}
                      alt=""
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  {pic.comments && (
                    <p
                      className="text-olive mt-1"
                      style={{ "font-size": "12px", "line-height": "1.4" }}
                    >
                      {pic.comments}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* <div className="details_link">
            <a href={`/blog-details/${data.id}`}>
              <span className="link_text">点击进入</span>{" "}
              <span className="link_icon">
                <span className="line"></span> <span className="circle"></span>
                <span className="dot"></span>
              </span>
            </a>
          </div> */}
      </div>
    </div>
  );
};

export default BlogCard;
