import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { companiesList, SearchInvestor } from "../Constants/Configs";
import SearchHead from "./SearchHead";
import FilterBar from "./Filterbar";
import FilterBox from "../components/FilterBox";
import { setData } from "../redux/filterSlice";

const MainSearch = () => {
  const dispatch = useDispatch();

  const { filterType } = useSelector((state) => state.data);
  const { activeType } = useSelector((state) => state.data);
  const { filteredData } = useSelector((state) => state.filter);

  const sourceData =
    activeType === "companies" ? companiesList : SearchInvestor;

  useEffect(() => {
    dispatch(setData(sourceData));
  }, [dispatch, sourceData]);

  const getSortedData = () => {
    let sorted = [...filteredData];
    switch (filterType) {
      case "popular":
        sorted.sort((a, b) => b.likes - a.likes);
        break;
      case "visited":
        sorted.sort((a, b) => b.views - a.views);
        break;
      case "topIran":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "topIndustry":
        sorted.sort((a, b) => b.industryScore - a.industryScore);
        break;
      default:
        break;
    }
    return sorted;
  };

  const displayData = getSortedData();

  return (
    <div className="bg-gray-50  flex flex-start justify-center items-center">
      <div>
        <SearchHead /> <FilterBar />
        <FilterBox />
      </div>

      <div className="bg-white rounded-2xl border border-dashed border-gray-300 mt-4 p-5 flex flex-col gap-2 flex-start">
        {displayData.map((cat) => (
          <div
            key={cat.id ?? cat.name}
            className="w-3xl h-[119px] flex justify-between items-center border-b border-gray-200 py-2"
          >
            <div className="flex items-center gap-4">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-10 h-10 rounded-md border border-gray-200 object-cover"
              />
              <span className="font-semibold text-gray-700">{cat.name}</span>
            </div>

            <span className="text-gray-600 w-[200px]">{cat.category}</span>
            <span className="text-gray-500 w-[150px]">{cat.location}</span>
            <span className="text-gray-400 w-[250px]">{cat.explanation}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSearch;
