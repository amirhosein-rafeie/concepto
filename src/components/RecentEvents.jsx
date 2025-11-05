import { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TiltCard from "../HomePage/TileCard";
import { recentEventsCategories } from "../Constants/Configs";
const RecentEvents = () => {
  const [showAllMobile, setShowAllMobile] = useState(true);
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

  const visibleEvents =
    typeof window !== "undefined" && window.innerWidth < 640 && !showAllMobile
      ? recentEventsCategories.slice(0, 1)
      : recentEventsCategories;

  return (
    <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Box
        dir="rtl"
        sx={{
          fontFamily: "Vazirmatn",
          display: "flex",
          alignItems: "center",
          my: 2,
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontFamily: "Vazirmatn", px: 1.5, fontWeight: 600 }}
        >
          رویدادهای اخیر
        </Typography>

        <Divider sx={{ flexGrow: 1, borderColor: "#e0e0e0" }} />

        <Box
          sx={{
            fontFamily: "Vazirmatn",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            ml: 2,
          }}
          className="xl:hidden"
        >
          <div
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="cursor-pointer font-semibold flex items-center"
          >
            مشاهده همه
            <NavigateBeforeIcon
              fontSize="medium"
              sx={{ fontFamily: "Vazirmatn", ml: 0.5 }}
            />
          </div>
        </Box>
      </Box>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
        {visibleEvents.map((cat) => (
          <TiltCard
            key={cat.id}
            width={560}
            height={208}
            className="rounded-2xl"
          >
            <div
              dir="rtl"
              className="flex bg-white rounded-2xl shadow-sm hover:shadow-md transition h-52"
            >
              <div className="relative w-2/5">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  className="absolute right-[22px] top-0 h-52 w-52 z-20 pointer-events-none -scale-x-100 mr-[195px]"
                >
                  {" "}
                  <path
                    d="M0,0 Q35,100 0,200"
                    fill="none"
                    stroke="#FCD34D"
                    strokeWidth="20"
                  />{" "}
                </svg>
              </div>

              <div className="flex flex-col justify-between p-6 w-3/5">
                <div>
                  <span className="text-gray-900 font-extrabold text-xl mb-1 block">
                    {cat.title}
                  </span>
                  <span className="text-gray-700 text-sm font-medium leading-relaxed">
                    {cat.discription}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm font-bold text-gray-600 mt-4 ">
                  <span className="flex items-center">
                    <CalendarMonthOutlinedIcon className="w-5 h-5 ml-1 text-gray-500" />
                    {cat.time}
                  </span>
                  <span className="flex items-center">
                    <LocationOnOutlinedIcon className="w-5 h-5 ml-1 text-gray-500" />
                    {cat.location}
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};

export default RecentEvents;
