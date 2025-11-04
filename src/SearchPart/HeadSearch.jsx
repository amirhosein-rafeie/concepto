import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";

const HeadSearch = () => {
  return (
    <div className="flex items-center w-full px-6 py-3 border-b border-gray-200">
      <CropSquareOutlinedIcon sx={{ color: "#E9EAEE", marginLeft: "10px" }} />
      <div className="flex justify-between w-full font-bold text-gray-600 text-sm">
        <span className="w-1/4 text-right pr-4 border-l border-gray-300">
          نام شرکت
        </span>
        <span className="w-1/4 text-right pr-4 border-l border-gray-300">
          صنعت
        </span>
        <span className="w-1/4 text-right pr-4 border-l border-gray-300">
          مکان شرکت
        </span>
        <span className="w-1/4 text-right pr-4">توضیحات</span>
      </div>
    </div>
  );
};

export default HeadSearch;
