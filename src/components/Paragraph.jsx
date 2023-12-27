import React from "react";

const Paragraph = (props) => {
  return (
    // <p style={{ "font-size": "14px", "letter-spacing": "0.5px", "line-height": "1.4", textAlign: "justify" }}>{props.text}</p>
    <p style={{ "font-size": "14px", "line-height": "1.6", textAlign: "justify", 'margin-bottom': '8px' }}>{props.text}</p>
  );
};

export default Paragraph;
