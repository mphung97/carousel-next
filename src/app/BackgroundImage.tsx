import { SlideType } from "./types";
import { motion } from "framer-motion";

function BackgroundImage({
  transitionState,
  currentSlide,
}: {
  transitionState: SlideType;
  currentSlide: { data: SlideType; index: number };
}) {
  return (
    <>
      {transitionState && (
        <motion.img
          key={transitionState.image}
          layoutId={transitionState.image}
          src={transitionState.image}
          alt="transition image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
        />
      )}
      <motion.img
        key={currentSlide.data.image + "transition"}
        src={currentSlide.data.image}
        alt="current image"
        transition={{
          opacity: { ease: "linear" },
          layout: { duration: 0.6 },
        }}
        className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
      />
    </>
  );
}

export default BackgroundImage;
