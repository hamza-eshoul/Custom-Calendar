import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// utils
import { defaultNetworkErrorMessage } from "@utils/sharedValues";

// state
import { useAuthStore } from "@services/state/authStore";

export const useHandleServerError = () => {
  // global state
  const disconnectUser = useAuthStore((state) => state.disconnectUser);

  // library hooks
  const navigate = useNavigate();

  // functions
  const extractErrorStatus = (error) => {
    if (error.response) {
      return error.response.status;
    }

    if (error.request) {
      return error.request.status;
    }
  };

  const handleUnauthorizedRequest = (error) => {
    const errorStatus = extractErrorStatus(error);

    if (errorStatus == 401) {
      disconnectUser();
      navigate("/");
      return;
    }

    if (errorStatus !== 401) {
      return false;
    }
  };

  const handleFetchServerError = (error) => {
    handleUnauthorizedRequest(error);

    const errorStatus = extractErrorStatus(error);

    if (errorStatus == 400 || errorStatus == 404) {
      return error.message;
    }

    // 500 or other cases
    if (errorStatus !== 400 && errorStatus !== 404) {
      return defaultNetworkErrorMessage;
    }
  };

  const handleMutationServerError = (error) => {
    handleUnauthorizedRequest(error);

    const errorStatus = extractErrorStatus(error);

    if (errorStatus == 400 || errorStatus == 404) {
      toast.error(error.message);
    }

    // 500 or other cases
    if (errorStatus !== 400 && errorStatus !== 404) {
      toast.error(defaultNetworkErrorMessage);
    }
  };

  return { handleMutationServerError, handleFetchServerError };
};
