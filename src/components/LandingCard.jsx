import React from "react";
import Phone from "../assets/Phone.png";
import Email from "../assets/Email.png";
import Setting from "../assets/Setting.png";
import Home from "../assets/Homepic.png";
import Magglass from "../assets/magglass.png";
import { cards } from "../Constants/Configs";
export default function LandingCard() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-20 py-10 px-4">
      {cards.map((card) => (
        <div key={card.id} className="flex flex-col items-center">
          <div className="relative">
            <div className="w-72 h-96 bg-blue-100 rounded-3xl absolute -top-2 -left-2"></div>
            <div className="relative w-72 h-96 bg-gray-200 rounded-3xl p-6 flex flex-col">
              {card.id === 2 ? (
                <>
                  <div className="bg-white rounded-2xl p-4 mb-6 flex items-center gap-3">
                    <img src={Setting} alt="Filter" className="w-5 h-5" />
                    <span className="text-gray-500 flex-1 text-center">
                      جستجو
                    </span>
                    <img src={Magglass} alt="Search" className="w-5 h-5" />
                  </div>
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <img
                      src={Home}
                      alt="Home"
                      className="w-28 h-28 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="grid grid-cols-2 justify-between">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                      <img src={Phone} alt="Phone" className="w-6 h-6" />
                    </div>
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                      <img src={Email} alt="Email" className="w-6 h-6" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white rounded-2xl h-32 mb-6 flex items-center justify-center">
                    <img
                      src={Home}
                      alt="Home"
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-white rounded-2xl p-3 flex-1 flex items-center justify-center">
                      <img src={Phone} alt="Phone" className="w-6 h-6" />
                    </div>
                    <div className="bg-white rounded-2xl p-3 flex-1 flex items-center justify-center">
                      <img src={Email} alt="Email" className="w-6 h-6" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <p className="text-center text-[20px] font-bold text-gray-800 mt-4 max-w-70">
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}
