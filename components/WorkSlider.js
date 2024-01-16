import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

//import required modules
import { Navigation, Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides?.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group "
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* Image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={""}
                      />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#8e70e8] to-[#f494e4] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part1 */}
                          <div className="delay-100  ">LIVE</div>
                          {/* title part2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 ">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
