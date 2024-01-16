import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend",
        icons: [<FaReact />, <SiNextdotjs />, <SiRedux />, <FaHtml5 />],
      },
      {
        title: "Backend",
        icons: [<FaNodeJs />],
      },
      {
        title: "Programming Language",
        icons: [<FaJs />],
      },
      {
        title: "Styling",
        icons: [<SiTailwindcss />, <FaCss3 />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        company: "I.I.M., Kozhikode, Kerala",
        title: "Artificial Intelligence and Machine Learning ",
        stage: "Mar’21 - Feb’23",
      },
      {
        company: "Udemy",
        title: "The Complete 2023 Web Development Bootcamp -",
        stage: "2021",
      },
      {
        company: "Johns Hopkins University",
        title: "The Data Scientist's Toolbox -",
        stage: "2019",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        company: "RapidShyp",
        title: "Software Engineer",
        stage: "2023 - Present",
      },
      {
        company: "Cognizant",
        title: "Associate",
        stage: "2021 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        company: "J.S.S Academy Of Technical Education",
        title: "Bachelor of Technology",
        stage: "2016-2020",
      },
    ],
  },
];
import Image from "next/image";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[250px]  "
      >
        {/* side image  */}
        <Image
          src={"/avatar.png"}
          width={737}
          height={678}
          alt=""
          className="z-0 w-full h-full opacity-50"
        />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl mb-4"
          >
            Captivating<span className="text-accent"> stories</span> birth
            magnificient designs.
          </motion.h2>
          <motion.p
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            In my journey as a frontend developer, I believe that captivating
            stories give birth to magnificent designs. Each line of code, like a
            plot twist, intertwines with visual elements, creating an immersive
            digital narrative. Explore my portfolio to witness how I blend
            storytelling and design, transforming technology into enchanting
            user experiences. Let's embark on a journey where every click
            unveils a new chapter in the art of frontend development.
          </motion.p>

          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  ">
                <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={7} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                  Years of experience
                </div>
              </div>

              {/* client */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  ">
                <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={7} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                  Satisfied Clients
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0  ">
                <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={7} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent  after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]  after:absolute  after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/70 "
                >
                  <div className="font-light mb-2 md:mb-0 text-accent">
                    {item.company}
                  </div>
                  <div className="  mb-2 md:mb-0">{item.title}</div>

                  <i className=" ">{item.stage}</i>
                  <div className="flex gap-x-4">
                    {" "}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-3xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
