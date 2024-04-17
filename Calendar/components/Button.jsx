import { twMerge } from "tailwind-merge";
import { RiseLoader } from "react-spinners";

// icons
import { ArrowDown } from "@assets/icons";
import { Settings } from "@assets/icons";

/** A Button Component capturing the main use cases of buttons in the project.
 *Most of the buttons are either primary or secondary buttons with various other customizable props. The remaining different buttons are handled through the tailwind merge package that allows for more customization if it is required.
 */
const Button = ({
  size,
  variant,
  isFullyRounded,
  iconLeft,
  iconRight,
  isLoading,
  loadingContainerWidth,
  children,
  className,
  onClick,
}) => {
  // data
  const buttonSize = {
    regular: "py-3 px-[23px]",
    large: "py-4 px-6",
    small: "py-1 px-2",
  };

  const buttonColors = {
    primary: "bg-primary text-white hover:bg-[#6467F2]",
    secondary:
      "bg-white text-black hover:bg-[#F9FAFB] border-[1px] border-gray-200 hover:border-[#D1D5DB]",
  };

  const buttonRadius = {
    primary: `${isFullyRounded ? "rounded-full" : "rounded-lg"}`,
    secondary: `${isFullyRounded ? "rounded-full" : "rounded-md"}`,
  };

  const buttonLayout = iconLeft || iconRight ? "flex gap-2" : "";

  const buttonStyles = `text-sm font-medium transition duration-100 ease-out ${buttonSize[size]} ${buttonColors[variant]} ${buttonRadius[variant]} ${buttonLayout} ${isLoading ? "pointer-events-none" : ""}`;

  return (
    <button className={twMerge(buttonStyles, className)} onClick={onClick}>
      {iconLeft && iconLeft == "default" ? <Settings /> : iconLeft}

      {isLoading && (
        <div className={loadingContainerWidth}>
          <RiseLoader
            color={variant == "primary" ? "white" : "#0e131f"}
            speedMultiplier={0.9}
            size={7}
          />
        </div>
      )}

      {!isLoading && children}

      {iconRight && iconRight == "default" ? <ArrowDown /> : iconRight}
    </button>
  );
};

Button.defaultProps = {
  size: "regular",
  variant: "primary",
  iconLeft: null,
  iconRight: null,
  isFullyRounded: false,
};

export default Button;
