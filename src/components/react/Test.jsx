import { useState } from "react";

const images = "/images/nanosafe/Maquina01.png";

const Test = () => {
  return (
    <div style={{ position: "relative", width: "300px" }}>
      <img
        key={index}
        src={images}
        style={{
          display: index === activeIndex ? "block" : "none",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Test;
