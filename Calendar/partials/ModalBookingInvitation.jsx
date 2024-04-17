import { v4 as uuidv4 } from "uuid";

// hooks
import { useCustomToast } from "@hooks/useCustomToast";

// animations
import { motion } from "framer-motion";
import { desktopModalSlideVariant } from "@services/animations/modalsVariants";

// icons
import { ChevronLeft } from "@assets/icons";

// components
import Button from "@components/Button";
import Overlay from "@components/Overlay";

// package components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

const data = {
  id: uuidv4(),
  slideImages: [
    {
      id: uuidv4(),
      image: "/slide16.jpg",
    },
    {
      id: uuidv4(),
      image: "/slide17.jpg",
    },
    {
      id: uuidv4(),
      image: "/slide18.jpg",
    },
    {
      id: uuidv4(),
      image: "/slide19.jpg",
    },
    {
      id: uuidv4(),
      image: "/slide20.jpg",
    },
  ],

  title: "Villa Anna de luxe a Marrakech",
  price: 539,
  date: "01 Jan. 23 - 06 Jan. 23",
};

const ImagesSlide = ({ data }) => {
  return (
    <div className={`   m-auto flex-1 overflow-hidden  rounded-lg p-0`}>
      <Swiper
        className="pb-[1rem]  "
        style={{ zIndex: 1 }}
        modules={[Navigation, Pagination]}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        centeredSlides={true}
      >
        {data.slideImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative flex h-[183px] w-full   ">
              <div className="absolute h-full w-full  bg-black bg-opacity-15" />
              <img
                className="flex h-full w-full items-start rounded-lg object-cover"
                src={item.image}
                loading="lazy"
                alt={item.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ModalBookingInvitation = ({ hideModal }) => {
  // custom hooks
  const { mockLoading, simulateLoading } = useCustomToast(
    "success",
    "Votre invitation a été envoyée avec succès !",
  );

  return (
    <>
      <Overlay onClick={hideModal} />
      <motion.div
        variants={desktopModalSlideVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed left-1/2 top-1/2 z-30 m-auto w-[712px] -translate-x-1/2 -translate-y-1/2  rounded-[22px] bg-white pb-[18px]"
      >
        <div className="relative flex items-center border-b pb-[23px] pl-9 pt-4 ">
          <div className="grid h-[42px] w-[42px] place-items-center">
            <ChevronLeft
              className={"  h-[15.75px] w-[15.75px] cursor-pointer "}
            />
          </div>
          <span className="ml-[175px] text-center text-lg font-medium ">
            Booker une réservation
          </span>
        </div>

        <div className="m-auto mt-[38px] flex w-[587px] items-center gap-[31px]">
          <ImagesSlide data={data} />
          <div className="flex-1">
            <h4 className="text-lg font-semibold">{data.title}</h4>
            <p className="mt-3 text-sm">
              <span className="text-sm font-semibold">{data.price}€</span> 6
              nuits . <span className="text-gray-500">{data.date}</span>
            </p>
          </div>
        </div>
        <div className="mt-[22px] h-[1px] bg-gray-200" />

        <div className="m-auto  mt-[25px] w-[587px] ">
          <h3 className="text-[22px] font-medium">
            Envoyer cette offre de réservation à{" "}
          </h3>
        </div>
        <div className="m-auto mt-[25px] w-[587px] rounded-lg border border-[#E5E7EB] p-3 pb-1">
          <span className="text-xs text-[#717171]">E-mail</span>
          <input type="text" className="w-full border-none p-0  outline-none" />
        </div>
        <div className="mx-auto  mt-[11px] w-[587px] ">
          <p className="text-xs text-gray-500 ">
            Le voyageur recevra votre offre de réservation par email{" "}
          </p>
        </div>

        <div className="mt-[38px] h-[1px] bg-gray-200" />
        <div className="mx-10 mt-[28px] flex items-center justify-center gap-3">
          <Button
            variant={"secondary"}
            className={"w-[145px]"}
            onClick={hideModal}
          >
            Retour
          </Button>
          <Button
            isLoading={mockLoading}
            className={"w-[178px]"}
            onClick={simulateLoading}
          >
            Envoyer
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default ModalBookingInvitation;
