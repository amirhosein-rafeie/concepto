import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import { companiesList } from "../Constants/Configs";
import FilterBox from "../components/FilterBox";
import SearchHead from "./SearchHead";
const AdvisorSearch = () => {
  return (
    <div>
      {" "}
      <SearchHead />{" "}
      <div
        className="w-[808px] h-[934px] opacity-100 flex flex-col gap-2 p-5 border-2 border-dashed border-gray-300 rounded-2xl bg-white shadow-sm "
        style={{ transform: "rotate(0deg)" }}
      >
        {" "}
        <div className="flex items-center w-full px-6 py-3 border-b border-gray-200 font-bold text-gray-600 text-sm">
          <CropSquareOutlinedIcon
            sx={{ color: "#E9EAEE", marginLeft: "10px" }}
          />
          <div className="flex justify-between w-full">
            <span className="w-1/4 text-right pr-4 border-l border-gray-300">
              نام شرکت/نام شخص
            </span>
            <span className="w-1/4 text-right pr-4 border-l border-gray-300">
              میزان سرمایه
            </span>
            <span className="w-1/4 text-right pr-4 border-l border-gray-300">
              خروجی‌ها
            </span>
            <span className="w-1/4 text-right pr-4">مکان</span>
          </div>
        </div>
        {companiesList.map((cat, index) => (
          <div
            key={index}
            className="flex items-center w-full px-6 py-3 border-b border-gray-200 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
            style={{
              height: "119px",
              paddingTop: "8px",
              paddingBottom: "8px",
            }}
          >
            <CropSquareOutlinedIcon
              sx={{ color: "#E9EAEE", marginLeft: "10px" }}
            />
            <div className="flex justify-between w-full text-gray-700 text-sm">
              <span className="w-1/4 flex items-center gap-2 text-right pr-4 ">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-8 h-8 object-cover rounded-md "
                />
                {cat.name}
              </span>

              <span className="w-1/4 text-right pr-4 b">
                {cat.capital ? cat.capital.toLocaleString() : "۱۳۰,۰۰۰,۰۰۰"}
              </span>

              <span className="w-1/4 text-right pr-4 ">
                {cat.output ? cat.output.toLocaleString() : "۵۷۷"}
              </span>

              <span className="w-1/4 text-right pr-4">{cat.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisorSearch;
