import { SlideType } from "./types";

function Controls({
  currentSlide,
  state,
  transitionState,
  initData,
  setState,
  setTransitionState,
  setCurrentSlide,
  sliderData,
}: {
  currentSlide: { data: SlideType; index: number };
  state: SlideType[];
  transitionState: SlideType;
  initData: SlideType;
  setState: React.Dispatch<React.SetStateAction<SlideType[]>>;
  setTransitionState: React.Dispatch<React.SetStateAction<SlideType>>;
  setCurrentSlide: React.Dispatch<
    React.SetStateAction<{ data: SlideType; index: number }>
  >;
  sliderData: SlideType[];
}) {
  const onPrev = () => {
    setState((prevState) => {
      return [
        transitionState ? transitionState : initData,
        ...prevState.slice(0, prevState.length - 1),
      ];
    });
    setCurrentSlide({
      data: transitionState ? transitionState : sliderData[0],
      index: sliderData.findIndex(
        (el) => el.image === state[state.length - 1].image,
      ),
    });
    setTransitionState(state[state.length - 1]);
  };

  const onNext = () => {
    console.log("next")
    setState((prevState) => prevState.slice(1));
    setCurrentSlide({
      data: transitionState ? transitionState : initData,
      index: sliderData.findIndex((el) => el.image === state[0].image),
    });
    setTransitionState(state[0]);
    setTimeout(() => {
      setState((prevState) => {
        return [...prevState, transitionState ? transitionState : initData];
      });
    }, 500);
  };

  return (
    <>
      <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
        <button onClick={onPrev}>prev</button>
        <button onClick={onNext}>next</button>
      </div>
    </>
  );
}

export default Controls;
