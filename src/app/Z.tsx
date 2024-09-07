"use client";

import { AnimatePresence } from "framer-motion";
import BackgroundImage from "./BackgroundImage";
import { SlideType } from "./types";
import { useState } from "react";
import Info from "./Info";
import Slides from "./Slides";
import Controls from "./Controls";

function Z({ initialData }: { initialData: SlideType[] }) {
  const initData = initialData[0];
  const [state, setState] = useState<SlideType[]>(initialData.slice(1));
  const [transitionState, setTransitionState] = useState<SlideType>(
    initialData[0],
  );
  const [currentSlide, setCurrentSlide] = useState<{
    data: SlideType;
    index: number;
  }>({
    data: initData,
    index: 0,
  });

  return (
    <main className="relative min-h-screen select-none overflow-hidden text-white antialiased">
      <AnimatePresence>
        <BackgroundImage
          key="z-bg-key"
          transitionState={transitionState}
          currentSlide={currentSlide}
        />
        <div key="z-div-key" className="absolute z-20 h-full w-full">
          {/* Header */}
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <Info
                transitionState={transitionState}
                currentSlide={currentSlide}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={state} />
              <Controls
                currentSlide={currentSlide}
                state={state}
                transitionState={transitionState}
                initData={initData}
                setState={setState}
                setTransitionState={setTransitionState}
                setCurrentSlide={setCurrentSlide}
                sliderData={initialData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

export default Z;
