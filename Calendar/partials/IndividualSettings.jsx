import { useState } from "react";

// icons
import { ChevronDown, ChevronUp } from "@assets/icons";

const IndividualSettings = ({
  listing,
  isLastItem,
  setIsIndividualSettingsActive,
}) => {
  // local state
  const [areSettingsActive, setAreSettingsActive] = useState(false);

  // data
  const { image, title, city, defaultConfig } = listing;

  const { nbrNuitsMin, nbrNuitsMax, bookingDelayMin, tempsPreparation } =
    defaultConfig;

  return (
    <section
      className={` ${!isLastItem ? "border-b-[1px] border-gray-200" : ""}  pb-5 pt-6`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-[11px]">
          <img src={image} className="size-[60px] rounded-xl" />
          <div className="flex flex-col">
            <span className="font-gilroy text-sm font-semibold">{title}</span>
            <span className="text-xs text-gray-500">{city}</span>
          </div>
        </div>

        {areSettingsActive && (
          <div
            className="cursor-pointer pt-5"
            onClick={() => {
              setAreSettingsActive(false);
              setIsIndividualSettingsActive(false);
            }}
          >
            <ChevronUp />
          </div>
        )}

        {!areSettingsActive && (
          <div
            className="cursor-pointer pt-5"
            onClick={() => {
              setAreSettingsActive(true);
              setIsIndividualSettingsActive(true);
            }}
          >
            <ChevronDown />
          </div>
        )}
      </div>

      {areSettingsActive && (
        <div className="pt-9">
          <div className="flex flex-col gap-[14px] border-b-[1px] border-gray-200 pb-[27px]">
            <h2 className="font-gilroy text-xl font-semibold">
              Durée du séjour
            </h2>

            <div className="flex items-center justify-between rounded-xl border-[1px] border-[#ECECEC] px-[17px] py-3">
              <span className="text-sm font-medium">Nuit minimum</span>
              <span className="text-[26px] font-semibold">{nbrNuitsMin}</span>
              <button className="text-sm font-semibold text-primary">
                Modifier
              </button>
            </div>

            <div className="flex items-center justify-between rounded-xl border-[1px] border-[#ECECEC] px-[17px] py-3">
              <span className="text-sm font-medium">Nuit maixmum</span>
              <span className="text-[26px] font-semibold">{nbrNuitsMax}</span>
              <button className="text-sm font-semibold text-primary">
                Modifier
              </button>
            </div>
          </div>

          <div className="flex flex-col pt-[26px]">
            <h2 className="font-gilroy text-xl font-semibold">
              Paramètres de réservation
            </h2>

            <div className="relative">
              <select className="relative mt-[18px] w-full appearance-none rounded-lg border border-[#ECECEC] bg-white px-3 pb-2 pr-8 pt-[30px] outline-none transition duration-300 ease-out focus:border-primary">
                <option value="1 jour avant">1 jour avant</option>
                <option value="1 semaine avant">1 semaine avant</option>
                <option value="aucun">aucun</option>
              </select>
              <span className="absolute left-[12px] top-[28px] font-poppins text-xs text-gray-500">
                Délai de réservation min.
              </span>
              <ChevronDown className={"absolute right-5 top-[52px] text-3xl"} />
            </div>

            <div className="relative mb-[30px]">
              <select className="relative mt-[18px] w-full appearance-none rounded-lg border border-[#ECECEC] bg-white px-3 pb-2 pr-8 pt-[30px] outline-none transition duration-300 ease-out focus:border-primary">
                <option value="1 jour avant">1 jour </option>
                <option value="1 semaine avant">3 jours</option>
                <option value="aucun">aucun</option>
              </select>
              <span className="absolute left-[12px] top-[28px] font-poppins text-xs text-gray-500">
                Temps de préparation
              </span>
              <ChevronDown className={"absolute right-5 top-[52px] text-3xl"} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndividualSettings;
