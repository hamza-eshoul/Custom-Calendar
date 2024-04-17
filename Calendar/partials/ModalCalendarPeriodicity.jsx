import { useState } from "react";

// component
import Button from "@components/Button";
import RadioButton from "@components/RadioButton";
import Overlay from "@components/Overlay";

const ModalCalendarPeriodicity = ({ hideModal }) => {
  // local state
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Mois",
      isChecked: false,
    },
    {
      id: 2,
      title: "Semaine",
      isChecked: true,
    },
  ]);

  // functions
  const handleClick = (id) => {
    const updateItems = items.map((item) =>
      item.id == id
        ? { ...item, isChecked: true }
        : { ...item, isChecked: false },
    );
    setItems(updateItems);
  };
  return (
    <>
      <Overlay onClick={hideModal} />
      <div className="absolute -left-[80px] top-[60px] z-30 w-[277px] rounded-[10px] bg-white pb-[14px] pt-[15px]">
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="flex cursor-pointer items-center justify-between px-4  py-2"
            >
              <h3 className="text-sm font-medium">{item.title}</h3>
              <RadioButton
                className={"h-[20px] w-[20px]"}
                isChecked={item.isChecked}
              />
            </div>
          ))}
        </div>
        <div className="mt-[15px] h-[1px] w-full bg-gray-200" />
        <div className="mt-[17px] grid place-items-center">
          <Button className={" w-[175px] text-base"}>Appliquer</Button>
        </div>
      </div>
    </>
  );
};

export default ModalCalendarPeriodicity;
