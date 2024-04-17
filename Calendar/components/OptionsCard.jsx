// components
import RadioButton from "./RadioButton";

const CardRightSide = ({ variant, isCardSelected, price }) => {
  if (variant == "payment") {
    return (
      <div className="flex flex-col justify-center">
        <span className="font-semibold xsm:text-[18px]">{price.amount}€</span>

        {price.isHalfPayment && (
          <span className="text-[10px] text-[#5E5E5E] xsm:text-[12px]">
            Maintenant
          </span>
        )}
      </div>
    );
  }

  if (variant == "info") {
    return <RadioButton isChecked={isCardSelected} />;
  }
};

const CardLeftSide = ({ variant, isCardSelected, icon }) => {
  if (variant == "payment") {
    return <RadioButton isChecked={isCardSelected} />;
  }

  if (variant == "info") {
    return (
      <div className={`${isCardSelected ? "text-primary" : ""}`}>{icon}</div>
    );
  }
};

const CardBody = ({ variant, title, description, knowMoreHref }) => {
  return (
    <div className="flex flex-col gap-[7px]">
      <span className="font-semibold xsm:text-[18px]">{title}</span>
      {description && (
        <p
          className={`${variant == "payment" ? "max-w-[200px] text-[12px] min-[400px]:max-w-52 xsm:max-w-80 sm:max-w-xs" : "max-w-[232px] font-poppins text-[12px] xsm:max-w-md xsm:font-inter xsm:text-[14px]"}  text-[#5E5E5E]`}
        >
          {description}
          {knowMoreHref && (
            <a href={knowMoreHref} className="font-semibold text-primary">
              {" "}
              En savoir plus
            </a>
          )}
        </p>
      )}
    </div>
  );
};

const OptionsCard = ({
  variant,
  title,
  description,
  isCardSelected,
  price,
  knowMoreHref,
  icon,
  onClick,
}) => {
  // data
  const containerStyles = `${isCardSelected ? "bg-gradient-to-r from-primary to-[#FE7C48] p-[3px]" : "border-[2px] border-[#E5E8ED]"} cursor-pointer rounded-xl`;

  const cardLeftSideGap = {
    info: "gap-4",
    payment: "lg:gap-7 gap-4",
  };

  return (
    <article className={containerStyles} onClick={onClick}>
      <div className="flex items-center justify-between rounded-[9px] bg-white px-4 py-5 sm:px-6 sm:pb-7 sm:pt-6">
        <div className={`flex items-center ${cardLeftSideGap[variant]}`}>
          <CardLeftSide
            variant={variant}
            isCardSelected={isCardSelected}
            icon={icon}
          />
          <CardBody
            variant={variant}
            title={title}
            description={description}
            knowMoreHref={knowMoreHref}
          />
        </div>
        <CardRightSide
          variant={variant}
          isCardSelected={isCardSelected}
          price={price}
        />
      </div>
    </article>
  );
};

export default OptionsCard;
