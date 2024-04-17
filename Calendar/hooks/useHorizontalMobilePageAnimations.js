// state
import { useMobilePagesAnimations } from "@services/state/mobilePagesAnimations";

export const useHorizontalMobilePageAnimations = () => {
  // global state
  const animationDirection = useMobilePagesAnimations(
    (state) => state.animationDirection,
  );

  // data
  const horizontalMobilePageAnimations = {
    initial: {
      x: `${animationDirection == "right" ? "-100vw" : "100vw"}`,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return { horizontalMobilePageAnimations };
};
