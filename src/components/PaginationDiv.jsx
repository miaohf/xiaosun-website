import React from "react";

const PaginationDiv = (props) => {
  const { currentPage, totalPages, onPageChange } = props;

  // 生成页码的数组，这里假设每次最多显示 5 个页码按钮
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-div">
      <ul className="pagination">
        {/* 渲染左箭头 */}
        <li>
          <a href="#" onClick={() => onPageChange(currentPage - 1)}>
            <i className="bi bi-chevron-left"></i>
          </a>
        </li>

        {/* 渲染页面数字按钮 */}
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              className={
                number === currentPage ? "page-number current" : "page-number"
              }
              href="#"
              onClick={() => onPageChange(number)}
            >
              {number}
            </a>
          </li>
        ))}

        {/* 渲染省略号 */}
        <li>...</li>
        {currentPage !== totalPages && (
          <li>
            <a href="#" onClick={() => onPageChange(currentPage + 1)}>
              <i className="bi bi-chevron-right"></i>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default PaginationDiv;
