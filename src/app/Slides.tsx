import { motion } from "framer-motion";
import { SlideType } from "./types";

function Slides({ data }: { data: SlideType[] }) {
  return (
    <>
      <div className="flex w-full gap-6">
        {data.map((slide, index) => {
          return (
            <motion.div
              key={slide.id}
              className="relative h-52 min-w-[250px] rounded-2xl shadow-md md:h-80 md:min-w-[250px]"
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0 } }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 20, stiffness: 100 }}
            >
              <motion.img
                layout
                src={slide.image}
                alt={`slide-${slide.id}`}
                className="absolute h-full w-full object-cover rounded-2xl brightness-75"
              />
              <motion.div className="absolute z-10 flex h-full items-end p-4">
                <motion.div>
                  <motion.div
                    layout
                    className="mb-2 h-[2px] w-3 rounder-full bg-white"
                  />
                  <motion.p
                    layoutId={slide.location}
                    className="text-xs text-[#d5d5d6]"
                  >
                    {slide.location}
                  </motion.p>
                  <motion.h1
                    layoutId={slide.title}
                    className="text-xl leading-6 text-white"
                  >
                    {slide.title}
                  </motion.h1>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default Slides;
