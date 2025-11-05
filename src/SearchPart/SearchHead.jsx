import { NavLink } from "react-router-dom";
import { MainSearchComponent } from "../Constants/Configs";

const SearchHead = () => {
  return (
    <div dir="rtl" className="w-full bg-white border-b border-gray-200">
      <h1 className="mr-[108px] w-[331px] h-[45px] text-lg font-bold text-gray-800 pt-4">
        جستجو بر اساس شرکت‌ها
      </h1>

      <div className="flex gap-x-6 w-full h-[49px] items-center px-4">
        {MainSearchComponent.map(({ icon, label, path }, index) => {
          const Icon = icon;
          return (
            <NavLink
              to={path}
              key={index}
              className={({ isActive }) =>
                `w-[133px] h-[49px] rounded-3xl flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 transition-colors ${
                  isActive ? "text-blue-700 font-semibold bg-gray-100" : ""
                }`
              }
            >
              <Icon fontSize="small" />
              <span>{label}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SearchHead;
