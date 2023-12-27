import React from 'react';

const ProjectDetailsContainerCard = (props) => {
    return (
        <div className="thumb">
            <img className="item_image" src={props.img} alt="" />
            <div className="works-info">
                <div className="label-text">
                    <h5><a href="project-details.html">红木家居到艺术品转变的见证</a></h5>
                    <h6><a href="#">XiaoSun</a></h6>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsContainerCard;