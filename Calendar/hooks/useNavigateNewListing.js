import { useNavigate } from "react-router-dom";

// state
import { useNewListingStore } from "@services/state/newListingStore";

export const useNavigateNewListing = (nextUrl) => {
  // global state
  const changeAnimationDirection = useNewListingStore(
    (state) => state.changeAnimationDirection,
  );

  // library hooks
  const navigate = useNavigate();

  // functions
  const navigateBack = () => {
    changeAnimationDirection("left");
    navigate(-1);
  };

  const navigateNext = () => {
    changeAnimationDirection("right");
    navigate(nextUrl);
  };

  return { navigateBack, navigateNext };
};
