import { NavLink } from "react-router-dom";
import { ERROR } from "../assets/images";
import Button from "@mui/material/Button";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center mt-16">
      <div>
        <img
          src={ERROR}
          alt="notFound"
          className="w-[500px] h-[450px] object-contain"
        />
      </div>

      <p className="font-bold mt-6 text-gray-700 text-lg">
        صفحه مورد نظر شما یافت نشد!
      </p>

      <NavLink to="/" className="mt-4">
        <Button variant="outlined">بازگشت به صفحه اصلی</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;
