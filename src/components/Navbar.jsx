import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BoltIcon from "@mui/icons-material/Bolt";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Logo } from "../assets/images";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 ">
      <div className="flex items-center justify-between flex-row-reverse">
        <NavLink to="/" className="shrink-0">
          <img src={Logo} alt="logo" className="w-40 h-auto" />
        </NavLink>

        <div className="hidden md:flex flex-1 max-w-lg ">
          <NavLink>
            {" "}
            <Button
              fullWidth
              onClick={{}}
              variant="outlined"
              startIcon={<SearchSharpIcon className="text-gray-400" />}
              sx={{
                fontFamily: "Vazirmatn",
                textTransform: "none",
                color: "rgb(107 114 128)",
                backgroundColor: "white",
                borderColor: "rgb(209 213 219)",
                borderRadius: "8px",
                px: 1.5,
                py: 1,
                "&:hover": {
                  backgroundColor: "rgb(249 250 251)",
                  borderColor: "rgb(156 163 175)",
                },
                "& .MuiButton-startIcon": {
                  marginLeft: "8px",
                  marginRight: "0",
                },
                direction: "rtl",
              }}
            >
              جست‌وجو کسب و کار
            </Button>
          </NavLink>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/ContactUs">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-none flex items-center gap-1 lg:bg-blue-500 md:bg-blue-500">
              <BoltIcon /> رایگان شروع کن!
            </button>
          </NavLink>

          <NavLink to="/NormalLogin">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-md flex items-center gap-1">
              <LoginOutlinedIcon /> ورود / ثبت نام
            </button>
          </NavLink>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 border rounded-md"
          >
            <MenuRoundedIcon />
          </button>
          <NavLink to="/ContactUs">
            <button className="p-2 border rounded-md">
              <BoltIcon />
            </button>
          </NavLink>
          <NavLink to="/NormalLogin">
            <button className="p-2 border rounded-md">
              <LoginOutlinedIcon />
            </button>
          </NavLink>
        </div>
      </div>

      <div className="hidden md:flex justify-end bg-white border-t border-gray-100 px-4 sm:px-6 lg:px-8 py-2 gap-6 text-sm font-medium text-gray-700">
        <NavLink to="/companies" className="hover:text-blue-600">
          شرکت ما
        </NavLink>
        <NavLink to="/job-offers" className="hover:text-blue-600">
          فرصت‌های شغلی
        </NavLink>
        <NavLink to="/news-and-events" className="hover:text-blue-600">
          اخبار و رویدادها
        </NavLink>
        <NavLink to="/about-us" className="hover:text-blue-600">
          درباره ما
        </NavLink>
        <NavLink to="/contact-us" className="hover:text-blue-600">
          تماس با ما
        </NavLink>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-3">
          <NavLink
            to="/companies"
            className="text-gray-700 hover:text-blue-600"
          >
            شرکت ما
          </NavLink>
          <NavLink
            to="/job-offers"
            className="text-gray-700 hover:text-blue-600"
          >
            فرصت‌های شغلی
          </NavLink>
          <NavLink
            to="/news-and-events"
            className="text-gray-700 hover:text-blue-600"
          >
            اخبار و رویدادها
          </NavLink>
          <NavLink to="/about-us" className="text-gray-700 hover:text-blue-600">
            درباره ما
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-gray-700 hover:text-blue-600"
          >
            تماس با ما
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
