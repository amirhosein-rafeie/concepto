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
    <section className="relative w-full flex flex-col items-center py-16 px-4">
      <div
        className="
          absolute inset-0 -z-10 h-[420px] md:h-[520px] overflow-hidden
          [clip-path:ellipse(120%_70%_at_50%_0%)]
        "
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-center bg-cover scale-110 blur-sm brightness-75"
          style={{ backgroundImage: `url(${Tooltip})` }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: radialGradient,
            mixBlendMode: "overlay",
            opacity: 1,
            pointerEvents: "none",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 100%)",
          }}
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl px-6">
        <div className="flex justify-between items-center w-full mb-4">
          <h2 className="text-2xl font-bold text-white">شرکت‌های محبوب</h2>

          <button className="text-white text-sm hover:underline flex items-center gap-2">
            <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
            مشاهده همه
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
                />
                <div className="absolute inset-0 bg-black/20"></div>
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
    </section>
  );
};

export default News;
