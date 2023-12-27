import $ from "jquery";
import React, { useEffect, useState } from "react";

const UpperHeader = () => {
  // Hide header on scroll down
  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector("header .container").classList.add(".top-up");
    } else {
      document.querySelector("header .container").classList.remove(".top-up");
    }
  }

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    // Aside info bar
    $(".aside_open").click(function (e) {
      e.preventDefault();
      $(".aside_info_wrapper").addClass("show");
    });
    $(".aside_close").click(function (e) {
      e.preventDefault();
      $(".aside_info_wrapper").removeClass("show");
    });

    // Toggle Header Search
    $(".header_search .form-control-submit").click(function (e) {
      $(".open_search").toggleClass("active");
    });

    // Sticky Header
    var header = $("header");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 50) {
        header.addClass("bg-dark sticky");
      } else {
        header.removeClass("bg-dark sticky");
      }
    });
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header_inner d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="/" className="light_logo">
              <img src="/images/logo-light1.svg" alt="logo" />
            </a>
            <a href="/" className="dark_logo">
              <img src="/images/logo-dark.svg" alt="logo" />
            </a>
          </div>

          <div className="mainnav d-none d-lg-block">
            <ul className="main_menu">
              <li className="menu-item">
                <a href="/">主页</a>
              </li>
              <li className="menu-item">
                <a href="/products">主要藏品</a>
              </li>


              <li className="menu-item">
                <a href="/blog">发展历程</a>
              </li>

              <li className="menu-item">
                <a href="/team">关于我们</a>
              </li>
            </ul>
          </div>
          <div className="header_right_part d-flex align-items-center">
            <div id="open_search" className={isActive ? null : "active"}>
              <form className="search_form">
                <input
                  type="text"
                  name="search"
                  className="keyword form-control"
                  placeholder="Search..."
                />
                <button type="submit" className="form-control-submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>

            {/* Mobile Responsive Menu Toggle Button */}
            {/* <button type="button" className="mr_menu_toggle d-lg-none">
              <i className="bi bi-list"></i>
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default UpperHeader;
