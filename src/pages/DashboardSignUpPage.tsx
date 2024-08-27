import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import SignupComponent from "../SignupComponent";

const DashboardSignUpPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-[#171717] h-[900px] overflow-hidden text-left text-[16px] text-[#faff00] font-[Poppins]">
      <div className="absolute top-[0px] left-[0px] shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] bg-[#171717] border-[#faff00] border-r-[0.2px] border-solid box-border w-[280px] h-[900px]" />
      <div className="absolute top-[-259px] left-[calc(50%_-_175px)] [filter:blur(700px)] rounded-[50%] bg-[#ffe600] w-[350px] h-[349px]" />
      <div className="absolute top-[48px] left-[18px] w-[244px] h-[35px] text-justify font-[Inter]">
        <img
          className="absolute top-[2.5px] left-[2.8px] w-[29.9px] h-[29.9px]"
          alt=""
          src="/group-1000007325.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-[244px] h-[35px]">
          <b className="absolute top-[9px] left-[41px]">
            <span>{`FREEDOM `}</span>
            <span className="text-[#fff]">ELITE</span>
            <span> FUNDING</span>
          </b>
          <img
            className="absolute top-[0px] left-[0px] w-[35px] h-[35px] object-cover"
            alt=""
            src="/2@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[53px] left-[344px] w-[1032px] h-[50px] text-[20px]">
        <div className="absolute top-[0px] left-[0px] rounded-[30px] bg-[#3b3b3b] w-[1032px] h-[50px]" />
        <div className="absolute h-3/5 w-[15.6%] top-[20%] right-[82.36%] bottom-[20%] left-[2.03%]">
          <img
            className="absolute h-[86.67%] w-[16.15%] top-[6.67%] right-[83.85%] bottom-[6.67%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
          <div className="absolute top-[0px] left-[40px]">DASHBOARD</div>
        </div>
      </div>
      <div className="absolute top-[168px] left-[30px] w-[220px] h-[106px] text-[rgba(255,255,255,0.6)]">
        <Button
          className="absolute top-[0px] left-[0px]"
          disableElevation
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 220, height: 40 }}
        >
          Sign Up
        </Button>
        <div className="absolute top-[82px] left-[22px]">
          <span>Create Account:</span>
          <span className="text-[#fff]"> Login</span>
        </div>
        <div className="absolute top-[52px] left-[100px]">Or</div>
      </div>
      <SignupComponent />
    </div>
  );
};

export default DashboardSignUpPage;
