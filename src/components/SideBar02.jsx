import React from 'react';

const SideBar02 = () => {
    return (
        <div className="sidebar">
            <div className="project-information">
                <h6 className="widget-title">
                    项目情况
                    <span className="title-line"></span>
                </h6>
                <ul>
                    <li>
                        <span className="data">项目名称:</span> <span className="value">明式桌椅</span>
                    </li>
                    <li>
                        <span className="data">技术背景:</span> <span className="value">明式桌椅</span>
                    </li>
                    {/* <li>
                        <span className="data">概念:</span> <span className="value">Retro with Modern</span>
                    </li> */}
                    <li>
                        <span className="data">日期:</span> <span className="value">21/03/2023 - 04/12/2023</span>
                    </li>
                    <li>
                        <span className="data">地址:</span> <span className="value">中国溧阳</span>
                    </li>

                </ul>

                <div className="project-share">
                    <ul>
                        <li>Share:</li>
                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                        <li><a href="#"><i className="bi bi-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar02;