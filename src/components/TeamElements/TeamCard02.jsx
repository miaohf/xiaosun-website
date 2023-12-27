import React from 'react';
import Paragraph from "../../components/Paragraph";

const TeamCard02 = ({ data }) => {
    return (
        <div className="team-block">           
            {/* <h5 className="text-white"><a href="#">{data.name}</a></h5> */}
            <h6 className="text-uppercase text-olive mt-0 mb-2">{data.title}</h6>
            <img src={data.img} className='mb-3' alt="img" />
            <Paragraph text={data.text1}></Paragraph>
            <Paragraph text={data.text2}></Paragraph>
            <Paragraph text={data.text3}></Paragraph>
        </div>
    );
};

export default TeamCard02;