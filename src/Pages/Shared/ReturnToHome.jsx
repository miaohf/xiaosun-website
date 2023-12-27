import React from "react";

const ReturnToHome = () => {
  const returnToHome = () => {
    window.location.href = "/";
  };

  const currentPath = window.location.pathname;
  if (currentPath === "/blog") {
    return (
      <div id="mode_switcher" onClick={returnToHome}>
        <span>
          <i className="bi bi-house-fill text-white"></i>
        </span>
      </div>
    );
  }
};

export default ReturnToHome;
