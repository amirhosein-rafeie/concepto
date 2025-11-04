import { useDispatch, useSelector } from "react-redux";
import { setFilterType } from "../redux/dataSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const filterType = useSelector((state) => state.data.filterType);

  const filters = [
    { label: "محبوب‌ترین", value: "popular" },
    { label: "پربازدیدترین", value: "visited" },
    { label: "برترین شرکت‌های ایرانی", value: "topIran" },
    { label: "برترین شرکت‌ها در هر صنعت", value: "topIndustry" },
  ];

  return (
    <div
      dir="rtl"
      className="w-full flex justify-start items-end gap-4 py-6 border-t border-gray-200 "
    >
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => dispatch(setFilterType(filter.value))}
          className={`w-[140px] h-10 border-2 rounded-2xl px-3 flex items-center justify-center gap-1 transition-all text-sm mr-[108px] ${
            filterType === filter.value
              ? "bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
