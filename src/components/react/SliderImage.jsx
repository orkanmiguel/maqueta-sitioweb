import { useState } from "react";

const images = [
  "/images/nanosafe/Maquina01.png",
  "/images/nanosafe/Maquina02.png",
  "/images/nanosafe/Maquina03.png",
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            style={{
              display: index === activeIndex ? "block" : "none",
              width: "100%",
            }}
          />
        ))}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: "10px",
              height: "10px",
              background: index === activeIndex ? "black" : "gray",
              borderRadius: "50%",
              margin: "0 5px",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
