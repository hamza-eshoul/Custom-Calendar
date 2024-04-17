const LoadingOptionsCard = () => {
  return (
    <article className="rounded-xl border-[2px] border-gray-100">
      <div className="flex items-center justify-between rounded-[9px] bg-white px-4 py-5 sm:px-6 sm:pb-7 sm:pt-6">
        <div className="flex items-center gap-6">
          <div className="size-10 animate-pulse rounded-full bg-gray-200" />
          <div className="flex flex-col gap-3">
            <div className="h-[30px] w-[160px] animate-pulse rounded-xl bg-gray-200" />

            <p className="max-w-[232px] font-poppins text-[12px] xsm:max-w-md xsm:font-inter xsm:text-[14px]">
              <div className="h-[30px] w-[200px] animate-pulse rounded-xl bg-gray-200" />
            </p>
          </div>
        </div>

        <div className="h-[30px] w-[90px] animate-pulse rounded-xl bg-gray-200" />
      </div>
    </article>
  );
};

export default LoadingOptionsCard;
