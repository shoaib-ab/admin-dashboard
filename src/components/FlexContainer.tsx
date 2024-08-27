import { FunctionComponent } from "react";
import { Button } from "@mui/material";

export type FlexContainerType = {
  className?: string;
};

const FlexContainer: FunctionComponent<FlexContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[222px] left-[384px] w-[593px] h-[114px] text-left text-[20px] text-[#fff] font-[Poppins] ${className}`}
    >
      <div className="absolute top-[0px] left-[29px] text-[13px] font-semibold opacity-[0.5]">
        ACCOUNT BALANCE
      </div>
      <div className="absolute top-[32px] left-[48px]">$ 100,000</div>
      <div className="absolute top-[30px] left-[249px] text-center">
        + 2958.57
      </div>
      <div className="absolute top-[30px] left-[452px] text-center">
        + 2958.57
      </div>
      <div className="absolute top-[0px] left-[216px] text-[12px] font-semibold opacity-[0.5]">
        TOTAL PROFIT PERCENTAGE
      </div>
      <div className="absolute top-[0px] left-[459px] text-[12px] font-semibold opacity-[0.5]">
        TOTAL PROFIT
      </div>
      <Button
        className="absolute top-[78px] left-[0px]"
        disableElevation
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 187 }}
      >
        BUY CHALLENGE
      </Button>
      <Button
        className="absolute top-[78px] left-[203px]"
        disableElevation
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px" }}
      >
        UPGRADE ACCOUNT
      </Button>
      <Button
        className="absolute top-[78px] left-[406px]"
        disableElevation
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 187 }}
      >
        WITHDRAW
      </Button>
    </div>
  );
};

export default FlexContainer;
