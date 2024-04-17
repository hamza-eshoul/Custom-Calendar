import { useState } from "react";
import { toast } from "react-toastify";

// utils
import { isMobile } from "@utils/sharedValues";

export const useCustomToast = (status, message) => {
  // local state
  const [mockLoading, setMockLoading] = useState(false);

  // functions
  const simulateLoading = () => {
    setMockLoading(true);

    setTimeout(() => {
      setMockLoading(false);
      if (status == "success") {
        toast.success(
          message
            ? message
            : "Vos informations ont étés mises à jour avec succès !",
          {
            position: isMobile ? "bottom-center" : "top-right",
          },
        );
      }
      if (status == "error") {
        toast.error(
          message ? message : "La mise à jour de vos informations a échoué.",
          {
            position: isMobile ? "bottom-center" : "top-right",
          },
        );
      }
    }, 1500);
  };

  return { mockLoading, simulateLoading };
};
