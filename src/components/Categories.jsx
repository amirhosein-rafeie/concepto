import { useState, useEffect, Suspense, lazy } from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { categories } from "../Constants/Configs";
// import {
//   calc,
//   Ai,
//   bioTech,
//   btc,
//   coding,
//   Ecom,
//   grapghic,
//   medic,
//   music,
//   scince,
//   media,
//   space,
//   transport,
//   cinema,
// } from "../assets/images/index.js";

// const categories = [
//   { id: 1, name: "هوش مصنوعی", discription: "هوش مصنوعی", img: Ai },
//   { id: 2, name: "برنامه نویسی", discription: "برنامه نویسی", img: coding },
//   { id: 3, name: "ارز دیجیتال", discription: "ارز دیجیتال", img: btc },
//   { id: 4, name: "حسابداری", discription: "حسابداری", img: calc },
//   { id: 5, name: "گرافیک", discription: "گرافیک", img: grapghic },
//   { id: 6, name: "رسانه ها", discription: "رسانه ها", img: media },
//   { id: 7, name: "هوا فضا", discription: "هوا فضا", img: space },
//   { id: 8, name: "پزشکی", discription: "پزشکی", img: medic },
//   {
//     id: 9,
//     name: "تجارت الکترونیک",
//     discription: "تجارت الکترونیک",
//     img: Ecom,
//   },
//   { id: 10, name: "علمی", discription: "علمی", img: scince },
//   { id: 11, name: "موسیقی", discription: "موسیقی", img: music },
//   { id: 12, name: "بیو تکنولوژی", discription: "بیو تکنولوژی", img: bioTech },
//   { id: 13, name: "فیلم و سینما", discription: "فیلم و سینما", img: cinema },
//   { id: 14, name: "حمل و نقل", discription: "حمل و نقل", img: transport },
// ];

const Categories = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);
  const [, setIsemobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );
  useEffect(() => {
    const handleResize = () => {
      setIsemobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCategories =
    typeof window !== "undefined" && window.innerWidth < 640 && !showAllMobile
      ? categories.slice(0, 8)
      : categories;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-6">
      <div className="flex items-center justify-between">
        <Divider
          textAlign="right"
          sx={{
            flexGrow: 1,
            "&::before": { width: "100%" },
            "&::after": { width: "0%" },
          }}
        >
          دسته بندی
        </Divider>

        <div className="ml-3 block sm:hidden">
          <IconButton
            color="primary"
            onClick={() => setShowAllMobile(!showAllMobile)}
            size="small"
          >
            {showAllMobile ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}
          </IconButton>
        </div>
      </div>

      <div
        className={`mt-6 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-items-center transition-all duration-500 ${
          !showAllMobile ? "sm:max-h-full" : "max-h-full"
        } ${!showAllMobile ? "overflow-hidden sm:overflow-visible" : ""}`}
        style={{
          maxHeight:
            typeof window !== "undefined" &&
            window.innerWidth < 640 &&
            !showAllMobile
              ? "320px"
              : "none",
        }}
      >
        {visibleCategories.map((cat) => (
          <button
            onClick={() => window.open("OTP", "_blank")}
            key={cat.id}
            className="flex flex-col items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-blue-500"
            />
            <span className="mt-2 text-xs sm:text-sm font-medium text-gray-600 text-center">
              {cat.discription}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
