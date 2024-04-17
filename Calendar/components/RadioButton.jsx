import { twMerge } from "tailwind-merge";

const RadioButton = ({ isChecked, className, onClick }) => {
  const buttonLayout = isChecked ? "flex items-center justify-center" : "";

  const buttonColors = isChecked ? "bg-primary" : "bg-white";

  const buttonBorder = isChecked
    ? ""
    : "border-[1px] border-[#DDDDDD] hover:border-[#222222]";

  const buttonStyles = `h-6 w-6 rounded-full ${buttonLayout} ${buttonColors} ${buttonBorder}`;
  return (
    <button
      type="button"
      className={twMerge(buttonStyles, className)}
      onClick={onClick}
    >
      {isChecked && <div className="h-2 w-2 rounded-full bg-white" />}
    </button>
  );
};

export default RadioButton;
