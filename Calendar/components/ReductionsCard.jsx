// components
import CheckBox from "./Checkbox";
import Switch from "./Switch";

const CardRightSide = ({ isCardSelected, isReductionSwitch, onClick }) => {
  return (
    <>
      {!isReductionSwitch && (
        <CheckBox isChecked={isCardSelected} onClick={onClick} />
      )}
      {isReductionSwitch && (
        <Switch isChecked={isCardSelected} onClick={onClick} />
      )}
    </>
  );
};

const CardLeftSide = ({ reduction, reductionType, handleReductionChange }) => {
  return (
    <>
      {reductionType == "firstTwoBookings" && (
        <div className="relative z-[2]">
          <input
            type="text"
            maxLength={"2"}
            value={reduction}
            className="h-[45px] w-[50px] rounded-lg border-[1px] border-gray-200 bg-white px-2 py-3 font-semibold focus:border-gray-200"
            onChange={handleReductionChange}
          />
          <span className="absolute right-[5.5px] top-[11px] font-semibold">
            %
          </span>
        </div>
      )}

      {reductionType == "weekly" && (
        <div className="relative">
          <input
            type="text"
            maxLength={"2"}
            value={reduction}
            className="h-[45px] w-[50px] rounded-lg border-[1px] border-gray-200 bg-white px-2 py-3 font-semibold focus:border-gray-200"
            onChange={handleReductionChange}
          />
          <span className="absolute right-[5.5px] top-[11px] font-semibold">
            %
          </span>
        </div>
      )}

      {reductionType == "monthly" && (
        <div className="relative">
          <input
            type="text"
            maxLength={"2"}
            value={reduction}
            className="h-[45px] w-[50px] rounded-lg border-[1px] border-gray-200 bg-white px-2 py-3 font-semibold focus:border-gray-200"
            onChange={handleReductionChange}
          />
          <span className="absolute right-[5.5px] top-[11px] font-semibold">
            %
          </span>
        </div>
      )}
    </>
  );
};

const CardBody = ({ title, description }) => {
  return (
    <div className="flex max-w-[200px] flex-col gap-[7px] xsm:max-w-xs sm:max-w-[434px]">
      <span className="font-medium leading-[1.25] xsm:text-[18px] xsm:font-semibold">
        {title}
      </span>
      {description && (
        <p className="font-poppins text-xs text-gray-500 xsm:font-inter xsm:text-[14px] xsm:text-[#5E5E5E]">
          {description}
        </p>
      )}
    </div>
  );
};

const ReductionsCard = ({
  title,
  description,
  isCardSelected,
  reduction,
  reductionType,
  handleReductionChange,
  isReductionSwitch,
  onClick,
}) => {
  // data
  const containerStyles = `${isCardSelected ? "bg-gradient-to-r from-primary to-[#FE7C48] p-[3px]" : "border-[2px] border-[#E5E8ED]"} cursor-pointer rounded-xl`;

  return (
    <article className={containerStyles}>
      <div
        className={`flex items-center justify-between rounded-[9px] bg-white py-[21px] pl-4 ${isReductionSwitch ? "pr-2.5" : "pr-4"} xsm:px-[22px] xsm:pb-7 xsm:pt-6 sm:px-6`}
      >
        <div className="flex items-center gap-[11px] xsm:gap-5">
          <CardLeftSide
            isCardSelected={isCardSelected}
            reduction={reduction}
            reductionType={reductionType}
            handleReductionChange={handleReductionChange}
          />
          <CardBody title={title} description={description} />
        </div>
        <CardRightSide
          isCardSelected={isCardSelected}
          isReductionSwitch={isReductionSwitch}
          onClick={onClick}
        />
      </div>
    </article>
  );
};

export default ReductionsCard;
