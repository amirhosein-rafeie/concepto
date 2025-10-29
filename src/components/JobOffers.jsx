import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { OfferCategories } from "../Constants/Configs";

const JobOffers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        <Divider
          textAlign="right"
          sx={{
            flexGrow: 1,
            "&::before": { width: "100%" },
            "&::after": { width: "0%" },
          }}
        >
          فرصت های شغلی
        </Divider>

        <div className="ml-3 block sm:hidden">
          <a href="/not-found">
            <IconButton color="primary" size="small">
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </a>
        </div>
      </div>

      <Swiper
        navigation={true}
        className="mySwiper mt-6 [&>.swiper-button-next]:hidden sm:[&>.swiper-button-next]:block [&>.swiper-button-prev]:hidden sm:[&>.swiper-button-prev]:block"
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1500,

          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        dir="rtl"
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          890: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {OfferCategories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="flex flex-col items-center justify-start bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-xs text-gray-600 mb-1">
                {cat.amount} فرصت شغلی
              </span>
              <a
                href="#"
                className="text-blue-500 text-xs font-medium hover:underline"
              >
                {cat.linkName}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JobOffers;
