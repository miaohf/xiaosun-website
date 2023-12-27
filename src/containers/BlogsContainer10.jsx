import React, { useState } from "react";
import BlogCard from "../components/BlogCard10";
import PaginationDiv from "../components/PaginationDiv";
// import Pagination from "@material-ui/lab/pagination";

const BlogsContainer = () => {
  const BlogData = [
    {
      id: 1,
      items: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              text: "中国工艺品进出口总公司江苏省分公司1979年宣告成立，1980年1月开始，江苏省开始自营出口江苏地区红木制品。",
            },
            {
              id: 2,
              text: "1980年8月， 与新加坡永安祥公司董事长蒋仲甫先生签订第一份销售合同，金额为100万元外汇人民币。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1980/1.jpg",
              comments: "杨金荣与蒋仲甫先生在中山陵留影",
            },
          ],
        },
        {
          id: 2,
          contents: [
            { id: 1, text: "1980年10月参加广州“中国出口商品秋季交易会”" },
          ],
          pics: [
            { id: 1, url: "images/blog/1980/2.jpg" },
            { id: 2, url: "images/blog/1980/3.jpg" },
          ],
        },
      ],
      year: "1980",
    },
    {
      id: 2,
      items: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              text: "1981年11月，首次在美国纽约23街的中美贸易中心举办“江苏省出口商品展销会展”。江苏省贸易代表团6人赴美参加展销会，首次将江苏省的红木、漆器等产品推向美国市场。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1981/1.jpg",
              comments: "纽约23街中美贸易中心门口留影",
            },
            {
              id: 2,
              url: "images/blog/1981/2.jpg",
              comments: "展馆内",
            },
            {
              id: 3,
              url: "images/blog/1981/3.jpg",
              comments: "美籍商人邮宗豪先生（右三）",
            },
            {
              id: 4,
              url: "images/blog/1981/4.jpg",
              comments: "美国西点军校留影",
            },
          ],
        },
      ],
      year: "1981",
    },
    {
      id: 3,
      items: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              text: "首次进口飽尔曼公司全自动蒸汽窑式木材干燥机等德国、意大利、日本的进口木工机械，开启了红木行业机械化生产的新时代。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1982/1.jpg",
              comments:
                "在香港中艺代表和泰国木材商会会长陪同下，江苏代表杨金荣在泰国边境实地勘验选购红木原料。",
            },
          ],
        },
        {
          id: 2,
          contents: [
            {
              id: 1,
              text: "中国工艺品进出口总公司红木采购小组，到泰国、老抛、日本和香港现场选购红木原材，结束了以前由中间商供货，经常导致的到货与合同不符的状况。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1982/2.jpg",
              comments:
                "在香港中艺代表和泰国木材商会会长陪同下，江苏代表杨金荣在泰国边境实地勘验选购红木原料。",
            },
          ],
        },

        {
          id: 2,
          contents: [
            {
              id: 1,
              text: "1982年12月29日，中国工艺品进出口公司江苏省分公司，起草并颁发了《红木制品质量验收标准及方法》，结束了原来红木出口商品无标准的历史。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1982/3.jpg",
              comments: "红木制品质量标准",
            },
          ],
        },
      ],

      year: "1982",
    },
    {
      id: 4,
      items: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              text: "江苏省红木制品出口金额、数量等各项指标首次超过上海，排名全国第一，当年全国红木制品出口总额为1042万美元，江苏省外贸出口为305万美元，约占全国出口总额的三分之一。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1983/1.jpg",
              comments: "汇总表",
            },
          ],
        },
      ],
      year: "1983",
    },
    {
      id: 5,
      items: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              text: "江苏省红木制品包括红木家具、红木雕刻工艺品和红木结构型雕 刻摆件，全省定点生产厂共5家，苏州红木雕刻厂，常熟木器厂，武进工艺厂，南通市雕刻乐器厂，南通县向东工艺厂，前三家做大件，后两家做小件，当年由于外贸出口量的增加，各厂开始有了自己的外发加工点，弥补自产能的不足，从业人员成倍的增加。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1984/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/1984/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/1984/3.jpg",
            },
            {
              id: 4,
              url: "images/blog/1984/4.jpg",
            },
            {
              id: 5,
              url: "images/blog/1984/5.jpg",
            },
          ],
        },
      ],
      year: "1984",
    },
    {
      id: 6,
      items: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              text: "首次去云南与缅甸接壤的城市瑞丽腕盯，考察用人民币购买红木原料的情况。由于杨金荣先生有着丰富的木材知识和经验，大胆的决定了试用缅甸进口的红木原材料，也就是后来被他命名为缅甸白酸枝的材种奥氏黄檀。首次用人民币批量采购了该材种，结束了必须用外汇购买木材的历史，从而提高了创汇率，更为后来红木制品内销市场发展奠定了坚实的基础。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1985/1.jpg",
              comments: "豌盯桥",
            },
          ],
        },
      ],
      year: "1985",
    },
    {
      id: 7,
      items: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              text: "首届全国红漆木香港展销会，全国8个口岸分公司在香港展览各自的新作品。此次展览共设12个奖 项，江苏省代表团获得四项大 奖，并取得了第一名的好成绩， 比第二名的上海多出一倍。其中 一件仿莫愁湖胜棋楼棋台的面板，采用白酸枝不着色拼板技术，因评委找不全所有拼缝而赢得最佳创新设计大奖，与会所有人赞叹不已。这项技术奠定了红木家具拼板技术的基础，解决了独板越来越少的行业难题。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1986/1.jpg",
            },
          ],
        },
      ],
      year: "1986",
    },
    {
      id: 8,
      items: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              text: "苏省红木制品的出口，经过了7年的改革创新，把从上海接手回来时的1500多个货号，调整精简为300多个，增加了单个货号的出口量，大大提高了工厂的生产效率，并降低了生产成本。",
            },
            {
              id: 2,
              text: "7月，中国工艺品进出口总公司组织全国8个口岸，赴日本大限举办展销会。江苏省代表团取得了期現货销售全国第一的佳绩，参展的所有现货被日本客户抢购一空。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1987/1.jpg",
              comments: "与日本客人联欢",
            },
          ],
        },
      ],
      year: "1987",
    },
    {
      id: 9,
      items: [
        {
          id: 1,
          contents: [
            {
              id: 1,
              text: "江苏红木首次赴中东展览，在阿曼、阿联连等中东地区深受红木爱好者欢迎，展出的样品全部销售一空。",
            },
          ],
          pics: [
            {
              id: 1,
              url: "images/blog/1988/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/1988/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/1988/3.jpg",
            },
            {
              id: 4,
              url: "images/blog/1988/4.jpg",
            },
          ],
        },
      ],
      year: "1988",
    },
    {
      id: 10,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1989/1.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "中国工艺品进出口总公司江苏省分公司首次单独组团赴美国纽约举办展销会，并拜访了当地客户，征询客户意见，针对客户提出的售后服务问题，拟定了派售后维修师傅赴美国的方案，解决了客户的后顾之忧，从而实现了江苏省红木制品经营近十年无一例索赔的优良记录。",
            },
          ],
        },
      ],
      year: "1989",
    },
    {
      id: "11",
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1990/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/1990/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/1990/3.jpg",
            },
            {
              id: 4,
              url: "images/blog/1990/4.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "江苏省单独组团赴泰国选购红木原料，标志着在原材料进口上，江苏省率先实现了完全自主经营。",
            },
          ],
        },
      ],
      year: "1990",
    },
    {
      id: "12",
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1991/1.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "江苏省独立组团赴香港展出，江苏工艺品因品种多、观赏性强，成了展会的重头戏，现货期货双双超额完成预定目标。",
            },
          ],
        },
      ],
      year: "1991",
    },
    {
      id: 13,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1992/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/1992/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "由于中缅交界的边境城市瑞丽的人民币采购红木的方式日益成熟，先是广东，然后是江苏，逐渐出现从事内销的红木家具生产企业。原先百分之百出口创汇的方式，受到了挑战，厂家面向国内市场的热情高涨，出现了外销冷，内销热的转折。",
            },
          ],
        },
      ],
      year: "1992",
    },
    {
      id: 14,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1993/1.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "杨金荣领衔的团队，针对上海市场创作了国内首套法式红木家具，在上海展出后，受到上海消费者的热烈欢迎，销售场面十分火爆。并提出了十年内免费维修，十年后原价回收的售后模式，首次将红木制品的保值性和金融属性明确体现出来。",
            },
          ],
        },
      ],
      year: "1993",
    },
    {
      id: 15,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1994/1.jpg",
            },
            {
              id: 1,
              url: "images/blog/1994/2.jpg",
            },
          ],
          contents: [
            {
              id: 2,
              text: "当时外销转内销的热门款式",
            },
          ],
        },
      ],
      year: "1994",
    },
    {
      id: 16,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1995/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/1995/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "内销市场一路火爆，原先外销转内销产品的基础上，有了适合小区户型的改进型款式，如明式卡子花客厅沙发等，款式简洁、线 条明快、工艺考究，非常符合江南文人审美，深受消费者欢迎。",
            },
          ],
        },
      ],
      year: "1995",
    },
    {
      id: 17,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1996/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/1996/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "常熟等地区有一些民营企业推出了一些东西方结合的，适合内销的新款红木家具面市，如欧式长方形餐桌椅，明式五件套沙发等产品成了市场热销货。",
            },
          ],
        },
      ],
      year: "1996",
    },
    {
      id: "13",
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1997/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/1997/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/1997/3.jpg",
              comments: "当时受欢迎的—些款式",
            },
          ],
          contents: [
            {
              id: 1,
              text: "由于商品房销售的日渐开始，消费者开始对适合商品房类红木家具感兴趣，由大床、大衣柜、电视柜等组成的商品房套装红木家具开始受宠，一时间各种中西结合的新款式蜂拥而至。",
            },
          ],
        },
      ],
      year: "1997",
    },
    {
      id: 14,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1998/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/1998/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/1998/3.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "在市场自由竞争的状态下，人们对红木家具的材质、工艺要求逐渐提高，有着深厚文化底蕴和民间手工艺基础的江苏省在选材、 造型、雕刻都有了更高要求，创造出大量的新款式。",
            },
          ],
        },
      ],

      year: "1998",
    },
    {
      id: 15,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1999/1.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "二月，全国首家红木文化艺术研究 专业机构-江苏工美红木文化艺术研 究所成立，杨金荣先生任创始所长。",
            },
          ],
        },
        {
          id: 2,
          pics: [
            {
              id: 1,
              url: "images/blog/1999/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "四月，杨金荣所长会见了专程来拜访的世界著名家具设计师，被誉为“西班牙家具之父”库卡博罗先 生，两位大师对中国传统家具的技和艺的问题做了深入的交流，杨金荣先生提出了中国传统家具在技艺层面，早在明代就超越西方，并阐述了商品家具和艺术品家具的区别在用工具和用心，技能和艺术的区别等问题。",
            },
          ],
        },
        {
          id: 3,
          pics: [
            {
              id: 1,
              url: "images/blog/1999/3.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "六月，江苏省工艺美术行业协会与工艺美术学会红木制品专业委员会成立，省轻工厅副厅长顾信任总顾问，南京市副市长罗志军任名誉顾问，杨金荣所长兼任主任委员。",
            },
          ],
        },
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1999/4.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "九月，红木专业委员会在南京鼓楼举办消费者免费咨询服务活动。",
            },
          ],
        },
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/1999/10.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "十月，常熟市红木家具历史发展研 讨会召开。",
            },
            {
              id: 2,
              text: "十二月，全国首部红木制品工艺质 量标准《江苏省红木制品工艺质量 标准》审查会在常熟举行。",
            },
          ],
        },
      ],
      year: "1999",
    },
    {
      id: 16,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2000/1.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "一月，南京艺术学院主办的《美 术与设计》杂志刊登了杨金荣的 文章《当代红木浅析》，文中首次提出了“红木”一词是指红木文化艺术的含义本质，而木材及 其制品只是载体的理念，为江苏红木文化事业的发展奠定了坚实可靠的理论基础。",
            },
          ],
        },

        {
          id: 2,
          pics: [
            {
              id: 1,
              url: "images/blog/2000/2.jpg",
            },
          ],
          contents: [
            {
              id: 2,
              text: "三月，江苏省地方标准 DB32/T368-2000《红木制品制 作工艺质量要求》新闻发布会，由省质量技术监督局主持在南京召开，标准首席起草人杨金荣现场进行解释说明标准的起草原因、作用和意义。",
            },
          ],
        },

        {
          id: 3,
          pics: [
            {
              id: 1,
              url: "images/blog/2000/3.jpg",
            },
            {
              id: 2,
              url: "images/blog/2000/4.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "九月，国家《红木》标准GB/T18107-2000记者招待会在南京召开，会议由江苏省工艺美术协会秘书长侯铁主持。国家红木标准首席起草人杨家驹先生（江苏工美红木文化研究所客座研究员）与江苏工美红木研究所所长、研究员杨金荣先生发表了重要讲话。",
            },
          ],
        },
      ],
      year: "2000",
    },
    {
      id: 17,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2001/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2001/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "受外交部和文化部的委托和要求，由江苏省红木研究所设计并 制作了一批“现代东方艺术家 具”赴美国高点国际家具展。这批新创作的家具，结合中国传统工艺和造型，融入了现代设计元 素，在实用性、艺术性和传统工艺上都达到了一定的高度，打破了当时所谓的中国家具无设计的魔咒。",
            },
          ],
        },
      ],
      year: "2001",
    },
    {
      id: 18,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2002/1.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "江苏省当代杰出的红木艺术家，吴氏木雕创始人吴学忠大师工作室成立，复刻的第一件作品“紫 檀木镶红雕漆背板乾隆宝座”，被香港知名收藏家收藏。",
            },
          ],
        },
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2002/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "钟山风雨》杂志2002年第五期 上发表了杨金荣先生文章《漫话 红木》，首次提出了红木制品的 具、工、艺三个层次的分级，阐述了红木制品的“新与旧”的关 系以及与现代生活环境的关系。",
            },
          ],
        },
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2002/3.jpg",
            },
            {
              id: 2,
              url: "images/blog/2002/4.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "钟山风雨》杂志2002年第五期 上发表了杨金荣先生文章《漫话 红木》，首次提出了红木制品的 具、工、艺三个层次的分级，阐述了红木制品的“新与旧”的关 系以及与现代生活环境的关系。",
            },
          ],
        },
      ],
      year: "2002",
    },
    {
      id: 19,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2003/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2003/2.jpg",
            },
            {
              id: 1,
              url: "images/blog/2003/3.jpg",
            },
            {
              id: 2,
              url: "images/blog/2003/4.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "江苏省委组织部长王国生带队赴法国巴黎参加《锦绣江苏》文化交流活动，全省各品类的工艺美术大师作品展出后，在巴黎引起了巨大反响。吴学忠大师作品 “挣脱”被法国媒体称为“一件歌颂人性解放的伟大作品”。",
            },
          ],
        },
      ],
      year: "2003",
    },
    {
      id: 20,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2004/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2004/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "首届江苏省红木雕刻研修班在苏州工艺美术职业学院开班，全省各地红木精英30人才加，由吴学忠、杨金荣两位大师亲自授课，这期学员后来都在全省各地成了红木文化艺术传播的骨干。",
            },
          ],
        },
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2004/3.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "2004年9月2日，人民法院报发布 最高人民法院公告（第49号），  江苏工美红木文化研究所正式成为红木制品江苏省人民法院司法鉴定责任人。",
            },
          ],
        },
      ],

      year: "2004",
    },
    {
      id: 21,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2005/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2005/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/2005/3.jpg",
            },
            {
              id: 4,
              url: "images/blog/2005/4.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "江苏工艺美术技术学院学报上， 引用了杨金荣、吴学忠两位大师的文章《红木文化与其载体的关系》和《传统家具的样卵结构》。《红木文化与其载体的关系》重点介绍了东非黑黄檀、黑黄檀、卢氏黑黄檀三个《红木》国标材种的特征，并与明清时期使用的高端材种檀香紫檀、降香黄檀做了对比，明确指出:文化要延续必然，载体的更替则更是必然， 我所所要做的，就是在各个时期负责挑选最佳载体，以担负这种文化延续的责任。",
            },
          ],
        },
      ],
      year: "2005",
    },
    {
      id: 22,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2006/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2006/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/2006/3.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "江苏工艺美术技术学院学报上， 引用了杨金荣、吴学忠两位大师的文章《红木文化与其载体的关系》和《传统家具的样卵结构》。《红木文化与其载体的关系》重点介绍了东非黑黄檀、黑黄檀、 卢氏黑黄檀三个《红木》国标材种的特征，并与明清时期使用的高端材种檀香紫檀、降香黄檀做了对比，明确指出:文化要延续必然，载体的更替则更是必然， 我所所要做的，就是在各个时期负责挑选最佳载体，以担负这种文化延续的责任。",
            },
          ],
        },
      ],
      year: "2006",
    },
    {
      id: 23,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2007/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2007/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "苏州工艺美术职业技术学院学报引用了杨金荣先生文章《红木艺术价值及其四大要素》，文章特别强调了红木的文化与艺术价值，并创造性的提出其艺术价值的四大要素：差异性、稀缺性、唯一性和高难度性。",
            },
          ],
        },
      ],
      year: "2007",
    },
    {
      id: 24,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2008/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2008/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/2008/3.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "《财富与人》杂志发表了杨金荣先生文章《红木艺术及审美原则》文章首次提出了红木艺术的五项相关原则:  选材、造型结构、雕刻与综合。",
            },
          ],
        },
      ],
      year: "2008",
    },
    {
      id: 25,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2009/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2009/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/2009/3.jpg",
            },
            {
              id: 4,
              url: "images/blog/2009/4.jpg",
            },
            {
              id: 5,
              url: "images/blog/2009/5.jpg",
            },
            {
              id: 6,
              url: "images/blog/2009/6.jpg",
            },
            {
              id: 7,
              url: "images/blog/2009/7.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "《海峡》杂志发表了杨金荣先生文章《红木学研究及其学科分类》，文中首次提出了红木学概念并将其长期研究的红木文化理论概括为通俗的“六论”，即一种载体、两个灵魂、三大属性、四大要素、五项原则、六大学科门类。",
            },
          ],
        },
      ],
      year: "2009",
    },
    {
      id: 26,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2011/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2011/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/2011/3.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "江苏工美红木文化艺术研究所正式成为国家级非物质文化遗产《精细木作技艺》项目保护责任单位，标志着江苏地区为代表的传统木作技艺，正式进行系统化的挖掘、保护和传承。",
            },
          ],
        },
      ],
      year: "2011",
    },
    {
      id: 27,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2012/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2012/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/2012/3.jpg",
            },
            {
              id: 4,
              url: "images/blog/2012/4.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "红木三大品类雕刻艺术品，结构型雕刻摆件和艺术家具代表作。",
            },
          ],
        },
      ],
      year: "2012",
    },
    {
      id: 28,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2017/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2017/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "5月23日，红木艺术馆正式开馆，艺术馆真实完整的展示了近代江苏省红木艺术发展的历史，并展出了改革开放以来江苏省多位名家创作的红木艺术珍品。",
            },
          ],
        },
      ],
      year: "2017",
    },
    {
      id: 29,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2018/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2018/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "美国著名的收藏艺术品级木工工具设计大师John Economaki一行来访，就木工工具与传统手工艺的关系做了深入的探讨，不久，美国知名木工杂志《woodworker，S Journal》发表专访文章，称在中国江苏见到了活着的传奇Editor MeetS Living Legend。",
            },
          ],
        },

        {
          id: 2,
          pics: [
            {
              id: 1,
              url: "images/blog/2018/3.jpg",
            },
            {
              id: 2,
              url: "images/blog/2018/4.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "专著《红木文化谈数: 杨金荣大师谈话及演讲录》出版 ，是杨金荣大师从事红木文化艺术创作和研究近40年的积累和沉淀，通过整理杨大师的演讲和访谈记录，阐述了红木文化与艺术，红木的材料与技艺，红木与时代的关系，以及红木作品的展示和知识的分享。",
            },
          ],
        },
      ],
      year: "2018",
    },
    {
      id: 30,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2019/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2019/2.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "2019年7月9日，在红木艺术馆举 行了隆重的公开收徒仪式，在众多大师和非遗保护部门领导的见证下，精通中西木作技艺的资深木工爱好者章正一正式拜杨金荣为师，传承杨金荣先生的数十年行业经验、技艺、红木文化艺术精髓，正式拉开了精细木作技艺这门传统手工艺的保护、传承、创新和发展的序幕。",
            },
          ],
        },
      ],
      year: "2019",
    },
    {
      id: 31,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2020/1.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "继2019年公开收徒之后， 国家级非遗传承项目《精细木作技艺》在杨金荣师徒的努力下，本着保护、继承、创新和发展的基本原则，率先在江苏漂阳建立了传承示范木工房。师徒数人倾尽所有，坚守不做商业化，不做工厂化的底线，在造型、选材、工艺上不断地精益求精，选代进化，逐步建立了一套东方和西方、传统和现代、手工和科技融合的现代精细木作手工艺系统，在创新、科技和手工之间优化，在机械化、科技化的同时，最大限度的发挥人的价值。",
            },
          ],
        },
      ],
      year: "2020",
    },
    {
      id: 32,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2021/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2021/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/2021/3.jpg",
            },
            {
              id: 4,
              url: "images/blog/2021/4.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "杨金荣红木艺术馆在杭州西湖区成立，标志着国家级非遗项目《精细木作技艺》的保护、传承、创新和发展与民众接轨的开始，通过杭州艺术馆的窗口，让更多人了解非遗项目，了解木作技艺和文化。杭州艺术馆设立了公共展厅、茶室、 木作艺术品区、示范木工房和开放餐厅，改变了传统艺术馆的单向展示功能，形成了可以参与、交流和共享的艺术空间的突破。",
            },
          ],
        },
      ],

      year: "2021",
    },
    {
      id: 33,
      items: [
        {
          id: 1,
          pics: [
            {
              id: 1,
              url: "images/blog/2022/1.jpg",
            },
            {
              id: 2,
              url: "images/blog/2022/2.jpg",
            },
            {
              id: 3,
              url: "images/blog/2022/3.jpg",
            },
          ],
          contents: [
            {
              id: 1,
              text: "子日:工欲善其事，必先利其器。随着时代的变迁，老一辈的手艺人已经退出了历史的舞台，从业人员的年龄也已经偏高，所谓的全手工的传统手工艺，也逐渐被科技取代。研发新一代的，符合时代发展，提高工作效率和降低劳动强度的木工机械，已经势在必行。经过杨金荣师徒3年多的不断努力，新一代智能化木工机械的研发工作取得突破性进展， 智能样卵机、多功能工作台和立铣的研发 已经基本完成。现代科技的应用，使得传统手工艺在最大限度发挥人的价值同时，搭上人工智能、物联网和互联网的快车，必将进入新的辉煌。",
            },
          ],
        },
      ],
      year: "2022",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.floor(BlogData.length / 6 + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <section className="blog">
      <div className="container">
        <div className="row">
          {BlogData.slice((currentPage - 1) * 6, currentPage * 6)
            .map((data) => (
              <BlogCard key={data.id} data={data} />
            ))}
        </div>
        <PaginationDiv
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default BlogsContainer;
