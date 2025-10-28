import React, { useRef, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { LoginImage } from "../assets/images";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { NavLink } from "react-router-dom";
import { Logo } from "../assets/images";

export default function Otp1() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);
      if (index > 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index - 1),
          "",
          ...prevOtp.slice(index),
        ]);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-12 bg-gray-50 relative">
      <button
        className="absolute top-8 right-8 p-2 text-gray-700 hover:text-blue-600 transition duration-150 rounded-full"
        title="بازگشت به صفحه اصلی"
      >
        <NavLink to="/" className="logo">
          {" "}
          <ArrowForwardIcon className="w-8 h-8 transform rotate-180" />
        </NavLink>
      </button>

      <div
        className="flex flex-row items-center justify-center w-full max-w-[1500px] space-x-12"
        style={{ height: "912px", direction: "ltr" }}
      >
        <div className="shrink-0" style={{ width: "800px", height: "912px" }}>
          <img
            src={LoginImage}
            alt="login visual"
            className="w-full h-full object-cover rounded-[48px]"
          />
        </div>

        <div
          className="flex flex-col justify-center p-8 grow"
          style={{ width: "300px", height: "912px", direction: "rtl" }}
        >
          <div className="mb-12 text-right">
            <img src={Logo} alt="logo" className="w-198px h-24px " />
          </div>
          <div className="mb-10 text-right">
            <h2 className="text-3xl font-bold text-blue-950 mb-3 mr-12">
              اعتبارسنجی
            </h2>
            <p className="text-lg text-gray-500">
              کد ارسال شده به 09****** را وارد کنید
            </p>
          </div>
          <p className="text-lg text-gray-500">شماره اشتباه است؟</p>{" "}
          <NavLink
            to="/phonelogin"
            className="text-blue-600 font-bold cursor-pointer hover:text-blue-700"
          >
            {" "}
            اصلاح شماره
          </NavLink>
          <section className="bg-white py-10 dark:bg-dark">
            <div className="container">
              <form id="otp-form" className="flex gap-2">
                {otp.map((digit, index) => (
                  <input
                    required
                    dir="ltr"
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={handleInput}
                    onKeyDown={handleKeyDown}
                    onFocus={handleFocus}
                    onPaste={handlePaste}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="shadow-xs flex w-16 items-center justify-center rounded-lg border border-stroke bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
                  />
                ))}
                <div> </div>
              </form>
            </div>
          </section>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl mt-6 text-xl transition duration-200"
          >
            ورود
          </button>
          <div className="flex justify-between items-center mt-8 text-lg">
            <div className="text-blue-600 font-bold cursor-pointer hover:text-blue-700">
              <NavLink to="/normallogin" className="normallogin">
                {" "}
                ورود با کلمه عبور
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
