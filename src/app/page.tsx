import fs from "node:fs/promises";

// import Carousel from "./Carousel";
import Z from "./Z";
import { SlideType } from "./types";

export default async function Home() {
  const images = await fs.readdir("./public/images");
  // const data: SlideType[] = images.map((image) => ({
  //   image: `images/${image}`,
  //   title: "Lorem Ipsum",
  //   description:
  //     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  //   location: "Good and Evil",
  // }));

  const data: SlideType[] = [
    {
      image: "images/alexander-grigoryev-3BwgDLHK8Dc-unsplash.jpg",
      title: "Exploring the Depths of History",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      location: "Rome, Italy",
    },
    {
      image: "images/marek-piwnicki-Hs5gkoGI0IQ-unsplash.jpg",
      title: "Ancient Wisdom Rediscovered",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      location: "Athens, Greece",
    },
    {
      image: "images/marek-piwnicki-KWDrnghzjKk-unsplash.jpg",
      title: "The Rise of Civilization",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      location: "Carthage, Tunisia",
    },
    {
      image: "images/marek-piwnicki-SGB0V9UGe1w-unsplash.jpg",
      title: "Legacy of the Roman Empire",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      location: "Pompeii, Italy",
    },
    {
      image: "images/marek-piwnicki-fgZO-k47XTQ-unsplash.jpg",
      title: "The Lost Chronicles",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      location: "Alexandria, Egypt",
    },
    {
      image: "images/michael-pointner-pRpHqBjCn7Y-unsplash.jpg",
      title: "Mysteries of Antiquity",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      location: "Babylon, Iraq",
    },
  ];

  return <Z initialData={data} />;
}
