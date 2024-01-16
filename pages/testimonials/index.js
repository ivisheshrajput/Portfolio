import TestimonialSlider from "../../components/TestimonialSlider";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-30 text-center ">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl mb-4 xl-8 xl:mb-0"
        >
          What client <span className="text-accent ">say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
