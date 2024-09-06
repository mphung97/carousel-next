"use client";

import Image from "next/image";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import useMeasure from "react-use-measure";

function Control({
  setIndex,
  setIndexes,
  images,
}: {
  setIndex: (indexUpdater: (prevIndex: number) => number) => void;
  setIndexes: (indexUpdater: (prevIndex: number[]) => number[]) => void;
  images: string[];
}) {
  return (
    <div className="flex items-center justify-end h-16 gap-4">
      <button
        className="flex items-center justify-center w-16 h-16 text-white rounded-full border border-solid border-white shadow-lg"
        onClick={() =>
          // setIndex(
          //   (prevIndex) => (prevIndex - 1 + images.length) % images.length,
          // )
          setIndexes((prevIndex) => {
            return [];
          })
        }
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </button>
      <button
        className="flex items-center justify-center w-16 h-16 text-white rounded-full border border-solid border-white shadow-lg"
        onClick={() => setIndex((prevIndex) => (prevIndex + 1) % images.length)}
      >
        <ArrowRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

export default function Carousel({ images }: { images: string[] }) {
  const [ref, { width }] = useMeasure();
  const [index, setIndex] = useState(0);
  const [indexes, setIndexes] = useState<number[]>(Array.from(images.keys()));

  return (
    <>
      <div className="relative overflow-hidden" ref={ref}>
        <AspectRatio.Root ratio={16 / 9}>
          <Image
            key={images[index]}
            src={`/images/${images[index]}`}
            alt={images[index]}
            fill
            className="object-cover rounded-3xl shadow-xl"
            priority
          />
        </AspectRatio.Root>

        <div className="absolute bottom-[10%] left-[40%] bg-transparent flex flex-col items-start gap-4"></div>
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-5 grid-rows-5 gap-3">
          <div className="col-start-1 col-span-2 row-start-2 row-span-3">
            <div className="w-full p-6">
              <p className="text-white text-3xl">Lorem Ipsum</p>
              <p className="text-white font-bold text-[80px] leading-none">
                Contrary popular
              </p>
            </div>
          </div>
          <div className="col-start-3 col-span-3 row-start-3 row-span-3 z-10 relative">
            <div className="absolute bg-transparent flex flex-col items-start gap-4">
              <div className="flex gap-5">
                {indexes.map((index) => {
                  return (
                    <div className="relative w-[180px]">
                      <AspectRatio.Root ratio={2 / 3}>
                        <Image
                          key={images[index]}
                          src={`/images/${images[index]}`}
                          alt={images[index]}
                          fill
                          className="object-cover rounded-3xl shadow-xl"
                          priority
                        />
                      </AspectRatio.Root>
                      <div className="absolute bottom-0 left-0 p-4">
                        <p className="text-white text-sm">Lorem Ipsum</p>
                        <p className="text-white font-bold text-2xl">
                          Contrary popular
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Control
                images={images}
                setIndex={setIndex}
                setIndexes={setIndexes}
              />
            </div>
          </div>
          <div className="bg-blue-400 opacity-40 col-start-3 row-start-3 row-span-2 z-20 max-w-[180px]">
            3
          </div>
        </div>
      </div>
    </>
  );
}
