import { useState, useEffect } from "react";
import { isWithinInterval } from "date-fns";

// state
import { useCalendarStore } from "@services/state/calendarStore";

// partials
import BookingCard from "./BookingCard";

const ListingDay = ({ day, formattedBookings, listing }) => {
  // local state
  const [isDayEmpty, setIsDayEmpty] = useState(true);
  const [isDaySelected, setIsDaySelected] = useState(false);
  const [isDayWithinRangeInterval, setIsDayWithinRangeInterval] =
    useState(false);
  const [matchBooking, setMatchBooking] = useState(null);

  // global state
  const selectedBooking = useCalendarStore((state) => state.selectedBooking);
  const setSelectedBooking = useCalendarStore(
    (state) => state.setSelectedBooking,
  );
  const setSelectedListing = useCalendarStore(
    (state) => state.setSelectedListing,
  );
  const addSelectedDate = useCalendarStore((state) => state.addSelectedDate);
  const removeSelectedDate = useCalendarStore(
    (state) => state.removeSelectedDate,
  );

  // preload data
  const daysDate = day;

  // preload functions
  const checkIfDayIsEmpty = () => {
    if (formattedBookings.length == 0) {
      setIsDayEmpty(true);
      setIsDayWithinRangeInterval(false);
      return;
    }

    if (formattedBookings.length > 0) {
      formattedBookings.forEach((booking) => {
        const isDateMatch = daysDate.getTime() == booking.startDate.getTime();
        const isDateWithinInterval = isWithinInterval(daysDate, {
          start: booking.startDate,
          end: booking.endDate,
        });

        if (isDateMatch) {
          setMatchBooking(booking);
          setIsDayEmpty(false);
        }

        if (isDateWithinInterval) {
          setIsDayWithinRangeInterval(true);
        }
      });
    }
  };

  const addSelectedDay = () => {
    addSelectedDate(day);
    setIsDaySelected(true);
    setSelectedListing(listing);
  };

  const removeSelectedDay = () => {
    setIsDaySelected(false);
    removeSelectedDate(day);
  };

  const showListingDetails = (id) => {
    const selectedBookingAndListing = { ...listing, ...matchBooking };

    if (id == selectedBooking?.bookingId) {
      setSelectedBooking(null);
    } else {
      setSelectedBooking(selectedBookingAndListing);
    }
  };

  // useEffect
  useEffect(() => {
    checkIfDayIsEmpty();
  }, []);

  return (
    <li
      className={
        "relative basis-[14.28%] border-[0.5px] border-[#DADCE0] text-xs font-medium text-gray-500"
      }
    >
      {isDayEmpty && !isDayWithinRangeInterval && !isDaySelected && (
        <span
          className="pr-[11px z-[4] flex h-full w-full cursor-pointer items-end justify-end pb-[11px] pr-[11px]"
          onClick={addSelectedDay}
        >
          {listing.price} €
        </span>
      )}

      {isDaySelected && (
        <div
          className="z-[5] flex h-full w-full cursor-pointer items-end justify-end rounded-xl bg-[#FE7C48] pb-[11px] pr-[11px] text-white"
          onClick={removeSelectedDay}
        >
          {listing.price} €
        </div>
      )}

      {!isDayEmpty && (
        <BookingCard
          bookingId={matchBooking.bookingId}
          voyageurImage={matchBooking.voyageurImage}
          voyageur={matchBooking.voyageur}
          price={matchBooking.price}
          numberOfDays={matchBooking.daysInBetweenDates}
          status={matchBooking.status}
          showListingDetails={showListingDetails}
        />
      )}
    </li>
  );
};

export default ListingDay;
