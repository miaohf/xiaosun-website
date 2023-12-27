import React from "react";
import Paragraph from "../../components/Paragraph";

const TeamCard = ({ data }) => {
  const { img, name, title, description } = data;

  return (
    <div className="team-block">
      <h5 className="text-white">
        <a href="/team-details">{name}</a>
      </h5>
      <h6 className="text-uppercase text-olive">{title}</h6>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <img
          src={img}
          alt="img"
          style={{ width: "320px" }}
        />
        <Paragraph text={description} className="me-3"></Paragraph>
      </div>
    </div>
  );
};

export default TeamCard;
