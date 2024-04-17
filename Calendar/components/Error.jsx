import { useState, useEffect } from "react";

// hooks
import { useHandleServerError } from "@hooks/useHandleServerError";

const Error = ({ error, containerHeight, isMobile }) => {
  // local state
  const [errorMessage, setErrorMessage] = useState(null);

  // custom hooks
  const { handleFetchServerError } = useHandleServerError();

  // useEffect
  useEffect(() => {
    const message = handleFetchServerError(error);

    setErrorMessage(message);
  }, [error]);

  console.log(isMobile);

  return (
    <div
      className={`w-full items-center justify-center ${containerHeight} p-3 ${isMobile ? "flex xsm:hidden" : "hidden xsm:flex "}`}
    >
      <span className="text-center font-poppins text-lg font-semibold text-[#EA1D25] xsm:text-xl">
        {errorMessage}
      </span>
    </div>
  );
};

Error.defaultProps = {
  isMobile: false,
};

export default Error;
