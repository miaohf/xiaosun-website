import React from "react";
import BlockGalleryBlog from "../components/BlockGalleryBlog";
// import CommentList from "../components/CommentList";
// import CommentRespond from "../components/CommentRespond";
import Paragraph from "../components/Paragraph";
// import PointOrder from "../components/PointOrder";
import PostFooter from "../components/PostFooter";
// import SideBar from "../components/SideBar";
import WidgetTitle from "../components/WidgetTitle";
import { useParams } from "react-router-dom";

const BlogDetailsContainer = () => {
  const BlogData = [
    {
      id: "01",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        // "/images/blog/details/01/1.jpg",
      ],
      title: "中国工艺品进出口总公司成立",
      text: "中国工艺品进出口总公司江苏省 分公司1979年宣告成立， 1980 年1月开始，江苏省开始自营出口 江苏地区红木制品。1980年8月， 与新加坡永安祥公 司董事长蒋仲甫先生签订第一份 销售合同，金额为100万元外汇人民币。",
      date: "Jan, 1980",
      dateTime: "1980-01",
      postCount: "01",
    },
    {
      id: "2",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "中国出口商品秋季交易会",
      text: "1981年11月，首次在美国纽约23街的中美贸易中心举办“江苏省出口商品展销会展”。江苏省贸易代表团6人赴美参加展销会，  首次将江苏省的红木、漆器等产品推向美国市场。",
      date: "Oct, 1980",
      dateTime: "1980-10",
      postCount: "01",
    },
    {
      id: "3",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "在美国举办“江苏省出口商品展销会展”",
      text: "1981年11月，首次在美国纽约23街的中美贸易中心举办“江苏省出口商品展销会展”。江苏省贸易代表团6人赴美参加展销会，首次将江苏省的红木、漆器等产品推向美国市场。",
      date: "Nov, 1981",
      dateTime: "1981-11",
      postCount: "01",
    },
    {
      id: "3",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "颁发《红木制品质量验收标准及方法》",
      text: "首次进口飽尔曼公司全自动蒸汽窑式木材干燥机等德国、意大 利、日本的进口木工机械，开启了红木行业机械化生产的新时代。中国工艺品进出口总公司红木采购小组，到泰国、老抛、日本和香港现场选购红木原材，结束了以前由中间商供货，经常导致的到货与合同不符的状况。1982年12月29日，中国工艺品进出口公司江苏省分公司，起草并颁发了《红木制品质量验收标准及方法》，结束了原来红木出口商品无标准的历史。",
      date: "Dec, 1989",
      dateTime: "1980-12",
      postCount: "01",
    },
    {
      id: "4",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "红木制品出口总额全国第一",
      text: "江苏省红木制品出口金额、数量等各项指标首次超过上海，排名全国第一，当年全国红木制品出口总额为1042万美元，江苏省外贸出口为305万美元，约占全国出口总额的三分之一。",
      date: "Dec, 1983",
      dateTime: "1983-12",
      postCount: "01",
    },
    {
      id: "5",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "江苏红木首次赴中东展览",
      text: "江苏红木首次赴中东展览，在阿 曼、阿联连等中东地区深受红木 爱好者欢迎，展出的样品全部销售一空。",
      date: "Jun, 1988",
      dateTime: "1988-06",
      postCount: "01",
    },
    {
      id: "6",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "单独组团赴美国纽约举办展销会",
      text: "中国工艺品进出口总公司江苏省分公司首次单独组团赴美国纽约举办展销会，并拜访了当地客户，征询客户意见，针对客户提出的售后服务问题，拟定了派售后维修师傅赴美国的方案，解决了客户的后顾之忧，从而实现了江苏省红木制品经营近十年无一例索赔的优良记录。",
      date: "Jan, 1980",
      dateTime: "1980-01",
      postCount: "01",
    },
    {
      id: "7",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "赴泰国选购红木原料",
      text: "江苏省单独组团赴泰国选购红木原料，标志着在原材料进口上，江苏省率先实现了完全自主经营。",
      date: "Jan, 1980",
      dateTime: "1980-01",
      postCount: "01",
    },

    {
      id: "9",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "出口转内销",
      text: "由于中缅交界的边境城市瑞丽的 人民币采购红木的方式日益成熟，先是广东，然后是江苏，逐渐出现从事内销的红木家具生产企业。原先百分之百出口创汇的方式，受到了挑战，厂家面向国内市场的热情高涨，出现了外销冷，内销热的转折。",
      date: "Jan, 1992",
      dateTime: "1992-01",
      postCount: "01",
    },
    {
      id: "10",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "国内首套法式红木家具海展出",
      text: "杨金荣领衔的团队，针对上海市场创作了国内首套法式红木家具，在上海展出后，受到上海消费者的热烈欢迎，销售场面十分火爆。并提出了十年内免费维修，十年后原价回收的售后模式，首次将红木制品的保值性和金融属性明确体现出来。",
      date: "Jan, 1993",
      dateTime: "1993-01",
      postCount: "01",
    },
    {
      id: "11",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "小区户型的改进型款明式客厅家居",
      text: "内销市场一路火爆，原先外销转内销产品的基础上，有了适合小区户型的改进型款式，如明式卡子花客厅沙发等，款式简洁、线条明快、工艺考究，非常符合江南文人审美，深受消费者欢迎。",
      date: "Jan, 1995",
      dateTime: "1995-01",
      postCount: "01",
    },
    {
      id: "12",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "常熟等地东西方结合新款面市",
      text: "常熟等地区有一些民营企业推出了一些东西方结合的，适合内销的新款红木家具面市，如欧式长方形餐桌椅，明式五件套沙发等产品成了市场热销货。",
      date: "Jan, 1996",
      dateTime: "1996-01",
      postCount: "01",
    },
    {
      id: "13",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "中西结合的新款式蜂拥而至",
      text: "由于商品房销售的日渐开始，消费者开始对适合商品房类红木家具感兴趣，由大床、大衣柜、电视柜等组成的商品房套装红木家具开始受宠，一时间各种中西结合的新款式蜂拥而至。",
      date: "Jan, 1997",
      dateTime: "1997-01",
      postCount: "01",
    },
    {
      id: "14",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "市场竞争使得大量新款面市",
      text: "在市场自由竞争的状态下，人们对红木家具的材质、工艺要求逐渐提高，有着深厚文化底蕴和民间手工艺基础的江苏省在选材、 造型、雕刻都有了更高要求，创造出大量的新款式。",
      date: "Jan, 1998",
      dateTime: "1998-01",
      postCount: "01",
    },
    {
      id: "15",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "江苏工美红木文化艺术研究所成立",
      text: "二月，全国首家红木文化艺术研究业机构-江苏工美红木文化艺术研究所成立，杨金荣先生任创始所长。四月，杨金荣所长会见了专程来拜 访的世界著名家具设计师，被誉为 “西班牙家具之父”库卡博罗先生，两位大师对中国传统家具的技和艺的问题做了深入的交流，杨金荣先生提出了中国传统家具在技艺层面，早在明代就超越西方，并阐述了商品家具和艺术品家具的区别 在于用工具和用心，技能和艺术的区别等问题。六月，江苏省工艺美术行业协会与工艺美术学会红木制品专业委员会成立，省轻工厅副厅长顾信任总顾问，南京市副市长罗志军任名誉顾问，杨金荣所长兼任主任委员。九月，红木专业委员会在南京鼓楼举办消费者免费咨询服务活动。十月，常熟市红木家具历史发展研讨会召开。十二月，全国首部红木制品工艺质量标准《江苏省红木制品工艺质量标准》审查会在常熟举行。",
      date: "Jan, 1999",
      dateTime: "1999-01",
      postCount: "01",
    },
    {
      id: "16",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "",
      text: "首届江苏省红木雕刻研修班在苏州工艺美术职业学院开班，全省各地红木精英30人才加，由吴学忠、杨金荣两位大师亲自授课，这期学员后来都在全省各地成了红木文化艺术传播的骨干。2004年9月2日，人民法院报发布 最高人民法院公告（第49号），  江苏工美红木文化研究所正式成为红木制品江苏省人民法院司法鉴定责任人。",
      date: "Jan, 2004",
      dateTime: "2004-01",
      postCount: "01",
    },
    {
      id: "17",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "《红木文化与其载体的关系》和《传统家具的样卵结构》",
      text: "江苏工艺美术技术学院学报上， 引用了杨金荣、吴学忠两位大师的文章《红木文化与其载体的关系》和《传统家具的样卵结构》。《红木文化与其载体的关系》重点介绍了东非黑黄檀、黑黄檀、 卢氏黑黄檀三个《红木》国标材种的特征，并与明清时期使用的高端材种檀香紫檀、降香黄檀做了对比，明确指出:文化要延续必然，载体的更替则更是必然， 我所所要做的，就是在各个时期负责挑选最佳载体，以担负这种文化延续的责任。",
      date: "Jan, 2005",
      dateTime: "2005-01",
      postCount: "01",
    },
    {
      id: "18",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "创办“江苏省红木文化艺术创新与发展高级研修班”",
      text: "由江苏省人事厅与省工艺美术行业协会联合苏州工艺美术职业技术学院创办“江苏省红木文化艺术创新与发展高级研修班”。研修班特邀了红木专业理论研究、造型设计、艺术创作、木材研究方面的专家讲课，并组织红木艺术精品观摩展示。",
      date: "Jan, 2006",
      dateTime: "2006-01",
      postCount: "01",
    },
    {
      id: "19",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "杨金荣先生文章《红木艺术价值及其四大要素》",
      text: "苏州工艺美术职业技术学院学报引用了杨金荣先生文章《红木艺术价值及其四大要素》，文章特别强调了红木的文化与艺术价 值，并创造性的提出其艺术价值的四大要素：差异性、稀缺性、唯一性和高难度性。",
      date: "Jan, 2007",
      dateTime: "2007-01",
      postCount: "01",
    },
    {
      id: "20",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "杨金荣先生文章《红木艺术及审美原则》",
      text: "《财富与人》杂志发表了杨金荣先生文章《红木艺术及审美原则》文章首次提出了红木艺术的五项相关原则:  选材、造型结构、 雕刻与综合。",
      date: "Jan, 2008",
      dateTime: "2008-01",
      postCount: "01",
    },
    {
      id: "21",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "杨金荣先生文章《红木学研究及其学科分类》",
      text: "《海峡》杂志发表了杨金荣先生文章《红木学研究及其学科分类》，文中首次提出了红木学概 念并将其长期研究的红木文化理论概括为通俗的“六论”，即一种载体、两个灵魂、三大属性、四大要素、五项原则、六大学科门类。",
      date: "Jan, 2009",
      dateTime: "2009-01",
      postCount: "01",
    },

    {
      id: "22",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "国家级非物质文化遗产《精细木作技艺》项目保护责任单位",
      text: "江苏工美红木文化艺术研究所正式成为国家级非物质文化遗产《精细木作技艺》项目保护责任单位，标志着江苏地区为代表的传统木作技艺，正式进行系统化 的挖掘、保护和传承。",
      date: "Jan, 2009",
      dateTime: "2009-01",
      postCount: "01",
    },
    {
      id: "23",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "红木三大品类雕刻艺术品，结构型雕刻摆件和艺术家具代表作",
      text: "红木三大品类雕刻艺术品，结构型雕刻摆件和艺术家具代表作",
      date: "Jan, 2012",
      dateTime: "2012-2016",
      postCount: "01",
    },

    {
      id: "24",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "红木艺术馆正式开馆",
      text: "5月23日，红木艺术馆正式开馆，艺术馆真实完整的展示了近代江苏省红木艺术发展的历史，  并展出了改革开放以来江苏省多位名家创作的红木艺术珍品。",
      date: "Jan, 2017",
      dateTime: "2017-01",
      postCount: "01",
    },

    {
      id: "25",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "美国知名木工杂志《woodwork-er，S Journal》专访",
      text: "美国知名木工杂志《woodwork-er，S Journal》发表专访文章， 称在中国江苏见到了活着的传奇Editor MeetS Living Legend.专著《红木文化谈数: 杨金荣大师谈话及演讲录》出版 ，是杨金荣大师从事红木文化艺术创作和研究近4 年的积累和沉淀，通过整理杨大师的演讲和访谈记录，阐述了红木文化与艺术，红木的材料与技艺，红木与时代的关系，以及红木作品的展示和知识的分享。",
      date: "Jan, 2019",
      dateTime: "2019-01",
      postCount: "01",
    },

    {
      id: "26",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "杨金荣先生公开收徒，手艺融入科技化新概念",
      text: "继2019年公开收徒之后， 国家级  非遗传承项目《精细木作技艺》在杨金荣师徒的努力下，本着保护、继承、创新和发展的基本原则，率先在江苏漂阳建立了传承示范木工房。师徒数人倾尽所有，坚守不做商业化，不做工厂化的底线，在造型、选材、工艺上不断地精益求精，选代进化，逐步建立了一套东方和西方、传统和现代、手工和科技融合的现代精细木作手工艺系统，在创新、科技和手工之间优化，在机械化、科技化的同时，最大限度的发挥人的价值。",
      date: "Jan, 2020",
      dateTime: "2020-01",
      postCount: "01",
    },

    {
      id: "27",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "杭州西湖区成立杨金荣红木艺术馆",
      text: "杨金荣红木艺术馆在杭州西湖区成立，标志着国家级非遗项目《精细木作技艺》的保护、传承、创新和发展与民众接轨的开始，通过杭州艺术馆的窗口，让更多人了解非遗项目，了解木作技艺和文化。杭州艺术馆设立了公共展厅、茶室、 木作艺术品区、示范木工房和开放餐厅，改变了传统艺术馆的单向展示功能，形成了可以参与、交流和共享的艺术空间的突破。",
      date: "Jan, 2021",
      dateTime: "2021-01",
      postCount: "01",
    },

    {
      id: "28",
      imgs: [
        "/images/blog/details/01/1.jpg",
        "/images/blog/details/01/2.jpg",
        "/images/blog/details/01/1.jpg",
      ],
      title: "新一代智能化木工机械",
      text: "子日:工欲善其事， 必先利其器。随着时代的变迁，老一辈的手艺人已经退出了历史的舞台，从业人员的年龄也已经偏高，所谓的全手工的传统手工艺，也逐渐被科技取代。研发新一代的，符合时 代发展，提高工作效率和降低劳动强度的木工机械，已经势在必行。经过杨金荣师徒3年多的不断努力，新一代智能化木工机械的研发工作取得突破性进展， 智能样卵机、多功能工作台和立铣的研发 已经基本完成。现代科技的应用，使得传统手工艺在最大限度发挥人的价值同时，搭上人工智能、 物联网和互联网的快车，必将进入新的辉煌。",
      date: "Jan, 2022",
      dateTime: "2022-01",
      postCount: "01",
    },
  ];
  const { id } = useParams();
  const blog = BlogData.find((blog) => blog.id === id);

  return (
    <main className="wrapper">
      <section className="project-details bg-dark-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10">
              <div className="project-details_inner">
                <div className="post_content">
                  <div className="post-header">
                    <h3 className="post-title">{blog.title}</h3>
                  </div>
                  {/* <div className="intro">
                                        <Paragraph text={blog.text} />
                                    </div> */}
                  <div className="fulltext">
                    <WidgetTitle title="资料" className="widget-title" />

                    {/* <Paragraph text='国家级非物质文化遗产' />
                    <PointOrder li1='让手艺拥抱科技' li2='让手艺拥抱科技' li3='让手艺拥抱科技' /> */}

                    <Paragraph text={blog.text} />
                    {/* <BlockGalleryBlog
                      img={`/images/blog/details/${blog.id}/1.jpg`}
                    /> */}

                    <BlockGalleryBlog props={blog.imgs} />

                    <PostFooter />
                    {/* <CommentList /> */}
                    {/* <CommentRespond /> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-4">
                            <SideBar></SideBar>
                        </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetailsContainer;
