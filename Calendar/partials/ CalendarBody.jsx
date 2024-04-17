import { useState } from "react";
import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
  startOfWeek,
  subWeeks,
} from "date-fns";
import { fr } from "date-fns/locale";

// utils
import { capitalizeFirstLetter } from "@utils/formatText";

// icons
import {
  Settings,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
} from "@assets/icons";

// partials
import ModalCalendarPeriodicity from "./ModalCalendarPeriodicity";
import ListingRow from "./ListingRow";

const CalendarBody = ({ listings }) => {
  // local state
  const [showCalendarPeriodicityModal, setShowCalendarPeriodicityModal] =
    useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  // data
  const currentDateMonth = format(currentDate, "MMMM yyy", { locale: fr });

  const capitalizedCurrentDateMonth = capitalizeFirstLetter(currentDateMonth);

  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endOfCurrentWeek = endOfWeek(currentDate, { weekStartsOn: 1 });

  const daysOfCurrentWeek = eachDayOfInterval({
    start: startOfCurrentWeek,
    end: endOfCurrentWeek,
  });

  const formattedDaysOfCurrentWeek = daysOfCurrentWeek.map((day) =>
    capitalizeFirstLetter(format(day, "EEE, d/MM", { locale: fr }))
      .replace(".", "")
      .split(","),
  );

  // functions
  const hideCalendarPeriodicityModal = () => {
    setShowCalendarPeriodicityModal(false);
  };

  const handleNextWeek = () => {
    setCurrentDate((prevDate) => addWeeks(prevDate, 1));
  };

  const handlePreviousWeek = () => {
    setCurrentDate((prevDate) => subWeeks(prevDate, 1));
  };

  return (
    <section className="w-[1061px] basis-[70%] pt-[110px]">
      <div className="flex justify-between pb-8 pl-[244px]  ">
        <h1 className="font-gilroy text-[28px] font-semibold text-[#333333]">
          {capitalizedCurrentDateMonth}
        </h1>

        <div className="relative">
          <div
            className="relative flex cursor-pointer items-center gap-4 rounded-lg border-[1px] border-[#E5E7EB] bg-white px-[17px] py-[12.5px] shadow-sm"
            onClick={() => setShowCalendarPeriodicityModal(true)}
          >
            <span className="font-roboto text-sm">Semaine</span>
            <ChevronDown />
          </div>
          {showCalendarPeriodicityModal && (
            <ModalCalendarPeriodicity
              hideModal={hideCalendarPeriodicityModal}
            />
          )}
        </div>
      </div>

      <header className="flex items-center">
        <div className="flex w-[242px] items-center gap-[14px] pb-5 pl-10">
          <span className="font-gilroy font-semibold">Hébergements</span>

          <div className="flex size-[30px] cursor-pointer items-center justify-center rounded-md bg-[#F8F8F8]">
            <Settings className="text-primary" />
          </div>
        </div>

        <ul className="flex grow pb-5 text-xs font-medium text-[#333333]">
          {formattedDaysOfCurrentWeek.map((day, index) => (
            <>
              {index == 0 && (
                <li className="relative flex basis-[14.28%] flex-col text-center">
                  <div
                    className="absolute top-[6px] cursor-pointer"
                    onClick={handlePreviousWeek}
                  >
                    <ChevronLeft className="w-[8px]" />
                  </div>
                  <span>{day[0]}</span>
                  <span>{day[1]}</span>
                </li>
              )}

              {index == formattedDaysOfCurrentWeek.length - 1 && (
                <li className="relative flex basis-[14.28%] flex-col text-center">
                  <span>{day[0]}</span>
                  <span>{day[1]}</span>
                  <div
                    className="absolute right-0 top-[6px] cursor-pointer"
                    onClick={handleNextWeek}
                  >
                    <ChevronRight className="w-[8px]" />
                  </div>
                </li>
              )}

              {index !== 0 &&
                index !== formattedDaysOfCurrentWeek.length - 1 && (
                  <li className="flex basis-[14.28%] flex-col text-center">
                    <span>{day[0]}</span>
                    <span>{day[1]}</span>
                  </li>
                )}
            </>
          ))}
        </ul>
      </header>

      <ul>
        {listings.map((listing) => (
          <ListingRow listing={listing} daysOfCurrentWeek={daysOfCurrentWeek} />
        ))}
      </ul>
    </section>
  );
};

export default CalendarBody;
