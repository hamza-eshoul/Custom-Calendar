import { twMerge } from "tailwind-merge";

// icons
import { Check } from "../assets/icons";

/** A Switch component that can be checked or unchecked through the isChecked prop.
 */
const Switch = ({ isChecked, className, onClick }) => {
  const switchColors = isChecked
    ? "bg-primary"
    : "bg-[#B0B0B0] hover:bg-[#717171]";

  const switchStyles = `${switchColors} relative h-8 w-12 cursor-pointer rounded-full content-none`;

  return (
    <div className={twMerge(switchStyles, className)} onClick={onClick}>
      <div
        className={`${isChecked ? "translate-x-[14.5px]" : ""} absolute left-[2.5px] top-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-white transition duration-200`}
      >
        {isChecked && <Check className="text-primary" />}
      </div>
    </div>
  );
};

export default Switch;
