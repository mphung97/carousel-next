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
          key={transitionState.image + "transition"}
          layoutId={transitionState.image}
          src={transitionState.image}
          alt="transition image"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{
            layout: { duration: 0.6 },
            opacity: { ease: "linear" },
          }}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
        />
      )}
      <motion.img
        key={currentSlide.data.image + "current"}
        src={currentSlide.data.image}
        alt="current image"
        className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </>
  );
}

export default BackgroundImage;
