import React from "react";
import Paragraph from "../../components/Paragraph";

const ProjectCard09 = ({ data }) => {
  const style = {
    "font-size": "1rem",
    "font-weight": 600,
  };
  return (
    <div className="grid-item ms-2 me-2">
      <div className="thumb">
        <h6 className="text-white mb-2" style={style}>
          {data.title}
        </h6>
        <img className="item_image mb-2" src={data.imgs[0]} alt="" />
        {/* <div className="works-info">
          <div className="label-text">
            <h6>
              <a href="#">精细木作技艺</a>
            </h6>
            <h5>
              <a href="/project-details">{data.details}</a>
            </h5>
            <div className="details_link">
              <a href="/project-details">
                <span className="link_text">详情</span>{" "}
                <span className="link_icon">
                  <span className="line"></span>{" "}
                  <span className="circle"></span>
                  <span className="dot"></span>
                </span>
              </a>
            </div>
            <h6 className="text-olive">{data.date}</h6>
            <h5 className="text-white mt-0 mb-2">{data.title}</h5>
            <Paragraph className="ms-2 me-2" text={data.details}></Paragraph>
          </div>
        </div> */}

        <Paragraph className="ms-2 me-2" text={data.text}></Paragraph>
      </div>
    </div>
  );
};

export default ProjectCard09;
