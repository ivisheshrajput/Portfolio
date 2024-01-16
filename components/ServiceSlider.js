import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxRocket,
  RxReader,
  RxArrowTopRight,
} from "react-icons/rx";
//import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Incorporate brand colors, logos, and typography cohesively into the website design.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Design websites that adapt gracefully to different screen sizes and devices.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Full-stack responsive websites which have intuitive UI, ensuring seamless experiences. ",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description:
      "Excel in delivering, compelling and engaging content tailored to your brand.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Elevate your website's ranking, boost organic traffic, and enhance online presence.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300  ">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300 " />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
