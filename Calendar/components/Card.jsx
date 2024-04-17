import { useState } from "react";
import { useTranslation } from "react-i18next";

// icons
import {
  Heart,
  HeartSolid,
  HeartSolidWhiteStroke,
  StarSolid,
} from "../assets/icons";

// package components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

const SkeletonDefaultCard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 rounded-2xl   ">
        <div className="relative flex h-[233px] animate-pulse items-center justify-center rounded-lg bg-slate-200 sm:h-[287px] "></div>
        <div className="flex w-full  items-start justify-between ">
          <div className="flex w-full flex-col  gap-4">
            <div className="space-y-2">
              <div className=" flex w-full items-center justify-between">
                <h3 className=" h-4 w-[150px] max-w-[300px] animate-pulse rounded-full bg-gray-200 font-bold"></h3>
                <h3 className=" h-4 w-[50px] max-w-[300px] animate-pulse rounded-full bg-gray-200 text-[16px] font-bold"></h3>
              </div>
              <div>
                <h3 className=" h-4  w-[80px] animate-pulse rounded-full bg-gray-200 font-bold"></h3>
              </div>
              <div>
                <h3 className=" mt-4 h-4  w-[60px] animate-pulse rounded-full bg-gray-200 font-bold"></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SkeletonRowCard = ({ direction }) => {
  return (
    <div className="flex w-full flex-col   gap-4 font-poppins md:mr-10  md:flex-row md:py-6 md:pr-2 lg:mr-0">
      <div
        className={`relative  ${
          direction === "row" && "w-full md:max-w-[300px] lg:max-w-[350px]"
        }  flex h-60 animate-pulse items-center justify-center rounded-lg bg-slate-300`}
      ></div>

      <div className=" hidden w-full items-start  justify-between md:flex">
        <div className="flex w-full flex-col justify-around gap-6  md:h-64 ">
          <div className="flex w-full items-start justify-between">
            <div className="space-y-2">
              <p className="h-4 w-[100px] rounded-full bg-gray-200"></p>
              <h3 className=" h-4 w-[60px] rounded-full bg-gray-200"></h3>
            </div>
            <div className="h-4 w-[50px] rounded-full bg-gray-200" />
          </div>
          <div className="space-y-2">
            <p className="h-4 w-[200px]  rounded-full bg-gray-200 md:w-[300px] 2xl:w-[400px]"></p>
            <p className="h-4  w-[200px] rounded-full bg-gray-200 md:w-[300px] 2xl:w-[400px]"></p>
          </div>
          <div className="flex   items-center justify-between">
            <div className="h-4 w-[100px] rounded-full bg-gray-200" />
            <div className="h-4 w-10 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex w-full items-start justify-between md:hidden ">
        <div className="flex w-full flex-col  gap-4">
          <div className="space-y-1">
            <div className=" flex w-full items-center justify-between">
              <h3 className=" h-4 w-[150px] max-w-[300px] animate-pulse rounded-full bg-gray-200 font-bold"></h3>
              <h3 className=" h-4 w-[50px] max-w-[300px] animate-pulse rounded-full bg-gray-200 text-[16px] font-bold"></h3>
            </div>
            <div>
              <h3 className=" h-4  w-[80px] animate-pulse rounded-full bg-gray-200 font-bold"></h3>
            </div>
            <div>
              <h3 className=" mt-4 h-4  w-[70px] animate-pulse rounded-full bg-gray-200 font-bold"></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RowCard = ({ data, LikeHandler, isLiked, direction, onClick }) => {
  // library hooks
  const { t } = useTranslation(["voyageur"]);

  // data
  const { title, country, price, slideImages, stars, desc, date } = data;

  return (
    <div
      onClick={onClick}
      className="flex w-full flex-col   gap-4 font-poppins md:mr-10  md:flex-row md:py-6 md:pr-2 lg:mr-0"
    >
      <div>
        <ImagesSlide direction={direction} slideImages={slideImages} />
      </div>
      {/* desktop */}
      <div className="hidden w-full items-start  justify-between md:flex ">
        <div className="flex w-full flex-col  gap-4">
          <div className="flex w-full items-start justify-between">
            <div className="">
              <p className="text-gray-400">{country}</p>
              <h3 className=" font-gilroy text-xl  font-medium ">{title}</h3>
            </div>
            <div onClick={LikeHandler} className="w-[20px]  cursor-pointer">
              {isLiked ? <HeartSolid className="text-[#FE7C48]" /> : <Heart />}
            </div>
          </div>

          <p className="max-w-[436px] font-poppins text-sm text-gray-500">
            {desc}
          </p>

          <div className="h-[2px] w-10 bg-gray-300  " />
          <div className="flex   items-center justify-between">
            <div className="flex items-center gap-2">
              <span className=" text-sm font-medium ">{stars}</span>
              <StarSolid className="-translate-y-[1px] text-[#FE7C48]" />
              <span className=" text-sm   text-black">(318 evaluations)</span>
            </div>
            <div>
              <span className="text-lg font-medium ">{price}€ </span>{" "}
              <span className=" text-sm  text-gray-600">
                /{t("homepage.night")}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end desktop */}
      <div className="flex w-full items-start  justify-between md:hidden ">
        <div className="flex w-full flex-col  gap-2">
          <div className="flex w-full items-start justify-between">
            <div className="">
              <h3 className=" font-gilroy text-[18px] font-semibold  md:text-xl">
                {title}
              </h3>
              <p className="text-sm text-gray-400">{date}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className=" text-sm font-medium ">{stars}</span>
              <StarSolid className="-translate-y-[1px] text-[#FE7C48]" />
            </div>
          </div>

          <div className="flex   items-center justify-between">
            <div>
              <span className="text-sm font-semibold md:text-lg ">
                {price}€{" "}
              </span>{" "}
              <span className=" text-sm  ">{t("homepage.night")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DefaultCard = ({ data, LikeHandler, isLiked, direction, onClick }) => {
  // library hooks
  const { t } = useTranslation(["voyageur"]);

  // data
  const { title, country, price, slideImages, stars } = data;

  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col gap-4 rounded-2xl font-poppins   md:gap-6"
    >
      <div className="relative  ">
        <ImagesSlide direction={direction} slideImages={slideImages} />
        <div
          onClick={LikeHandler}
          className="absolute right-6 top-4  z-[5] w-[20px]  cursor-pointer"
        >
          {isLiked ? (
            <HeartSolid className="text-white" />
          ) : (
            <HeartSolidWhiteStroke className="text-black/30" />
          )}
        </div>
      </div>
      <div className="flex w-full  items-start justify-between ">
        <div className="flex w-full flex-col gap-2 md:gap-4">
          <div className="flex w-full items-start justify-between">
            <div className="">
              <h3 className="  text-[18px] font-semibold leading-6 md:text-base">
                {title}
              </h3>
              <p className=" text-sm text-gray-400 ">{country}</p>
            </div>
            <div className="flex  items-center gap-1">
              <StarSolid className="-translate-y-[1px] text-[#FE7C48]" />
              <span className="text-sm ">{stars}</span>
            </div>
          </div>
          <div className="flex   items-center justify-between">
            <div>
              <span className="text-sm font-semibold leading-5 ">
                {price}€{" "}
              </span>{" "}
              <span className="text-sm  text-gray-600">
                /{t("homepage.night")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImagesSlide = ({ slideImages, direction }) => {
  return (
    <div
      className={` ${
        direction === "row" && "  md:max-w-[300px] lg:max-w-[300px]"
      }  m-auto  p-0`}
    >
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
        centeredSlides={true}
      >
        {slideImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative flex w-full  flex-col  items-center justify-center  overflow-hidden rounded-xl">
              <div className="absolute h-full w-full  bg-black bg-opacity-15" />
              <img
                className="flex  h-[233px] w-full items-start  rounded-xl object-cover sm:h-[287px]"
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

const Card = ({ direction, data, isLoading, onClick }) => {
  // local state
  const [isLiked, setIsLiked] = useState(false);

  // library hooks
  const { t } = useTranslation(["voyageur"]);

  // functions
  const LikeHandler = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      {direction === "row" ? (
        isLoading ? (
          <SkeletonRowCard direction={direction} />
        ) : (
          <RowCard
            direction={direction}
            data={data}
            isLiked={isLiked}
            LikeHandler={LikeHandler}
            onClick={onClick}
          />
        )
      ) : isLoading ? (
        <SkeletonDefaultCard />
      ) : (
        <DefaultCard
          data={data}
          isLiked={isLiked}
          LikeHandler={LikeHandler}
          onClick={onClick}
        />
      )}
    </>
  );
};
export default Card;
