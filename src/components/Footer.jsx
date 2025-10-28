import React from "react";
import ConceptoLogo from "../assets/concepto.png";
import SamanLogo from "../assets/saman.png";
import Location from "../assets/Location.png";
import Phone from "../assets/Phone.png";
import LinkedIn from "../assets/_Linkedin.png";
import Instagram from "../assets/_Instagram.png";
import Facebook from "../assets/_Facebook.png";
import Twitter from "../assets/twitter.png";
import Tooltip2 from "../assets/Tooltip2.jpg";

const Footer = () => {
  const radialGradient = `radial-gradient(circle at 50% 10%,#0148B0 25%,#00183BBF 75%)`;
  const toPersianDigits = (str) => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return str.replace(/\d/g, (d) => persianDigits[+d]);
  };

  return (
    <footer className="relative w-full overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-center bg-cover scale-110 blur-sm brightness-75"
          style={{ backgroundImage: `url(${Tooltip2})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: radialGradient,
            mixBlendMode: "overlay",
            opacity: 1,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-10 py-10 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3">کانسپتو</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:opacity-80">
                      درباره ما
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80">
                      تماس با ما
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80">
                      اتاق خبر
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80">
                      قوانین و مقررات
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">خدمات مشتریان</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:opacity-80">
                      حساب کاربری
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80">
                      سؤالات متداول
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80">
                      راهنمای کار با سایت
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80">
                      گزارش باگ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">پیشنهاد کانسپتو</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:opacity-80">
                      لیست استارتاپ‌های ایرانی
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80">
                      ارزش‌گذاری استارتاپ‌ها
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80">
                      ایده‌های استارتاپی
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:opacity-80">
                      محبوب‌ترین شرکت‌ها
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 mt-4">
              <img
                src={ConceptoLogo}
                alt="Concepto Logo"
                className="w-[132px] h-[16px] rounded-md object-cover"
              />
              <p className="text-sm leading-relaxed opacity-90">
                استارتاپ‌هایی که آینده را شکل می‌دهند. از ایده‌های نوآورانه تا
                پروژه‌های پیشرفته، جهان استارتاپی در اینجا کنار هم جمع شده‌اند.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="text-lg font-semibold">
              از جدیدترین اخبار مطلع شوید
            </h3>

            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 bg-white/90 text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <button className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition-all duration-150">
                عضویت
              </button>
            </div>

            <div className="flex items-start gap-3 mt-2">
              <img src={Location} alt="Location" className="w-5 h-5 mt-1" />
              <p className="text-sm leading-relaxed">
                آدرس: تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img src={Phone} alt="Phone" className="w-5 h-5" />
              <p className="text-sm">شماره تماس: ۰۹۱۲۳۴۵۶۷۸۹</p>
            </div>

            <div>
              <div className="text-sm font-semibold mb-2">
                ما را در شبکه‌های اجتماعی دنبال کنید
              </div>
              <div className="flex items-center gap-3">
                {[Facebook, LinkedIn, Instagram, Twitter].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:scale-110 transition-transform duration-150"
                  >
                    <img
                      src={icon}
                      alt="Social"
                      className="w-8 h-8 opacity-80 hover:opacity-100"
                    />
                  </a>
                ))}

                <div className="ml-auto flex items-center">
                  <img
                    src={SamanLogo}
                    alt="samaneh Logo"
                    className="w-[72px] h-[76px] object-contain opacity-90 hover:scale-105 hover:opacity-100 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs sm:text-sm opacity-80">
          © {toPersianDigits("1402")} - تمامی حقوق برای کانسپتو محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
