import { twMerge } from "tailwind-merge";

// icons
import { Check } from "../assets/icons";
import { Cross } from "../assets/icons";

/** A Checkbox that can be checked or unchecked. The checkbox also accepts an isVerification prop for the cases when it is used to verify the identity
 */
const CheckBox = ({ isChecked, isVerification, className, onClick }) => {
  // data
  const checkBoxLayout =
    isChecked || isVerification ? "flex items-center justify-center" : "";

  const checkBoxColors = isChecked
    ? "bg-primary"
    : isVerification
      ? "bg-[#DADCE0]"
      : "bg-white";

  const checkBoxBorders =
    isChecked || isVerification
      ? ""
      : "border-[1px] border-[#C2C2C2] hover:border-[#222222]";

  const checkBoxSyles = `h-6 w-6 rounded cursor-pointer ${checkBoxLayout} ${checkBoxColors} ${checkBoxBorders}`;

  return (
    <div className={twMerge(checkBoxSyles, className)} onClick={onClick}>
      {isVerification && !isChecked && <Cross className={"text-white"} />}
      {isChecked && <Check className="text-white" />}
    </div>
  );
};

export default CheckBox;
