import React, { useState } from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import SaveIcon from "../assets/Save.png";
import Flag from "../assets/flag.png";
import {
  BluSearch,
  snapp,
  AliBabaSearch,
  SnappFoodSearch,
  TapsiSearch,
  jobinjaSearch,
  IranCellSearch,
  DivarSearch,
  digikalaSearch,
} from "../assets/images";

const Mainsearch = () => {
  const companiesList = [
    { id: 1, name: "بلوبانک", img: BluSearch },
    { id: 2, name: "اسنپ", img: snapp },
    { id: 3, name: "علی‌بابا", img: AliBabaSearch },
    { id: 4, name: "اسنپ فود", img: SnappFoodSearch },
    { id: 5, name: "تپسی", img: TapsiSearch },
    { id: 6, name: "جابینجا", img: jobinjaSearch },
    { id: 7, name: "ایرانسل", img: IranCellSearch },
    { id: 8, name: "دیوار", img: DivarSearch },
    { id: 9, name: "دیجی‌کالا", img: digikalaSearch },
    { id: 10, name: "بلوبانک", img: BluSearch },
    { id: 11, name: "اسنپ فود", img: SnappFoodSearch },
  ];

  return (
    <section className="flex justify-center bg-[#F3F5F6] py-8">
      <div className="w-[1224px] bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <div className="flex items-center gap-2">
            <img src={Flag} alt="flag" className="w-5 h-5" />
            <h2 className="font-semibold text-gray-800">پیشنهادها</h2>
          </div>
          <div className="flex items-center gap-1 text-[#0D6EFD] cursor-pointer">
            <span>مشاهده بیشتر</span>
            <BoltIcon sx={{ fontSize: 16 }} />
          </div>
        </div>

        <div className="flex flex-col divide-y">
          {companiesList.map((company, index) => (
            <div
              key={company.id}
              className={`flex items-center justify-between px-4 rounded-lg transition h-[72px] ${
                index === 0
                  ? "shadow-sm bg-white hover:shadow-md"
                  : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={company.img}
                  alt={company.name}
                  className="w-10 h-10 rounded-[12px]"
                />
                <span className="text-gray-800 text-sm font-medium">
                  {company.name}
                </span>
              </div>
              <img
                src={SaveIcon}
                alt="save"
                className="w-4 h-4 cursor-pointer opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mainsearch;
