import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DomainAddOutlinedIcon from "@mui/icons-material/DomainAddOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import { NavLink } from "react-router";

const SearchHead = () => {
  return (
    <div dir="rtl" className="">
      <h1 className="mr-[108px] w-[331px] h-[45px] ">جستجو بر اساس شرکت‌ها</h1>
      <div className="bg-white flex gap-x-6 w-screen h-[49px] mb-[-55px] items-center px-4">
        {[
          { icon: FavoriteBorderOutlinedIcon, label: "ذخیره شده‌ها", path: "" },
          { icon: DomainAddOutlinedIcon, label: "شرکت‌ها", path: "" },
          { icon: CallOutlinedIcon, label: "مخاطبین", path: "" },
          { icon: AttachMoneyOutlinedIcon, label: "سرمایه گذار", path: "" },
          { icon: EventOutlinedIcon, label: "رویداد‌ها", path: "" },
        ].map(({ icon, label }, index) => {
          const Icon = icon;
          return (
            <NavLink
              key={index}
              className="w-[133px] h-[49px] mr-18 rounded-3xl cursor-pointer flex items-center gap-1  hover:text-blue-600 focus:bg-gray-200 focus:text-blue-700 transition-colors border-b-gray-200 border-0"
            >
              <Icon fontSize="small" />
              <span>{label}</span>
            </NavLink>
          );
        })}
      </div>{" "}
    </div>
  );
};

export default SearchHead;
