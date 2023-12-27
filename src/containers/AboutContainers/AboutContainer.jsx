import React from "react";
import IconBoxFlex from "../../components/IconBoxFlex";
import Paragraph from "../../components/Paragraph";
import SubHeading from "../../components/SubHeading";
import TeamContainer02 from "../../containers/TeamContainers/TeamContainer02";

const AboutContainer = () => {
  return (
    <div>
      <section className="about bg-dark-100">
        <div className="large_font">
          <h2 className="floating_element text-dark-200 d-flex justify-content-center">
            About
          </h2>
        </div>
        {/* <div className="section-header text-center has_line">


          <h3 className="text-white">简介</h3>
        </div> */}

        <div className="container">
          <div className="row align-items-center">
            <div className="section-header text-center has_line">
              {/* <PageHeder className="text-white" title="主要藏品" /> */}

              <h3 className="text-white">简介</h3>
            </div>

            <div className="col-lg-3 col-md-9">
              <h5 className="text-red-title mb-3 ms-2">
                江苏工美红木文化艺术研究所
              </h5>
              <div className="about_image me-2 ms-2 mb-2">
                <img src="images/about/a1.jpg" alt="About" />
                <img src="images/about/e2.svg" alt="About" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              {/* <div className="about_text_inner"> */}
              <div className="about_text ms-2 me-2">
                <Paragraph text="江苏工美红木文化艺术研究所是由江苏省工艺美术行业协会于1999年设立的独立研究机构，由我国知名的红木专家杨金荣先生担任创始所长，众多行业专家（如:吴学忠大师、盛祖坤、杨家驹教授-红木首部国家标准起草人等等）成为研究所的研究员，为我国红木业从家具品类转向文化艺术品类做出了巨大的贡献。研究所在1999年起草，并于2000年1月10日发布了我国第一部红木行业标准《红木制品制作工艺质量要求DB32/T368-2000》；2000年2月24日被江苏省质量技术监督局指定为江苏省红木制品制作工艺质量鉴定单位；2004年9月2日最高人民法院审核批准成为在册红木制品司法鉴定单位；2011年5月23日由国务院批准文化部确 定被列入第三批国家级非物质文化遗产名录扩展项目名录-家具制作技艺（精细木作技艺），成为国家级非遗保护单位。"></Paragraph>
              </div>
              {/* <div className="btn_group">
                <a href="/team" className="btn gray">
                  更多
                </a>
              </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        <TeamContainer02 />
      </section>
    </div>
  );
};

export default AboutContainer;
