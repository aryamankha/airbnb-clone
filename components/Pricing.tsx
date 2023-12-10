import star from "./star.svg";
import chevronDown from "./chevronDown.svg";
import React from "react";
export const Pricing = ({ override }: { override?: React.CSSProperties }) => {
    const nightPrice = 151;
    const rating = 4.98;
    const reviewCount = 153;
    const guestCount = 1;
    const nightsAmount = 5;
    const totalPrice = nightPrice * nightsAmount;

  return (
    <div
      className="overflow-hidden flex flex-col items-start gap-2.5 w-full pt-5 px-5 rounded-[15px] h-[475px] bg-white font-[Quicksand]"
      style={override}
    >
      <div className="flex justify-between items-start w-[327px] h-[35px]">
        <div className="flex items-start py-1 rounded w-[164px] h-full">
          <p className="h-full flex-1 min-w-0 text-black"><b>&#x24;{nightPrice}</b> night</p>
        </div>
        <div className="flex justify-end items-center h-full py-1 rounded w-[164px]">
          <img alt={"star"} className="w-[18px] h-[18px]" src={star.src} />
          <p className="w-[121px] text-black"><b>{rating}</b> &#xb7; {reviewCount} reviews</p>
        </div>
      </div>
      <div className="flex flex-col items-center rounded h-[134px] self-stretch">
        <div className="flex justify-center items-start rounded w-full flex-1 min-h-0">
          <div className="flex flex-col items-start p-2.5 rounded-tl-[10px] h-full flex-1 min-w-0 border-solid border-[rgb(177,_176,_177)] border-t border-b border-l">
            <p className="w-full flex-1 min-h-0 text-black text-xs font-semibold">
              CHECK-IN
              <br />
            </p>
            <p className="w-full flex-1 min-h-0 text-black text-sm font-normal">
              1/8/2023
              <br />
            </p>
          </div>
          <div className="flex flex-col items-start p-2.5 rounded-tr-[10px] h-full flex-1 min-w-0 border-solid border-[rgb(177,_176,_177)] border">
            <p className="w-full flex-1 min-h-0 text-black text-xs font-semibold">
              CHECKOUT
              <br />
            </p>
            <p className="w-full flex-1 min-h-0 text-black text-sm font-normal">
              1/13/2023
              <br />
            </p>
          </div>
        </div>
        <div className="flex items-start p-2.5 rounded-bl-[10px] rounded-br-[10px] w-full flex-1 min-h-0 border-solid border-[rgb(177,_176,_177)] border-b border-l border-r">
          <div className="flex flex-col items-start rounded-bl-[10px] rounded-br-[10px] h-full flex-1 min-w-0">
            <p className="w-36 flex-1 min-h-0 text-black text-xs font-semibold">
              GUESTS
              <br />
            </p>
            <p className="w-36 flex-1 min-h-0 text-black text-sm font-normal">
                {guestCount} guest
              <br />
            </p>
          </div>
          <div className="flex justify-center items-center rounded-bl-[10px] rounded-br-[10px] w-[25px] h-full">
            <img alt={"chevronDown"} className="h-5 flex-1 min-w-0" src={chevronDown.src} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2.5 rounded flex-1 min-h-0 self-stretch">
        <button className="cursor-pointer flex justify-center items-center px-[50px] py-5 rounded-[7px] opacity-90 w-full h-12 bg-[rgb(218,_12,_101)] hover:bg-[]">
          <p className="text-white text-xl font-semibold tracking-[-0.03em]">
            Reserve
          </p>
        </button>
        <p className="flex-1 min-h-0 text-black text-sm font-normal tracking-[-0.03em]">
          You won&#x2019;t be charged yet
          <br />
        </p>
      </div>
      <div className="flex justify-between items-start flex-1 min-h-0 self-stretch">
        <div className="flex items-start px-2 py-1 rounded h-full flex-1 min-w-0">
          <p className="h-full flex-1 min-w-0 text-black text-base font-[Inter] font-normal underline">
            &#x24;{nightPrice} x {nightsAmount} nights
          </p>
        </div>
        <div className="flex items-start rounded h-full">
          <p className="h-full flex-1 min-w-0 text-black text-base font-[Inter] font-normal">
            &#x24;{totalPrice}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-start flex-1 min-h-0 self-stretch border-solid border-[rgb(223,_223,_222)] border-t">
        <div className="flex items-start px-2 py-1 rounded h-full flex-1 min-w-0">
          <p className="h-full flex-1 min-w-0 text-black text-base font-[Inter] font-bold">
            Total before taxes
          </p>
        </div>
        <div className="flex items-start rounded h-full">
          <p className="h-full flex-1 min-w-0 text-black text-base font-[Inter] font-bold">
            &#x24;{totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};
