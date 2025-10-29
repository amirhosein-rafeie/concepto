import React from "react";
import Statisticscounter from "./Statisticscounter";

const Statistics = () => {
  return (
    <div className="relative z-10 bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
            <Statisticscounter
              number={112610}
              title="شرکت فعال"
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
            <Statisticscounter
              number={11}
              title="میلیارد تومان سرمایه گذاری"
            />
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
            <Statisticscounter
              number={496}
              title="سرمایه گذار"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
