import { useState } from "react";

const TiltCard = ({ children, width = 600, height = 208, className = "" }) => {
  const [transform, setTransform] = useState("none");
  const degIncrement = 6;

  const getRotateDeg = (input, size) => {
    if (input < size * 0.33) return `-${degIncrement * 3}deg`;
    if (input < size * 0.66) return `-${degIncrement}deg`;
    if (input < size * 0.75) return "0deg";
    if (input < size * 0.9) return `${degIncrement}deg`;
    return `${degIncrement * 3}deg`;
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const rotateX = getRotateDeg(e.clientY - rect.top, height);
    const rotateY = getRotateDeg(e.clientX - rect.left, width);
    setTransform(`rotateX(${rotateX}) rotateY(${rotateY})`);
  };

  const handleMouseLeave = () => setTransform("none");

  return (
    <div
      className={`transition-transform duration-500 ease-out ${className}`}
      style={{
        transform,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        width,
        height,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;
