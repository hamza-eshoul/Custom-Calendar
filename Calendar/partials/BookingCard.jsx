import { useState, useEffect } from "react";

// state
import { useCalendarStore } from "@services/state/calendarStore";

const BookingCard = ({
  bookingId,
  voyageurImage,
  voyageur,
  price,
  numberOfDays,
  status,
  showListingDetails,
}) => {
  // local state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // global state
  const selectedBooking = useCalendarStore((state) => state.selectedBooking);

  // useEffect
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // data
  const widthPerDay = (windowWidth * 0.7 * 0.35) / 4;
  const bookingCardWidth = widthPerDay * numberOfDays;
  const isBookingCardSelected = bookingId == selectedBooking?.bookingId;

  if (status == "confirmed") {
    return (
      <div
        style={{ width: `${bookingCardWidth}px` }} //
        className={`${isBookingCardSelected ? "bg-primary text-white" : "bg-[#E8E9FD] text-primary"} absolute left-[60px] top-[20px] z-[5] mb-[11px] mr-[11px] flex cursor-pointer items-center justify-between rounded-full pb-[3.5px] pl-[4.5px] pt-1 `}
        onClick={() => showListingDetails(bookingId)}
      >
        <div className="flex items-center gap-[14px]">
          <img src={voyageurImage} className="size-[30px] rounded-full" />
          <p className="font-gilroy text-sm font-semibold ">
            {voyageur} - {price} €
          </p>
        </div>

        {status == "enAttenteConfirmation" && (
          <p className="font-girloy text-xs font-medium">A confirmer</p>
        )}
      </div>
    );
  }

  return (
    <div
      style={{ width: `${bookingCardWidth}px` }} //
      className={`${isBookingCardSelected ? "bg-gray-500 text-white" : "bg-[#E5E7EB] text-black"} absolute left-[60px] top-[20px] z-[5] mb-[11px] mr-[11px] flex cursor-pointer items-center justify-between rounded-full  pb-[3.5px] pl-[4.5px] pr-[17px] pt-1 `}
      onClick={() => showListingDetails(bookingId)}
    >
      <div className="flex items-center gap-[14px]">
        <img src={voyageurImage} className="size-[30px] rounded-full" />
        <p className="font-gilroy text-sm font-semibold ">
          {voyageur} - {price} €
        </p>
      </div>

      {status == "enAttenteConfirmation" && (
        <p className="font-girloy text-xs font-medium">A confirmer</p>
      )}
    </div>
  );
};

export default BookingCard;
