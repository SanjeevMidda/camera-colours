import React from "react";

const Color = ({ color, setLenseColor }) => {
  let styles = {
    background: color,
  };
  return <div className="color" style={styles} onClick={setLenseColor}></div>;
};

export default Color;
