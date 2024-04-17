import { useState } from "react";

export const useListingReductions = () => {
  // local state
  const [firstTwoBookingsReduction, setFirstTwoBookingsReduction] =
    useState(20);
  const [weeklyReduction, setWeeklyReduction] = useState(10);
  const [monthlyReduction, setMonthlyReduction] = useState(20);

  const [isFirstTwoBookingsCardSelected, setIsFirstTwoBookingsCardSelected] =
    useState(true);
  const [isWeeklyCardSelected, setIsWeeklyCardSelected] = useState(true);
  const [isMonthlyCardSelected, setIsMonthlySelectedCard] = useState(false);

  // functions
  const handleFirstTwoBookingsReductionChange = (e) => {
    if (e.target.value.match("^$|^(0?[0-9]|[0-9][0-9])$") != null) {
      setFirstTwoBookingsReduction(e.target.value);
    }
  };

  const handleWeeklyReductionChange = (e) => {
    if (e.target.value.match("^$|^(0?[0-9]|[0-9][0-9])$") != null) {
      setWeeklyReduction(e.target.value);
    }

    if (e.target.value == "") {
      setWeeklyReduction(0);
    }
  };

  const handleMonthlyReductionChange = (e) => {
    if (e.target.value.match("^$|^(0?[0-9]|[0-9][0-9])$") != null) {
      setMonthlyReduction(e.target.value);
    }

    if (e.target.value == "") {
      setMonthlyReduction(0);
    }
  };

  const toggleIsFirstTwoBookingsCard = () => {
    setIsFirstTwoBookingsCardSelected(!isFirstTwoBookingsCardSelected);
  };

  const toggleIsWeeklyCard = () => {
    setIsWeeklyCardSelected(!isWeeklyCardSelected);
  };

  const toggleIsMonthlyCard = () => {
    setIsMonthlySelectedCard(!isMonthlyCardSelected);
  };

  return {
    firstTwoBookingsReduction,
    weeklyReduction,
    monthlyReduction,
    isFirstTwoBookingsCardSelected,
    isWeeklyCardSelected,
    isMonthlyCardSelected,
    handleFirstTwoBookingsReductionChange,
    handleWeeklyReductionChange,
    handleMonthlyReductionChange,
    toggleIsFirstTwoBookingsCard,
    toggleIsWeeklyCard,
    toggleIsMonthlyCard,
  };
};
