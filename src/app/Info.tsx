import { SlideType } from "./types";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

function AnimatedText({
  data,
  className,
}: {
  data: string;
  className: string;
}) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.p className={className} variants={variants} key={data}>
        {data}
      </motion.p>
    </span>
  );
}

function Info({
  transitionState,
  currentSlide,
}: {
  transitionState: SlideType;
  currentSlide: { data: SlideType; index: number };
}) {
  return (
    <>
      <motion.span key="info-span" layout className="mb-2 h-1 w-5 rounded-full bg-white" />
      <motion.div key="info-div" initial="hidden" animate="visible" className="flex flex-col">
        <AnimatedText
          data={transitionState.location ?? currentSlide.data.location}
          className="spacing overflow-hidden text-[#d5d5d6]"
        />
        <AnimatedText
          data={transitionState.title ?? currentSlide.data.title}
          className="my-1 text-4xl font-semibold md:my-3 md:text-8xl md:leading-[100px]"
        />
        <AnimatedText
          data={transitionState.description ?? currentSlide.data.description}
          className="text-xs text-[#d5d5d6]"
        />
      </motion.div>
    </>
  );
}

export default Info;
