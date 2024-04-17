import { format } from "date-fns";
import { eachDayOfInterval, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

const generateTodaysDate = () => {
  const todaysDate = new Date();

  const dayOfMonth = format(todaysDate, "d");

  const month = format(todaysDate, "MMM");

  const year = format(todaysDate, "y");

  const formattedDate = dayOfMonth + " " + month + ". " + year;

  return formattedDate;
};

const formatDateRange = (startDate, endDate) => {
  const formattedStartDate = format(startDate, "d MMM. yy", {
    locale: fr,
  });
  const formattedEndDate = format(endDate, "d MMM. yy", {
    locale: fr,
  });

  const formattedDate = `${formattedStartDate} - ${formattedEndDate}`;

  return formattedDate;
};

const formatMonthAndYear = (date) => {
  const formattedDate = format(date, "MMMM yyyy", { locale: fr });

  return formattedDate;
};

const applyDefaultFormat = (date) => {
  const formattedDate = format(date, "dd/MM/yyyy", { locale: fr });

  return formattedDate;
};

const generatDisabledDatesArray = (unavailable_dates) => {
  const unavailable_dates_array = unavailable_dates.reduce((acc, range) => {
    const start = parseISO(range.date_from);
    const end = parseISO(range.date_to);
    const datesInRange = eachDayOfInterval({ start, end });
    return acc.concat(datesInRange);
  }, []);

  return unavailable_dates_array;
};

export {
  generateTodaysDate,
  formatDateRange,
  formatMonthAndYear,
  generatDisabledDatesArray,
  applyDefaultFormat,
};
