import Locationicon from "../assets/Location.png";
import Tooltip from "../assets/Tooltip.png";
import Star from "../assets/Star.png";

import { boxes } from "../Constants/Configs";
const Famous = () => {
  const toPersianDigits = (str) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return str
      .toString()
      .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
  };

  const radialGradient = `radial-gradient(circle at 50% 10%,#0148B0 25%,#00183BBF 85%)`;

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
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="h-[440px] w-[288px] bg-white rounded-[24px] shadow-lg overflow-hidden flex flex-col"
          >
            <div className="h-32 relative overflow-hidden rounded-b-[10%]">
              <img
                src={box.headerImage}
                alt={box.brand}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="relative flex items-center gap-4 px-6 py-4">
              <img
                src={box.prof}
                className="w-[60px] h-[60px] rounded-[3px] object-cover"
                alt={box.brand}
              />
              <div>
                <h3 className="text-lg font-semibold leading-tight">
                  {box.title}
                </h3>
                <p className="text-[#777] text-sm">{box.pre}</p>
              </div>
            </div>
            <div className="flex justify-between px-6 mb-2">
              <div className="bg-[#f7f8fa] rounded-md px-3 py-2 text-center w-[45%]">
                <p className="text-xs text-[#444859] mb-1">مخاطبین جدید</p>
                <strong className="text-[#0D6EFD]">
                  {toPersianDigits(box.newContacts)}
                </strong>
              </div>
              <div className="bg-[#f7f8fa] rounded-md px-3 py-2 text-center w-[60%]">
                <p className="text-xs text-[#444859] mb-1">
                  سرمایه‌گذاران جدید
                </p>
                <strong className="text-[#0D6EFD]">
                  {toPersianDigits(box.newInvestors)}
                </strong>
              </div>
            </div>
            <div className="flex-1 px-6">
              <p className="text-[#555] text-sm leading-relaxed">
                {box.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 px-6 pb-4">
              <div className="flex items-center gap-2">
                <img
                  src={Locationicon}
                  alt="Location icon"
                  className="w-4 h-4 object-contain"
                />
                <p className="text-sm text-[#666]">{box.city}</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={Star} className="w-[12px] h-[12px]" alt="star" />
                <span className="text-sm font-medium">
                  {toPersianDigits(box.rate)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Famous;
