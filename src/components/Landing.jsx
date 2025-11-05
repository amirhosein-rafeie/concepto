import React from "react";
import Button from "@mui/material/Button";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import image from "../assets/image.png";
import Land1 from "../assets/Land1.png";
import Land2 from "../assets/Land2.png";

const Landing = () => {
  return (
    <>
      <section className="p-5 min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF] font-vazir overflow-hidden">
        <div className="text-center max-w-[900px] px-4 mb-16 sm:mb-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-8 sm:mb-10 leading-[1.4]">
            با سرچ کمتر نتیجه بهتر بگیر
          </h1>

          <p className="text-xl text-gray-600 mb-12 sm:mb-16 leading-relaxed">
            کانسپتو اولین مرجع معتبر معرفی استارتاپ‌ها و شرکت‌های ایرانی
          </p>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center items-center gap-5">
            <Button
              variant="contained"
              startIcon={<BoltIcon />}
              sx={{
                fontFamily: "Vazirmatn",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "12px 32px",
                borderRadius: "50px",
                backgroundColor: "#0D6EFD",
                "&:hover": {
                  backgroundColor: "#0D6EFD",
                  boxShadow: "0 6px 20px 0 rgba(245, 158, 11, 0.6)",
                },
                boxShadow: "0 4px 14px 0 rgba(245, 158, 11, 0.4)",
                transition: "all 0.3s ease",
              }}
            >
              رایگان شروع کن!
            </Button>

            <Button
              variant="outlined"
              startIcon={<LoginOutlinedIcon />}
              sx={{
                direction: "ltr",
                fontFamily: "Vazirmatn",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "12px 32px",
                borderRadius: "50px",
                borderColor: "#6366f1",
                color: "#6366f1",
                borderWidth: "2px",
                "&:hover": {
                  borderColor: "#4f46e5",
                  backgroundColor: "rgba(98, 101, 242, 0.04)",
                },
                transition: "all 0.4s ease",
              }}
            >
              درباره کانسپتو
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full max-w-[1100px] h-[600px]">
          <img
            src={image}
            alt="main"
            className="relative z-10 w-[800px] h-auto rounded-3xl shadow-xl hidden sm:block"
          />

          <img
            src={Land1}
            alt="mobile"
            className="absolute right-20 top-6 w-[250px] h-auto z-20 rounded-2xl "
          />

          <img
            src={Land2}
            alt="dashboard"
            className="absolute left-10 -bottom-10 w-[400px] h-auto z-30 rounded-2xl shadow-2xl hidden sm:block"
          />
        </div>
      </section>
    </>
  );
};

export default Landing;
