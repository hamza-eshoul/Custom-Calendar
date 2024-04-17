const isMobile = window.innerWidth < 450;

const travelerFeesRate = 0.15;
const hostFeesRate = 0.02;
const serviceFeesRate = travelerFeesRate + hostFeesRate;

const defaultNetworkErrorMessage =
  "A network error occured, please try again later";

export {
  isMobile,
  travelerFeesRate,
  hostFeesRate,
  serviceFeesRate,
  defaultNetworkErrorMessage,
};
