import React, { useState, useEffect, useRef } from "react";

const toPersianDigits = (str) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const Statisticscounter = ({
  title,
  number,
  showPlus = true,
  withCircle = true,
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2500;
      const increment = number / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div className="font-vazir relative inline-block" ref={elementRef}>
      {withCircle && (
        <span
          aria-hidden
          className="absolute z-0 w-[85px] h-[85px] rounded-full bg-[#FFECB3]"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      <div className="flex items-center gap-2 relative z-10 text-gray-800 text-4xl font-bold mb-1">
        {showPlus && <span className="ml-1">+</span>}
        {toPersianDigits(count.toLocaleString())}
        <span className="text-lg font-medium text-gray-600">{title}</span>
      </div>
    </div>
  );
};

export default Statisticscounter;
