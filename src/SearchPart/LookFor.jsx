import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";

import BoltIcon from "@mui/icons-material/Bolt";
const Moshahede = () => {
  return (
    <div>
      <div className="flex   items-center rounded-t-2xl bg-white w-[808px] h-[78px] justify-between ">
        <span className="flex   ">
          <ListAltOutlinedIcon /> لیست شرکت ها
        </span>
        <button className="text-blue-600  hover:cursor-pointer ">
          {" "}
          <BoltIcon />
          مشاهده بیشتر
        </button>
      </div>
    </div>
  );
};
export default Moshahede;
