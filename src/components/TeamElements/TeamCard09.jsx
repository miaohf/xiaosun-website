import React from "react";
import Paragraph from "../Paragraph";

const TeamCard09 = ({ data }) => {
  const style = {
    'font-size': '1rem',
    'font-weight': 600
  
}
  return (

    <div className="grid-item ms-2 me-2">
      <div className="team-block">
        <h5 className="text-white mt-3" style={style}>{data.name}</h5>
        {data.id !== "2" && (
          <h6 className="text-uppercase text-olive mt-0 mb-2">{data.title}</h6>
        )}
        {data.id !== "2" && (
          <img className="item_image" src={data.imgs[0]} alt="" />
        )}
        {/* <img className="item_image" src={data.imgs[0]} alt="" /> */}
        <div className="works-info"></div>

        {data.content.map((content) => (
          <Paragraph
            className="ms-2 me-2 mt-0 mb-0"
            key={content.id}
            text={content.text}
          ></Paragraph>
        ))}

        <Paragraph className="ms-2 me-2" text={data.text1}></Paragraph>
        <Paragraph className="ms-2 me-2" text={data.text2}></Paragraph>
        <Paragraph className="ms-2 me-2" text={data.text3}></Paragraph>
        <Paragraph className="ms-2 me-2" text={data.text4}></Paragraph>
      </div>
    </div>
  );
};

export default TeamCard09;
