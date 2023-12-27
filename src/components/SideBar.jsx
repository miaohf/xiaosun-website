import React from 'react';

const SideBar = () => {
    return (
        <div className="sidebar">

            <div className="widget widget_block widget_search">
                <form method="get" className="wp-block-search">
                    <div className="wp-block-search__inside-wrapper ">
                        <input type="search" className="wp-block-search__input" name="search" value="" placeholder="Search" required="" />
                        <button type="submit" className="wp-block-search__button"><i className="bi bi-search"></i></button>
                    </div>
                </form>
            </div>
            {/* <!-- end widget --> */}

            <div className="widget widget_block">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">本周新闻 <span className="title-line"></span></h2>
                    <ul className="wp-block-latest-posts__list wp-block-latest-posts">
                        <li><a href="/blog-details">让手艺拥抱科技</a></li>
                        <li><a href="/blog-details">让手艺拥抱科技</a></li>
                        <li><a href="/blog-details">让手艺拥抱科技</a></li>
                        <li><a href="/blog-details">让手艺拥抱科技</a></li>
                    </ul>
                </div>
            </div>
            {/* <!-- end widget --> */}

            {/* <div className="widget widget_block">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">Recent Comments <span className="title-line"></span></h2>
                    <ol className="wp-block-latest-comments">
                        <li><a href="#">Patric Doe</a> on <a href="#">传统木工手艺文化传承</a></li>
                        <li><a href="#">Jonathon Hall</a> on <a href="#">NewYork Seven Star Hotel</a></li>
                        <li><a href="#">Jonathon Hall</a> on <a href="#">传统木工手艺文化传承</a></li>
                    </ol>
                </div>
            </div> */}
            {/* <!-- end widget --> */}

            {/* <div className="widget widget_block">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">Archives <span className="title-line"></span></h2>
                    <ul className=" wp-block-archives-list wp-block-archives">
                        <li><a href="#">November 2021</a></li>
                        <li><a href="#">December 2020</a></li>
                        <li><a href="#">January 2019</a></li>
                        <li><a href="#">March 2018</a></li>
                    </ul>
                </div>
            </div> */}
            {/* <!-- end widget --> */}

            <div className="widget widget_block">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">分类 <span className="title-line"></span></h2>
                    <ul className="wp-block-categories-list wp-block-categories">
                        <li className="cat-item"><a href="#">工艺</a></li>
                        <li className="cat-item"><a href="#">技术</a></li>
                        <li className="cat-item"><a href="#">设计</a></li>

                    </ul>
                </div>
            </div>
            {/* <!-- end widget --> */}

            <div className="widget widget_block widget_tag_cloud">
                <div className="wp-block-group__inner-container">
                    <h2 className="widget-title">标签 <span className="title-line"></span></h2>
                    <ul className="wp-block-categories-list wp-block-categories">
                        <p className="wp-block-tag-cloud">
                            <a href="#" className="tag-cloud-link">工艺</a>
                            <a href="#" className="tag-cloud-link">技术</a>
                            <a href="#" className="tag-cloud-link">设计</a>
                        </p>
                    </ul>
                </div>
            </div>
            {/* <!-- end widget --> */}
        </div>
    );
};

export default SideBar;