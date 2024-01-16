import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

//import required modules
import { Navigation, Pagination } from "swiper";

//icons
import { FaQuoteLeft } from "react-icons/fa";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Dario Urriola",
    position: "Mountain Biking",
    message:
      "We extend our heartfelt appreciation to our frontend developer for the outstanding work they've done on our website. Their proficiency in coding, eye for design, and responsiveness to our feedback made the entire development process smooth and enjoyable. The final product not only meets but surpasses our initial vision. Our users now enjoy a modern, intuitive interface that has positively impacted our online presence. It's clear that our frontend developer is not just a professional but someone who genuinely cares about delivering excellence. We're grateful for their contribution and look forward to future collaborations.",
  },
  {
    image: "/t-avt-2.png",
    name: "Hayley Himmelman",
    position: "Model",
    message:
      "We are extremely delighted with the exceptional work delivered by our frontend developer. Their attention to detail and creative approach have truly elevated our website to new heights. The seamless user interface and visually appealing design have not only enhanced our online presence but also significantly improved the overall user experience. Our team is grateful for their dedication, professionalism, and the ability to turn our vision into reality. We look forward to continuing this successful collaboration on future projects.",
  },
  {
    image: "/t-avt-3.png",
    name: "Tanya Naghten",
    position: "Athlete Trainer",
    message:
      "Our frontend developer has been a true asset to our project. Their technical expertise, innovative solutions, and commitment to delivering a high-quality product have exceeded our expectations. The user-friendly interface they crafted has received positive feedback from our clients, and we've seen a notable increase in engagement. Their ability to understand our requirements and translate them into a visually stunning and functional design is commendable. Working with them has been a pleasure, and we highly recommend their services to anyone seeking top-notch frontend development.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 ">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-4xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
