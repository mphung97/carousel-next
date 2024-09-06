type SlideType = {
  image: string;
  title: string;
  description: string;
  location: string;
};

type CurrentSlideType = {
  data: SlideType;
  index: number;
};

export type { SlideType, CurrentSlideType };
