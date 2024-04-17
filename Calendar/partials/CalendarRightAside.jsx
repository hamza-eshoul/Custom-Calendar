import { useState } from "react";

// state
import { useCalendarStore } from "@services/state/calendarStore";

// partials
import GlobalSettings from "./GlobalSettings";
import IndividualSettings from "./IndividualSettings";
import SelectedDates from "./SelectedDates";
import SelectedBookingDetails from "./SelectedBookingDetails";

// components
import Switch from "@components/Switch";
import Button from "@components/Button";

const CalendarRightAside = ({ listings }) => {
  // local state
  const [isListingGlobalSettings, setIsListingGlobalSettings] = useState(true);
  const [isIndividualSettingsActive, setIsIndividualSettingsActive] =
    useState(false);

  // global state
  const selectedBooking = useCalendarStore((state) => state.selectedBooking);
  const selectedDates = useCalendarStore((state) => state.selectedDates);

  // functions
  const toggleIsListingGlobalSettings = () => {
    setIsListingGlobalSettings(!isListingGlobalSettings);
  };

  if (selectedBooking) {
    return <SelectedBookingDetails selectedBooking={selectedBooking} />;
  }

  if (selectedDates.length > 0) {
    return <SelectedDates selectedDates={selectedDates} />;
  }

  return (
    <aside className="flex h-full basis-[30%] flex-col overflow-y-scroll border-l-[1px] border-gray-200 px-[30px] pt-[81px]">
      <div className="flex flex-col gap-[8px] border-b-[1px] border-gray-200 pb-[30px]">
        <h2 className="font-gilroy text-sm font-semibold">
          Appliquer à tous les hébergements
        </h2>
        <div className="flex gap-[15px]">
          <p className="max-w-[273px] font-poppins text-xs text-gray-500">
            Cette option vous permet d’appliquer une configuration identique à
            tous vos hébergements
          </p>
          <Switch
            isChecked={isListingGlobalSettings}
            onClick={toggleIsListingGlobalSettings}
          />
        </div>
      </div>

      {isListingGlobalSettings && <GlobalSettings />}

      {!isListingGlobalSettings && (
        <>
          {listings.map((listing, index) => (
            <IndividualSettings
              listing={listing}
              isLastItem={index == listings.length - 1}
              setIsIndividualSettingsActive={setIsIndividualSettingsActive}
            />
          ))}

          {isIndividualSettingsActive && (
            <div className="mb-6 mt-10 flex flex-col gap-[14px]">
              <Button>Enregistrer</Button>
              <Button variant="secondary">Annuler</Button>
            </div>
          )}
        </>
      )}
    </aside>
  );
};

export default CalendarRightAside;
