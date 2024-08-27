import { FunctionComponent } from "react";

export type LoginComponentType = {
  className?: string;
};

const LoginComponent: FunctionComponent<LoginComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_203px)] left-[calc(50%_-_80px)] w-[440px] h-[509px] text-left text-[16px] text-[#fff] font-[Poppins] ${className}`}
    >
      <div className="absolute top-[calc(50%_-_254.5px)] left-[calc(50%_-_220px)] rounded-[16px] bg-[#000] w-[440px] h-[509px]" />
      <div className="absolute top-[calc(50%_-_254.5px)] left-[calc(50%_-_220px)] rounded-t-[16px] rounded-b-[0px] border-[#faff00] border-b-[0.5px] border-solid box-border w-[440px] h-[56px] opacity-[0.5]" />
      <div className="absolute top-[10px] left-[calc(50%_-_196px)] text-[24px] font-semibold inline-block w-[253px]">
        Welcome
      </div>
      <div className="absolute top-[97px] left-[calc(50%_-_196px)] font-medium inline-block w-[159px]">
        <span>Email Address</span>
        <span className="text-[#faff00]">*</span>
      </div>
      <div className="absolute top-[245px] left-[calc(50%_+_67px)] font-medium font-[Inter] text-[#faff00] text-right">
        Forget password
      </div>
      <input
        className="border-[#faff00] border-[0.3px] border-solid [outline:none] bg-[#171717] absolute top-[133px] left-[24px] rounded-[4px] box-border w-[392px] h-[46px]"
        type="text"
      />
      <input
        className="border-[#faff00] border-[0.3px] border-solid [outline:none] bg-[#171717] absolute top-[191px] left-[24px] rounded-[4px] box-border w-[392px] h-[46px]"
        type="text"
      />
      <div className="absolute top-[146px] left-[calc(50%_-_184px)] text-[14px] font-light inline-block w-[186px] opacity-[0.4]">
        Email address
      </div>
      <div className="absolute top-[204px] left-[calc(50%_-_184px)] text-[14px] font-light inline-block w-[186px] opacity-[0.4]">
        Password
      </div>
      <img
        className="absolute top-[207px] left-[384px] w-[20px] h-[13px]"
        alt=""
        src="/frame-1000006123.svg"
      />
      <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[300px] left-[24px] w-[392px] h-[46px]">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-[#faff00] w-[392px] h-[46px]" />
        <div className="absolute top-[13px] left-[calc(50%_-_79px)] w-[159px] h-[19px]">
          <b className="absolute top-[0px] left-[calc(50%_-_79.5px)] text-[16px] inline-block font-[Inter] text-[#000] text-center w-[159px]">
            Log in
          </b>
        </div>
      </button>
      <div className="absolute top-[370px] left-[calc(50%_-_195px)] w-[391px] h-[81.4px] text-center text-[14px]">
        <div className="absolute top-[0px] left-[calc(50%_-_53.5px)]">
          Or Sign in with
        </div>
        <img
          className="absolute top-[10px] left-[0px] max-h-full w-[123px]"
          alt=""
          src="/vector-43.svg"
        />
        <img
          className="absolute top-[10px] left-[268px] max-h-full w-[123px]"
          alt=""
          src="/vector-43.svg"
        />
        <div className="absolute top-[41px] left-[0px] w-[391px] h-[40.4px]">
          <button className="cursor-pointer border-[#1d5dc7] border-[1px] border-solid py-[10px] px-[35px] bg-[#fff] absolute top-[0px] left-[0px] rounded-[4px] box-border w-[182px] flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-start gap-[7px]">
              <img
                className="w-[20px] relative h-[20px] overflow-hidden shrink-0"
                alt=""
                src="/devicongoogle.svg"
              />
              <img
                className="w-[50px] relative h-[16.3px] overflow-hidden shrink-0"
                alt=""
                src="/logosgoogle.svg"
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
      </div>
      <a className="[text-decoration:none] absolute top-[16px] left-[calc(50%_+_106px)] w-[90px] h-[24px] text-right text-[#faff00] font-[Inter]">
        <div className="absolute top-[2px] left-[calc(50%_-_15px)] font-medium">
          Sign Up
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[24px] h-[24px] overflow-hidden"
          alt=""
          src="/uilexchange.svg"
        />
      </a>
    </div>
  );
};

export default LoginComponent;
