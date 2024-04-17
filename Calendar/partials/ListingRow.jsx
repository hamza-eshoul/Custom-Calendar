import { differenceInDays, parse } from "date-fns";

// partials
import ListingDay from "./ListingDay";

const ListingRow = ({ listing, daysOfCurrentWeek }) => {
  // data
  const { title, bookings } = listing;
  let formattedBookings = [];

  if (bookings) {
    formattedBookings = bookings.map((booking) => {
      return {
        ...booking,
        startDate: parse(booking.startDate, "dd/MM/yyyy", new Date()),
        endDate: parse(booking.endDate, "dd/MM/yyyy", new Date()),
        daysInBetweenDates:
          differenceInDays(
            parse(booking.endDate, "dd/MM/yyyy", new Date()),
            parse(booking.startDate, "dd/MM/yyyy", new Date()),
          ) + 1,
      };
    });
  }

  return (
    <li className="flex">
      <span className="w-[242px] cursor-pointer border-r-[0.5px] border-gray-200 bg-[#F7F8FA] pb-6 pl-10 pr-6 pt-[30px] font-gilroy font-medium">
        {title}
      </span>

      <ul className="flex grow">
        {daysOfCurrentWeek.map((day) => (
          <ListingDay
            key={day}
            day={day}
            listing={listing}
            formattedBookings={formattedBookings}
          />
        ))}
      </ul>
    </li>
  );
};

export default ListingRow;
