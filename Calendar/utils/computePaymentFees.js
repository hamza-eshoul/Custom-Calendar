// utils
import { travelerFeesRate, hostFeesRate } from "@utils/sharedValues";

const computePaymentFees = (price) => {
  const travelerFees = (price * travelerFeesRate).toFixed(2);
  const hostFees = (price * hostFeesRate).toFixed(2);

  const combinedFees = Number(travelerFees) + Number(hostFees);

  const basePrice = (price - combinedFees).toFixed(2).replace(".", ",");

  return { travelerFees, hostFees, combinedFees, basePrice };
};

export default computePaymentFees;
