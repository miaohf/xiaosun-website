import React from "react";
import BlogsContainer from "../../containers/BlogsContainer10";
import PageBanner from "../../containers/PageBanner";

const Blog = () => {
  return (
    <>
      {/* <PageBanner pageTitle='Pages' title="发展历程" activePage="Blog"></PageBanner> */}
      <main className="wrapper">
        <BlogsContainer />
      </main>
    </>
  );
};

export default Blog;
