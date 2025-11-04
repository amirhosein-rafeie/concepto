import { useSelector } from "react-redux";
import { companiesList } from "../Constants/Configs";
import SearchHead from "./SearchHead";
import FilterBar from "./Filterbar";
import FilterBox from "../components/FilterBox";
// import DataList from "../components/DataList";
const MainSearch = () => {
  const { filterType } = useSelector((state) => state.data);

  const getFilteredData = () => {
    let sorted = [...companiesList];
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

  const filteredCompanies = getFilteredData();

  return (
    <div className="bg-gray-50 max-w-full flex flex-row items-center">
      <SearchHead />
      <FilterBox />
      {/* <DataList /> */}
      <FilterBar />
      <div className="w-[808px] bg-white rounded-2xl border border-dashed border-gray-300 mt-4 p-5 flex flex-col gap-2">
        {filteredCompanies.map((cat) => (
          <div
            key={cat.id}
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
