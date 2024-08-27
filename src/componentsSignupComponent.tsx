import { FunctionComponent } from "react";
import { Button } from "@mui/material";

export type SignupComponentType = {
  className?: string;
};

const SignupComponent: FunctionComponent<SignupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_247px)] left-[calc(50%_-_80px)] w-[440px] h-[597px] text-left text-[14px] text-[#fff] font-[Poppins] ${className}`}
    >
      <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_220px)] rounded-[16px] bg-[#000] w-[440px] h-[597px]" />
      <div className="absolute top-[calc(50%_-_298.5px)] left-[calc(50%_-_220px)] rounded-t-[16px] rounded-b-[0px] border-[#faff00] border-b-[0.5px] border-solid box-border w-[440px] h-[56px] opacity-[0.5]" />
      <div className="absolute top-[10px] left-[calc(50%_-_196px)] text-[24px] font-semibold inline-block w-[253px]">
        Create Account
      </div>
      <div className="absolute top-[97px] left-[calc(50%_-_196px)] text-[16px] font-medium inline-block w-[159px]">
        <span>Email Address</span>
        <span className="text-[#faff00]">*</span>
      </div>
      <div className="absolute top-[267px] left-[calc(50%_-_196px)] text-[16px] inline-block w-[198px]">
        Referral Code (Optional)
      </div>
      <input
        className="border-[#faff00] border-[0.3px] border-solid [outline:none] bg-[#171717] absolute top-[133px] left-[24px] rounded-[4px] box-border w-[392px] h-[46px]"
        type="text"
      />
      <input
        className="border-[#faff00] border-[0.3px] border-solid [outline:none] bg-[#171717] absolute top-[191px] left-[24px] rounded-[4px] box-border w-[392px] h-[46px]"
        type="text"
      />
      <input
        className="border-[#faff00] border-[0.3px] border-solid [outline:none] bg-[#171717] absolute top-[299px] left-[24px] rounded-[4px] box-border w-[392px] h-[46px]"
        type="text"
      />
      <div className="absolute top-[147px] left-[calc(50%_-_184px)] inline-block w-[186px] opacity-[0.4]">
        Email address
      </div>
      <div className="absolute top-[359px] left-[calc(50%_-_174px)] font-light inline-block w-[370px]">
        <span>{`By clicking ‘’Create Account’’, you agree to `}</span>
        <span className="text-[#faff00]">Terms of Service</span>
        <span>{` and `}</span>
        <span className="text-[#faff00]">Privacy Policy</span>
      </div>
      <div className="absolute top-[205px] left-[calc(50%_-_184px)] inline-block w-[186px] opacity-[0.4]">
        Password
      </div>
      <div className="absolute top-[487px] left-[calc(50%_-_56px)] text-center">
        Or sign up with
      </div>
      <img
        className="absolute top-[207px] left-[384px] w-[20px] h-[13px]"
        alt=""
        src="/frame-1000006123.svg"
      />
      <Button
        className="absolute top-[417px] left-[24px]"
        disableElevation
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 392, height: 46 }}
      >
        Create Account
      </Button>
      <img
        className="absolute h-[2.35%] w-[3.18%] top-[60.47%] right-[91.36%] bottom-[37.19%] left-[5.45%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector9.svg"
      />
      <img
        className="absolute top-[497px] left-[25px] max-h-full w-[123px]"
        alt=""
        src="/vector-43.svg"
      />
      <img
        className="absolute top-[497px] left-[293px] max-h-full w-[123px]"
        alt=""
        src="/vector-43.svg"
      />
      <div className="absolute top-[528px] left-[25px] w-[391px] h-[40.4px]">
        <button className="cursor-pointer border-[#1d5dc7] border-[1px] border-solid py-[10px] px-[35px] bg-[#fff] absolute top-[0px] left-[0px] rounded-[4px] box-border w-[182px] flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-start gap-[7px]">
            <img
              className="w-[20px] relative h-[20px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/devicongoogle@2x.png"
            />
            <img
              className="w-[50px] relative h-[16.3px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/logosgoogle@2x.png"
            />
          </div>
        </button>
        <button className="cursor-pointer border-[#1d5dc7] border-[1px] border-solid py-[10px] px-[35px] bg-[#fff] absolute top-[0px] left-[209px] rounded-[4px] box-border w-[182px] flex flex-col items-center justify-center">
          <img
            className="w-[60px] relative h-[20.4px] object-cover"
            alt=""
            src="/2552551960-whatifapplediscontinuesthemacproductline-1@2x.png"
          />
        </button>
      </div>
      <div className="absolute top-[16px] left-[calc(50%_+_112px)] w-[84px] h-[24px] text-[16px] text-[#faff00]">
        <div className="absolute top-[0px] left-[calc(50%_-_12px)] font-medium">
          Sign In
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[24px] h-[24px] overflow-hidden"
          alt=""
          src="/uilexchange.svg"
        />
      </div>
    </div>
  );
};

export default SignupComponent;
