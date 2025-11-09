import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import BoltIcon from "@mui/icons-material/Bolt";
import SaveIcon from "../assets/Save.png";
import Flag from "../assets/flag.png";
import { initialList } from "../Constants/Configs";

const Mainsearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramQ = searchParams.get("q") || "";
  const focusRequested = searchParams.get("focus") === "1";

  const [query, setQuery] = useState(paramQ);
  const [companiesList] = useState(initialList);
  const inputRef = useRef(null);

  useEffect(() => {
    setQuery(paramQ);
  }, [paramQ]);

  useEffect(() => {
    if (focusRequested && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [focusRequested]);

  const filtered = companiesList.filter((c) =>
    c.name
      .normalize("NFKD")
      .toLowerCase()
      .includes(query.normalize("NFKD").toLowerCase())
  );

  const handleChange = (e) => {
    const v = e.target.value;
    setQuery(v);
    const p = new URLSearchParams();
    if (v) p.set("q", v);
    setSearchParams(p, { replace: true });
  };

  return (
    <section className="flex justify-center bg-[#F3F5F6] py-8">
      <div className="w-[1224px] bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <div className="flex items-center gap-2">
            <img src={Flag} alt="flag" className="w-5 h-5" />
            <h2 className="font-semibold text-gray-800">پیشنهادها</h2>
          </div>
          <div className="flex items-center gap-1 text-[#0D6EFD] cursor-pointer">
            <span>مشاهده بیشتر</span>
            <BoltIcon sx={{ fontSize: 16 }} />
          </div>
        </div>

        <div className="mb-4">
          <input
            ref={inputRef}
            dir="rtl"
            value={query}
            onChange={handleChange}
            placeholder="جست‌وجو در پیشنهادها..."
            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none"
          />
        </div>

        <div className="flex flex-col divide-y">
          {filtered.length > 0 ? (
            filtered.map((company, index) => (
              <div
                key={company.id + "-" + index}
                className={`flex items-center justify-between px-4 rounded-lg transition h-[72px] ${
                  index === 0
                    ? "shadow-sm bg-white hover:shadow-md"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="w-10 h-10 rounded-[12px]"
                  />
                  <span className="text-gray-800 text-sm font-medium">
                    {company.name}
                  </span>
                </div>
                <img
                  src={SaveIcon}
                  alt="save"
                  className="w-4 h-4 cursor-pointer opacity-80 hover:opacity-100"
                />
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              هیچ نتیجه‌ای یافت نشد.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Mainsearch;
