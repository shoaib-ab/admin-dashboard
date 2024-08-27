import { FunctionComponent } from "react";

export type FlexComponentType = {
  className?: string;
};

const FlexComponent: FunctionComponent<FlexComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[262px] left-[164px] w-[704px] h-[330px] text-center text-[20px] text-[#fff] font-[Poppins] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-[8px] border-[#faff00] border-[0.3px] border-solid box-border w-[320px] h-[330px]" />
      <div className="absolute top-[122px] left-[49px] font-semibold">
        Be Eligible for Payouts
      </div>
      <div className="absolute top-[164px] left-[24px] text-[12px] text-[rgba(255,255,255,0.7)] inline-block w-[272px]">
        Make sure you had complete all the required conditions to be eligible
        for your payout
      </div>
      <div className="absolute h-[21.21%] w-[9.94%] top-[12.12%] right-[72.3%] bottom-[66.67%] left-[17.76%] rounded-[50%] bg-[#faff00]" />
      <img
        className="absolute top-[59px] left-[149px] w-[22px] h-[31px] overflow-hidden"
        alt=""
        src="/objects.svg"
      />
      <button className="cursor-pointer [border:none] py-[4px] px-[6px] bg-[#faff00] absolute top-[252px] left-[24px] rounded-[6px] w-[272px] flex flex-row items-center justify-center box-border">
        <div className="relative text-[16px] font-semibold font-[Poppins] text-[#000] text-left">
          See Withdrawal Eligibility
        </div>
      </button>
      <div className="absolute top-[0px] left-[384px] rounded-[8px] border-[#faff00] border-[0.3px] border-solid box-border w-[320px] h-[330px]" />
      <div className="absolute top-[122px] left-[433px] font-semibold">
        Be Eligible for Payouts
      </div>
      <div className="absolute top-[164px] left-[408px] text-[12px] text-[rgba(255,255,255,0.7)] inline-block w-[272px]">
        Make sure you had complete all the required conditions to be eligible
        for your payout
      </div>
      <div className="absolute h-[21.21%] w-[9.94%] top-[12.12%] right-[17.76%] bottom-[66.67%] left-[72.3%] rounded-[50%] bg-[#faff00]" />
      <img
        className="absolute h-[10.91%] w-[5.11%] top-[17.27%] right-[20.17%] bottom-[71.82%] left-[74.72%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector8.svg"
      />
      <button className="cursor-pointer [border:none] py-[4px] px-[6px] bg-[#faff00] absolute top-[252px] left-[408px] rounded-[6px] w-[272px] flex flex-row items-center justify-center box-border">
        <div className="relative text-[16px] font-semibold font-[Poppins] text-[#000] text-left">
          Request Payout
        </div>
      </button>
    </div>
  );
};

export default FlexComponent;
