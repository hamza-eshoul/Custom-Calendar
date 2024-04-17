import { format } from "date-fns";
import { fr } from "date-fns/locale";

// icons
import { Receipt, Bolt } from "@assets/icons/index";

// partials
import SelectedBookingPaymentInfo from "./SelectedBookingPaymentInfo";

const SelectedBookingDetails = ({ selectedBooking }) => {
  // data
  const {
    voyageur,
    voyageurImage,
    city,
    title,
    price,
    image,
    startDate,
    endDate,
    isIdentityVerified,
    confirmationCode,
  } = selectedBooking;

  const formattedStartDate = format(startDate, "dd/MM", {
    locale: fr,
  });

  const formattedEndDate = format(endDate, "dd/MM", {
    locale: fr,
  });

  const formattedStartDateDetail = format(startDate, "eee d MMM", {
    locale: fr,
  });
  const formattedEndDateDetail = format(endDate, "eee d MMM", {
    locale: fr,
  });

  const startDateHour = format(startDate, "HH:mm", { locale: fr });
  const endDateHour = format(endDate, "HH:mm", { locale: fr });

  return (
    <aside className="flex h-full basis-[30%] flex-col overflow-y-scroll border-l-[1px] border-gray-200 px-[30px] pt-[81px]">
      <span className="pb-7 text-lg font-semibold">
        Réservation du {formattedStartDate} au {formattedEndDate}{" "}
      </span>

      <div className="flex max-w-[265px] items-center gap-3 rounded-xl bg-primary/15 px-4 py-3 text-primary">
        <span className="text-sm font-semibold">
          Confirmations instantannée
        </span>
        <Bolt className="w-7" />
      </div>

      <div className="flex justify-between border-b-[1px] border-gray-200 pb-6 pt-6">
        <div className="flex flex-col text-lg font-semibold">
          <span>Arrivée</span>
          <span>{formattedStartDateDetail}</span>
          <span>{startDateHour}</span>
        </div>

        <div className="h-[84px] w-[1px] bg-gray-200" />

        <div className="flex flex-col text-lg font-semibold">
          <span>Départ</span>
          <span>{formattedEndDateDetail}</span>
          <span>{endDateHour}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 border-b-[1px] border-gray-200 pb-7 pt-8">
        <div className="h-[60px] w-[60px] rounded-full">
          <img src={voyageurImage} className="rounded-full" />
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">{voyageur}</span>

          {isIdentityVerified && (
            <div className="flex items-center gap-1">
              <div className="rounded-full bg-[#F8F8F8] pb-1.5 pt-[5px]">
                <img src="/userBadge.png" className="h-[13px] w-[21px]" />
              </div>
              <span className="text-sm">Identité vérifiée</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 border-b-[1px] border-gray-200 pb-7 pt-8">
        <div className="h-[60px] w-[60px]">
          <img src={image} className="h-full w-full rounded-xl" />
        </div>

        <div className="flex flex-col">
          <span className="font-gilroy text-sm font-semibold">{title}</span>

          <span className="text-xs text-gray-500">{city}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b-[1px] border-gray-200 pb-5 pt-10">
        <span className="font-semibold">Code de confirmation</span>
        <span> {confirmationCode} </span>
      </div>

      <div className="flex flex-col gap-[5px] border-b-[1px] border-gray-200 pb-[30px] pt-9">
        <span className="font-semibold">Conditions d'annulation</span>
        <p className="text-sm text-gray-500">
          {" "}
          Si vous annulez avant l'arrivée prévue le {formattedStartDateDetail},
          vous aurez droit à un remboursement partiel. Passé ce délai, votre
          remboursement dépend de la date d'annulation.
        </p>

        <div className="pt-3">
          <button className="font-semibold text-primary">En savoir plus</button>
        </div>
      </div>

      <div className="flex items-center gap-6 border-b-[1px] border-gray-200 pb-8 pt-5">
        <Receipt />
        <div>
          <button>Télecharger le reçu</button>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-b-[1px] border-gray-200 pb-5 pt-6">
        <span className="font-semibold">Règles et instructons</span>
        <p className="text-sm text-gray-500">
          Vous séjournerez dans le logement d'une autre personne, traitez-le
          donc avec soin et respect.
        </p>

        <div className="pt-3">
          <button className="font-semibold text-primary">
            Afficher les instructions
          </button>
        </div>
      </div>

      <SelectedBookingPaymentInfo price={price} />
    </aside>
  );
};

export default SelectedBookingDetails;
