import { twMerge } from "tailwind-merge";
import { useEffect } from "react";

const Overlay = ({ onClick, className }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div
      className={twMerge(
        "fixed bottom-0 left-0 right-0 top-0 z-20 min-h-screen bg-zinc-700/40 backdrop-blur-[1px]",
        className,
      )}
      onClick={onClick}
    />
  );
};

export default Overlay;

