import { NavLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TestBack = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-xl">صفحه تست</h1>
      <NavLink to="/" className="p-4 bg-blue-500 text-white rounded-lg">
        <ArrowForwardIcon className="rotate-180" /> بازگشت
      </NavLink>
    </div>
  );
};

export default TestBack;
