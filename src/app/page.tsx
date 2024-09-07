import fs from "node:fs/promises";

// import Carousel from "./Carousel";
import Z from "./Z";
import { SlideType } from "./types";
import { nanoid } from "nanoid";

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
      id: nanoid(),
      image: "images/alexander-grigoryev-3BwgDLHK8Dc-unsplash.jpg",
      title: "Exploring the Depths of History",
      description:
        "Rome, the center of one of the greatest empires in history, is rich in ancient architecture, politics, and culture that laid the foundation for modern civilization.",
      location: "Rome, Italy",
    },
    {
      id: nanoid(),
      image: "images/marek-piwnicki-Hs5gkoGI0IQ-unsplash.jpg",
      title: "Ancient Wisdom Rediscovered",
      description:
        "Athens, the cradle of democracy and philosophy, is a city where ancient thinkers like Socrates and Plato shaped intellectual traditions that persist to this day.",
      location: "Athens, Greece",
    },
    {
      id: nanoid(),
      image: "images/marek-piwnicki-KWDrnghzjKk-unsplash.jpg",
      title: "The Rise of Civilization",
      description:
        "Carthage was a major power in the ancient Mediterranean, famous for its trade networks and epic conflicts with Rome during the Punic Wars.",
      location: "Carthage, Tunisia",
    },
    {
      id: nanoid(),
      image: "images/marek-piwnicki-SGB0V9UGe1w-unsplash.jpg",
      title: "Legacy of the Roman Empire",
      description:
        "Pompeii offers a unique glimpse into daily Roman life, preserved under volcanic ash from Mount Vesuvius' eruption in 79 AD, immortalizing a moment in time.",
      location: "Pompeii, Italy",
    },
    {
      id: nanoid(),
      image: "images/marek-piwnicki-fgZO-k47XTQ-unsplash.jpg",
      title: "The Lost Chronicles",
      description:
        "Alexandria, once home to the famous library and a hub for scholars and scientists, represents the intersection of ancient knowledge and culture in Egypt.",
      location: "Alexandria, Egypt",
    },
    {
      id: nanoid(),
      image: "images/michael-pointner-pRpHqBjCn7Y-unsplash.jpg",
      title: "Mysteries of Antiquity",
      description:
        "Babylon, an ancient city of great wonders like the Hanging Gardens, played a central role in shaping early laws, language, and scientific progress in Mesopotamia.",
      location: "Babylon, Iraq",
    },
  ];
  return <Z initialData={data} />;
}
