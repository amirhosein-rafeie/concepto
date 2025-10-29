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
    <div className="font-vazir relative" ref={elementRef}>
      {withCircle && (
        <span
          aria-hidden
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 block w-[85px] h-[85px] rounded-full bg-[#FFECB3] opacity-60"
        />
      )}
      <div className="text-4xl font-bold text-gray-800 mb-6">
        {showPlus && <span className="ml-1">+</span>}
        {toPersianDigits(count.toLocaleString())}
      </div>
      <div className="text-lg text-gray-600 font-medium">{title}</div>
    </div>
  );
};

export default Statisticscounter;
