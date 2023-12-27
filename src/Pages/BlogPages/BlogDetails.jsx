import React from 'react';
import BlogDetailsContainer from '../../containers/BlogDetailsContainer';
import PageBanner from '../../containers/PageBanner';

const BlogDetails = () => {
    return (
        <>
            <PageBanner pageTitle='Pages' title="传统木工手艺文化传承" activePage="Blog-Details"></PageBanner>
            <BlogDetailsContainer />
        </>
    );
};

export default BlogDetails;