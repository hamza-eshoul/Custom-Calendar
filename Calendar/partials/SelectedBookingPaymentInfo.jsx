// utils
import computePaymentFees from "@utils/computePaymentFees";

// icons
import { ArrowDown } from "@assets/icons/index";

const SelectedBookingPaymentInfo = ({ price }) => {
  // utils
  const { travelerFees, hostFees, basePrice } = computePaymentFees(price);

  return (
    <div className="flex flex-col gap-5 border-b-[1px] border-gray-200 pb-11 pt-6">
      <span className="text-lg font-semibold">Information de paiement</span>

      <div className="flex items-center justify-between pt-1">
        <span className="font-medium">
          Prix à payer par le voyageur{" "}
          <span className="font-semibold">{price} €</span>
        </span>{" "}
        <ArrowDown className="h-8 w-8" />
      </div>

      <div className="flex justify-between">
        <span>Prix de base</span>
        <span>{basePrice} €</span>
      </div>

      <div className="flex justify-between">
        <span>Frais Voyageur</span>
        <div>
          {travelerFees}€{" "}
          <span className="text-sm font-medium text-gray-500">(15%)</span>
        </div>
      </div>

      <div className="flex justify-between">
        <span>Frais Hôte</span>
        <div>
          {hostFees}€{" "}
          <span className="text-sm font-medium text-gray-500">(2%)</span>
        </div>
      </div>
    </div>
  );
};

export default SelectedBookingPaymentInfo;
