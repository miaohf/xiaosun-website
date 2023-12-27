import React from "react";

const BlockGalleryBlog = ({ props }) => {
  // console.log("props: ", props);
  const style = {
    height: "400px", // 控制宽度
    margin: "20 auto", // 水平居中
    // display: "block", // 确保块级元素
  };
  return (
    <figure>
      <ul className="blocks-gallery-grid">
        <li className="blocks-gallery-item mb-0 me-0">
          <figure>
            {props.map((img) => (
              <a href={img}>
                <img src={img} alt="img" style={style} />
              </a>
            ))}
          </figure>
        </li>

        {/* <li className="blocks-gallery-item mb-0 me-0">
                    <figure>
                        <a href="#"><img src={props.img} alt="img" style={style} /></a>
                    </figure>
                </li> */}
      </ul>
    </figure>
  );
};

export default BlockGalleryBlog;
