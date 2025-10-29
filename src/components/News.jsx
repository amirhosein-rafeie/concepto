import React from "react";
import Tooltip from "../assets/Tooltip.png";
import Greensnapp from "../assets/Greensnapp.png";
import Ali from "../assets/Ali.png";
import Datepic from "../assets/Date.png";
import Amir from "../assets/Omid.png";
import Farhad from "../assets/F.png";
import Atousa from "../assets/Atousa.png";
import Snappfood from "../assets/snappfood.png";
import { Boxes } from "../Constants/Configs";
const News = () => {
  const toPersianDigits = (str) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return str
      .toString()
      .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 py-10 px-4">
      <img src={Tooltip} className="w-full relative z-0" alt="Tooltip" />

      <div className="absolute flex flex-col gap-6 z-10">
        <div className="flex justify-between items-center w-full mb-8">
          <h2 className="text-2xl font-bold text-white">تازه ترین اخبار</h2>
          <button className="text-white text-sm hover:underline flex items-center gap-2">
            مشاهده همه
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {Boxes.map((box) => (
            <div
              key={box.id}
              className="h-[418px] w-[392px] bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
            >
              <div className="h-32 relative overflow-hidden rounded-b-[20%]">
                <img
                  src={box.headerImage}
                  alt={box.brand}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: "center" }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4"></div>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-[#777] text-sm mb-2">{box.pre}</p>
                  <h3 className="text-lg font-semibold mb-2 leading-tight">
                    {box.title}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed">
                    {box.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={box.profilepic}
                      alt={box.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-sm text-[#333]">{box.name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={Datepic} alt="Date icon" className="w-4 h-4" />
                    <p className="text-sm text-[#666]">
                      {toPersianDigits(box.date)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
