import { useSelector } from "react-redux";
import { companiesList, SearchInvestor } from "../Constants/Configs";

export default function DataList() {
  const { activeType } = useSelector((state) => state.data);
  const { filters } = useSelector((state) => state.filter);

  const allData = activeType === "companies" ? companiesList : SearchInvestor;

  const filtered = allData.filter((item) => {
    const keywordMatch =
      item.name.includes(filters.keywords) ||
      item.explanation.includes(filters.keywords);
    const locationMatch = item.location?.includes(filters.location);
    const privateMatch = filters.privateOnly ? item.type === "private" : true;

    return keywordMatch && locationMatch && privateMatch;
  });

  return (
    <div className="p-4 flex flzex-col gap-4">
      {filtered.map((item) => (
        <div
          key={item.id}
          className="p-3 border rounded-xl flex items-center gap-3 hover:shadow-md transition"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.explanation}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
