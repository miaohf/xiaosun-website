import React from "react";
import ServiceCard from "../components/ServiceCard";
import FormContainer from "../containers/FormContainer";
import Paragraph from "../components/Paragraph";

const ServiceContainer01 = () => {
  const TeamData = [
    {
      id: 1,
      text: "代表江苏省工艺品进出口公司签订了第一份红木制品外销合同 （金额为100万外汇人民币）",
      date: "1980年8月",
    },
    {
      id: 2,
      text: "在美国纽约23街参加江苏省出口商品展销会，首次将江苏红木家具、漆器推向美国市场",
      date: "1981年11月",
    },
    {
      id: 3,
      text: "起草并颁发了《红木制品质量验收标准及方法》，结束了原来红木制品无质量标准的历史（中国工艺品进出口公司江苏省分公司）",
      date: "1982年12月29日",
    },
    {
      id: 4,
      text: "首次进口德国飽尔曼公司全自动蒸汽窑式木材干燥机",
      date: "1982年",
    },
    {
      id: 5,
      text: "首次到泰国、老抛等东南亚国家采购红木原材，打破了原来依靠中间商的局面",
      date: "1982年",
    },
    {
      id: 6,
      text: "带领江苏红木行业实现出口总金额全国第一，305万美金出口额占全国三分之一",
      date: "1983年",
    },
    {
      id: 7,
      text: "首次在云南瑞丽晚盯用人民币进口红木，结束了必须用外汇购买红木的历史",
      date: "1985年",
    },
    {
      id: 8,
      text: "江苏工美红木文化艺术研究所创始所长 （江苏省工艺美术行业协会）",
      date: "1999年2月10日",
    },
    {
      id: 9,
      text: "起草并颁布了第一个红木行业工艺标准《红木制品制作工艺质量要求 DB32/T368-2000》",
      date: "2000年1月10日",
    },
    {
      id: 10,
      text: "江苏省工艺美术名人（江苏省轻工业厅）",
      date: "2000年1月",
    },
    {
      id: 11,
      text: "高级工艺美术师（江苏省人事厅）",
      date: "2003年9月30日",
    },
    {
      id: 12,
      text: "红木制品国家最高司法鉴定责任人（最高法院批准）",
      date: "2004年9月2日",
    },
    {
      id: 13,
      text: "国际木文化学会副会长、特聘专家 ",
      date: "2003年至今",
    },
    {
      id: 14,
      text: "研究员级高级工艺美术师 （江苏省人事厅）",
      date: "2006年10月26日",
    },
    {
      id: 15,
      text: "文化部委托中国工艺美术协会聘请作为仙游、新会、东阳、淪博等地古典家具之都、木雕之都称号评选专家",
      date: "2006年-2010年",
    },
    {
      id: 16,
      text: "第四届江苏省工艺美术大师 （江苏省人民政府）",
      date: "2008年2月",
    },
    {
      id: 17,
      text: "江苏省非物质文化遗产“精细木作工艺”代表性传承人",
      date: "2008年11月",
    },
    {
      id: 18,
      text: "国家文化部培训项目“中国古典家具高级研修班”主讲教授 （上海工艺美术学院 ）",
      date: "2010年-2011年",
    },

    {
      id: 19,
      text: "国家文化部培训项目“中国古典家具高级研修班”主讲教授 （上海工艺美术学院 ）",
      date: "2010年-2011年",
    },
    {
      id: 20,
      text: "非物质文化遗产项目“精细木作技艺”唯一的代表性传承人（国务院批准文化部确定第三批国家级非遗项目扩展项目 ）",
      date: "2011年 5月23日",
    },
    {
      id: 21,
      text: "上海文化出版社出版了近30万字的杨金荣专著《红木文化谈数》（国家艺术基金 ）",
      date: "2017年",
    },
    {
      id: 22,
      text: "作为国家级非遗传承人首次公开收徒。（江苏省文化和旅游厅非遗处 2019年）",
      date: "2019年",
    },

    {
      id: 23,
      text: "江苏工美红木文化艺术研究所荣誉所长、终身高级研究员 （江苏工美红木文化艺术研究所 ）  ",
      date: "2022年11月",
    },
    {
      id: 24,
      text: "作品国内外获奖数十次， 在国内外报纸杂志和专业期刊发表文章、采访、演讲上百篇（次）。",
      date: "至今",
    },
  ];
  return (
    <main className="wrapper">
      <section className="services inner in-service pb-0">
        <div className="container">
          {/* {TeamData.reverse().map((data) => ( */}
          {TeamData.map((data) => (
            // <BlogCard key={data.id} data={data} />
            <div>
              <h7 className="text-olive">{data.date}</h7>
              {/* <p></p> */}
              <Paragraph text={data.text} />
            </div>
          ))}
        </div>
      </section>

      {/* <Testimoals /> */}
      {/* <FormContainer /> */}
    </main>
  );
};

export default ServiceContainer01;
