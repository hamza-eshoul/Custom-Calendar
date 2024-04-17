import { twMerge } from "tailwind-merge";

// icons
import { Search } from "../assets/icons";

/** An Icon that accepts an icon prop and displays the icon through a button. The Tailwind merge functionality is available to allow for more customization
 */
const IconButton = ({
  icon,
  size,
  variant,
  isFullyRounded,
  onClick,
  className,
}) => {
  // data
  const buttonSize = {
    regular: "p-3",
    small: "p-1.5",
  };

  const buttonVariant = {
    primary: "bg-[#FE7C48] hover:bg-[#6467F2] text-white ",
    secondary:
      "bg-white text-black hover:bg-[#F9FAFB] border-[1px] border-gray-200 hover:border-[#D1D5DB]",
  };

  const buttonRadius = isFullyRounded ? "rounded-full" : "";

  const buttonStyles = `transition duration-100 ease-out ${buttonSize[size]} ${buttonVariant[variant]} ${buttonRadius}`;

  return (
    <button className={twMerge(buttonStyles, className)} onClick={onClick}>
      {icon == "default" ? <Search /> : icon}
    </button>
  );
};

IconButton.defaultProps = {
  icon: "default",
  size: "regular",
  variant: "primary",
  isFullyRounded: true,
};

export default IconButton;
