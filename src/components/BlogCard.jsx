import React from 'react';
import Paragraph from "../components/Paragraph";
const BlogCard = ({ data }) => {
    // console.log(data)
    const { id, img, title, text, date, dateTime} = data;
    let shortText = text
    if (text.length > 150) {
        shortText = `${text.substring(0, 150)} ...`;
    }
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog_post mb-0">
                <img src={img} alt="img" />
                <div className="blog_content">
                    <h2 className="post-count">{id}</h2>
                    <div className="meta">
                        <time className="text-olive" dateTime={dateTime}>{date}</time>
                    </div>
                    <h5><a className="text-white">{title}</a></h5>
                    <Paragraph text={shortText}></Paragraph>
                    <div className="details_link"><a href={`/blog-details/${id}`}><span className="link_text">点击进入</span> <span className="link_icon"><span className="line"></span> <span className="circle"></span><span className="dot"></span></span></a></div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

