import { useState, useEffect, useRef } from "react";
import { format, isSameMonth, isSameYear } from "date-fns";
import { fr } from "date-fns/locale";

// state
import { useCalendarStore } from "@services/state/calendarStore";

// utils
import computePaymentFees from "@utils/computePaymentFees";
import { serviceFeesRate } from "@utils/sharedValues";

// animations
import { AnimatePresence } from "framer-motion";

// components
import Button from "@components/Button";
import ModalBookingInvitation from "./ModalBookingInvitation";

const SelectedDates = ({ selectedDates }) => {
  // prelaod global state
  const selectedListing = useCalendarStore((state) => state.selectedListing);

  // local state
  const [formattedDateRange, setFormattedDateRange] = useState("");
  const [price, setPrice] = useState(selectedListing.price);
  const [showBookingInvitationModal, setShowBookingInvitationModal] =
    useState(false);

  // utils
  const { basePrice } = computePaymentFees(price);

  // library hooks
  const priceRef = useRef(null);

  // useEffect
  useEffect(() => {
    const sortedDates = selectedDates.sort((a, b) => new Date(a) - new Date(b));

    const startDate = new Date(sortedDates[0]);
    const endDate = new Date(sortedDates[sortedDates.length - 1]);

    let formattedStartDate;
    let formattedEndDate;

    if (isSameYear(startDate, endDate)) {
      if (isSameMonth(startDate, endDate)) {
        formattedStartDate = format(startDate, "dd", { locale: fr });
        formattedEndDate = format(endDate, "dd", { locale: fr });
        const monthYear = format(endDate, "MMM yyyy", { locale: fr });
        setFormattedDateRange(
          `${formattedStartDate}-${formattedEndDate} ${monthYear}`,
        );
      }

      if (!isSameMonth(startDate, endDate)) {
        formattedStartDate = format(startDate, "dd MMM", { locale: fr });
        formattedEndDate = format(endDate, "dd MMM yyyy", { locale: fr });
        setFormattedDateRange(`${formattedStartDate} - ${formattedEndDate}`);
      }
    }

    if (!isSameYear(startDate, endDate)) {
      formattedStartDate = format(startDate, "dd MMM yyyy", { locale: fr });
      formattedEndDate = format(endDate, "dd MMM yyyy", { locale: fr });
      setFormattedDateRange(`${formattedStartDate} - ${formattedEndDate}`);
    }
  }, [selectedDates]);

  // data
  const nbrOfDates = selectedDates.length;
  const priceWithoutServiceFees =
    Number(basePrice.replace(",", ".")) * nbrOfDates;

  const formattedPriceWithoutServiceFees = priceWithoutServiceFees
    .toFixed(2)
    .replace(".", ",");

  const serviceFees = selectedListing.price * nbrOfDates * serviceFeesRate;

  const formattedServiceFees = serviceFees.toFixed(2).replace(".", ",");

  const totalPrice = priceWithoutServiceFees + serviceFees;

  const formattedTotalPrice = totalPrice.toFixed(2).replace(".", ",");

  // functions
  const hideBookingInvitationModal = () => {
    setShowBookingInvitationModal(false);
  };

  return (
    <aside className="flex h-full basis-[30%] flex-col overflow-y-scroll border-l-[1px] border-gray-200 px-[30px] pt-[81px]">
      <div className="flex flex-col gap-[8px] border-b-[1px] border-gray-200 pb-[30px]">
        <h2 className="text-sm">
          Dates sélectionnés ({nbrOfDates} {nbrOfDates > 1 ? "dates" : "date"})
        </h2>
        <p className="font-gilroy text-xl font-semibold">
          {formattedDateRange}
        </p>
      </div>

      <div className="flex items-center gap-[11px] pt-[18px]">
        <img src={selectedListing.image} className="size-[60px] rounded-xl" />
        <div className="flex flex-col">
          <span className="font-gilroy text-sm font-semibold">
            {selectedListing.title}
          </span>
          <span className="text-xs text-gray-500">{selectedListing.city}</span>
        </div>
      </div>

      <div className="mb-[30px] mt-9 flex flex-col items-center rounded-xl border-[1px] border-[#ECECEC] py-[22px] shadow-md">
        <span className="font-medium">Tarif par nuit</span>

        <div className="relative mx-auto max-w-[80px] border-b-[4px] border-gray-200">
          <input
            ref={priceRef}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border-0 p-0 pr-6 text-[42px] font-semibold outline-none focus:outline-none"
          />

          <div
            className="absolute left-[56px] top-[1px] text-[42px] font-semibold"
            onClick={() => priceRef.current.focus()}
          >
            €
          </div>

          <button
            className="absolute left-[110px] top-[22px] text-sm font-semibold text-primary"
            onClick={() => priceRef.current.focus()}
          >
            Modifier
          </button>
        </div>

        <div className="pt-4 font-poppins text-[13px]">
          <span>Vous gagnez</span>
          <span className="pl-2 font-semibold">{basePrice} €</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b-[1px] border-gray-200 pb-[18px]">
        <div className="flex justify-between">
          <span>
            {basePrice} € x {nbrOfDates} {nbrOfDates > 1 ? "nuits" : "nuit"}
          </span>
          <span> {formattedPriceWithoutServiceFees}€</span>
        </div>
        <div className="flex justify-between">
          <span>Frais de service</span>
          <span>{formattedServiceFees} €</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span className="font-poppins">Total voyageur</span>
          <span>{formattedTotalPrice} €</span>
        </div>
      </div>

      <div className="flex justify-between pb-6 pt-2.5 font-semibold">
        <span className="font-poppins">Vous gagnez</span>
        <span>{formattedPriceWithoutServiceFees} €</span>
      </div>

      <div className="flex flex-col gap-[11px]">
        <Button onClick={() => setShowBookingInvitationModal(true)}>
          Envoyer une offre
        </Button>
        <Button variant="secondary">Bloquer les dates</Button>
      </div>

      <AnimatePresence>
        {showBookingInvitationModal && (
          <ModalBookingInvitation hideModal={hideBookingInvitationModal} />
        )}
      </AnimatePresence>

      <p className="pt-5 text-xs text-gray-500">
        Si vous décidez de réserver ces dates pour ce client, l’hébergement sera
        bloqué pendant 24h en attendant le règlement du client. Vous pouvez
        annuler à tout moment et remettre à disposition votre hébergement.
      </p>
    </aside>
  );
};

export default SelectedDates;
