import React from "react";
import { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCardRY from "../../components/TeamElements/TeamCard09RongYu";
import TeamCard09 from "../../components/TeamElements/TeamCard09";

const TeamContainer02 = () => {
  const TeamData = [
    {
      id: "1",
      imgs: ["images/team/1.jpg"],
      name: "杨金荣",
      title: "研究所创始人",
      content: [
        {
          id: 1,
          text: "杨金荣，江苏南京人，出生于1950年2月5日。1979年11月考入江苏省工艺品进出口公司，负责红木家具设计和进出口业务，不到三年把江苏红木出口额从0发展成为全国第一，是中国红木行业发展的领军人物。从事红木文化艺术 事业40余年来，在新产品设计、新材种开发、新设备引进以及新工艺推广等诸多方面做了大量的工作。率先起草并实施 全国第一部红木制品质量标准和第一部红木制品工艺标准，填补了行业空白。",
        },
        {
          id: 2,
          text: "杨金荣，江苏南京人，出生于1950年2月5日。1979年11月考入江苏省工艺品进出口公司，负责红木家具设计和进出口业务，不到三年把江苏红木出口额从0发展成为全国第一，是中国红木行业发展的领军人物。从事红木文化艺术 事业40余年来，在新产品设计、新材种开发、新设备引进以及新工艺推广等诸多方面做了大量的工作。率先起草并实施 全国第一部红木制品质量标准和第一部红木制品工艺标准，填补了行业空白。",
        },
        {
          id: 3,
          text: "20世纪80年代，率先引进木工机械、木工设备和其他辅助材料， 为红木产业工艺改进和效率的提高奠定了基础。开辟了到产地购买木材的渠道，率先用人民币在瑞丽购买红木，为后来国内红木产业的嶇起提供了条件。创新开发和改 良了面边压条一体化、绷藤面坐板、乱冰格对料上挠度等多项传统木作技艺，为中国红木产业发展、加工技艺和效率的 提高做出巨大贡献。",
        },
        {
          id: 4,
          text: "1999年，杨金荣担任江苏工美红木文化艺术研究所创始所长，创造性的提出了《红木文化艺术载体论》《三大属性论》《红木制品价值论》等一系列重要的红木理论和概念，出版了近30万字的《红木文化谈数》，在国内外知名的报 刊杂志和学术期刊上发表了上百篇专业文章，建立了自己独特的红木文化艺术理论体系，为中国红木从家具品类转向文 化艺术品类做出了巨大贡献。受聘为国际木文化学会特聘专家、副会长，长期受邀在国际交流中演讲和翻译，是国际社 会了解中国红木产业的重要桥梁纽带。",
        },
        {
          id: 5,
          text: "杨金荣大师，是近代红木行业中有着丰富经验、高超手工艺技艺和学术造诡的专家，既能动手又能动脑还能动口，被誉为中国近代红木文化艺术奠基人、红木行业泰斗和国宝级专家。",
        },
      ],
    },
    {
      id: "2",
      imgs: ["images/team/1.jpg"],
      name: "荣誉与成就",
      title: "",
      content: [
        {
          id: 1,
          text: "非物质文化遗产项目“精细木作技艺”唯一的代表性传承人（国务院批准文化部确定第三批国家级非遗项目扩展项目  2011年5月23日）",
        },
        {
          id: 2,
          text: "代表江苏省工艺品进出口公司签订了第一份红木制品外销合同（金额为100万外汇人民币 1980年8月） ",
        },
        {
          id: 3,
          text: "在美国纽约23街参加江苏省出口商品展销会，首次将江苏红木家具、漆器推向美国市场（1981年11月）",
        },
        {
          id: 4,
          text: "起草并颁发了《红木制品质量验收标准及方法》，结束了原来红木制品无质量标准的历史（中国工艺品进出口公司江苏省分公司 1982年12月29日）",
        },
        {
          id: 5,
          text: "首次进口德国飽尔曼公司全自动蒸汽窑式木材干燥机（1982年）",
        },
        {
          id: 6,
          text: "首次到泰国、老抛等东南亚国家采购红木原材，打破了原来依靠中间商的局面（1982年）",
        },
        {
          id: 7,
          text: "带领江苏红木行业实现出口总金额全国第一，305万美金出口额占全国三分之一（1983年）",
        },
        {
          id: 8,
          text: "首次在云南瑞丽晚盯用人民币进口红木，结束了必须用外汇购买红木的历史（1985年）",
        },
        {
          id: 9,
          text: "江苏工美红木文化艺术研究所创始所长（江苏省工艺美术行业协会 1999年2月10日）",
        },
        {
          id: 10,
          text: "起草并颁布了第一个红木行业工艺标准《红木制品制作工艺质量要求 DB32/T368-2000》（2000年1月10日）",
        },
        {
          id: 11,
          text: "江苏省工艺美术名人（江苏省轻工业厅 2000年1月）",
        },
        {
          id: 12,
          text: "高级工艺美术师（江苏省人事厅 2003年9月30日）",
        },
        {
          id: 13,
          text: "红木制品国家最高司法鉴定责任人（最高法院批准 2004年9月2日）",
        },
        {
          id: 14,
          text: "研究员级高级工艺美术师（江苏省人事厅2006年10月26日）",
        },
        {
          id: 15,
          text: "文化部委托中国工艺美术协会聘请作为仙游、新会、东阳、淪博等地古典家具之都、木雕之都称号评选专家（2006年-2010年）   ",
        },
        {
          id: 16,
          text: "第四届江苏省工艺美术大师（江苏省人民政府 2008年2月）",
        },
        {
          id: 17,
          text: "江苏省非物质文化遗产“精细木作工艺”代表性传承人（2008年11月）",
        },
        {
          id: 18,
          text: "国家文化部培训项目“中国古典家具高级研修班”主讲教授（上海工艺美术学院 2010年-2011年）",
        },

        {
          id: 19,
          text: "国际木文化学会特聘专家（2013年）",
        },
        {
          id: 20,
          text: "上海文化出版社出版了近30万字的杨金荣专著《红木文化谈数》（国家艺术基金 2017年）",
        },
        {
          id: 21,
          text: "国际木文化学会副会长（2019年）",
        },
        {
          id: 22,
          text: "江苏工美红木文化艺术研究所荣誉所长、终身高级研究员（江苏工美红木文化艺术研究所 2022年11月）",
        },
        {
          id: 23,
          text: "作品国内外获奖数十次， 在国内外报纸杂志和专业期刊发表文章、采访、演讲上百篇（次）。",
        },
      ],
    },

    {
      id: "3",
      imgs: ["images/team/2.jpg"],
      name: "章正一",
      title: "现任所长",
      content: [
        {
          id: 1,
          text: "现任所长章正一师从我国红木文化艺术大师，红木文化艺术奠基人杨金荣先生，致力于红木文化艺术理论研究和实践创作。经过不断努力，把传统元素和现代审美，手工艺和科技融合一体，通过智能设备设计和研发，工艺流程的设计和实践，在师父杨金荣40多年的实践和总结 的基础上，建立了一套完整的造美物的木作体系。",
        },
        {
          id: 2,
          text: "早年留学美国，主攻计算机科学和人工智能，喜欢西式木作，在精通西式木作技艺的基础上，研究实木造物的天然之美。是国内马洛夫摇椅社群发起人，马洛夫摇椅公开课发起人、首席讲师。",
        },
        {
          id: 3,
          text: "有着精浪的木作技艺基础，人生阅历，审美和价值观的融合，并在师父杨金荣毕生积累的基础上，建立了一套造美物的体系和人文艺术空间的美学理论，在实践中不断的创新和践行。",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="container">
        {/* <div className="swiper swiper_team">
          <Swiper
            modules={[Navigation, EffectFade, Pagination]}
            effect="slide"
            breakpoints={{
              768: {
                width: 768,
                slidesPerView: 1,
                spaceBetween: 30,
              },
              992: {
                width: 992,
                slidesPerView: 2,
                spaceBetween: 65,
              },
            }}
            autoHeight={true}
            parallax={true}
            controller={{
              inverse: true,
            }}
            slideToClickedSlide={true}
            loop={true}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
          >
            {TeamData.map((data) => (
              <SwiperSlide>
                <TeamCard02 key={data.id} data={data} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-navigation">
            <div className="swiper-button-prev">
              <i className="bi bi-arrow-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div> */}
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
            {TeamData.map((data) => (
              <SwiperSlide data-swiper-zoom="true">
                <TeamCard09 key={data.id} data={data} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <!-- Add Buttons --> */}
          <div className="swiper-button-prev details_link l-dir pagination-previous team-swiper">
            <a href="#">
              <span className="link_icon">
                <span className="line"></span> <span className="circle"></span>
                <span className="dot"></span>
              </span>
            </a>
          </div>
          <div className="swiper-button-next details_link r-dir pagination-next team-swiper">
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

export default TeamContainer02;
