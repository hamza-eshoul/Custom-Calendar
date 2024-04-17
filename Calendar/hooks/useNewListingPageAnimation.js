// state
import { useNewListingStore } from "@services/state/newListingStore";

export const useNewListingPageAnimation = () => {
  // global state
  const animationDirection = useNewListingStore(
    (state) => state.animationDirection,
  );

  // data
  const newListingPageAnimations = {
    initial: {
      x: `${animationDirection == "right" ? "100vw" : "-100vw"}`,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "linear",
      },
    },
    exit: {
      x: `${animationDirection == "right" ? "-100vw" : "100vw"}`,
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "linear",
      },
    },
  };

  return { newListingPageAnimations };
};
