import { FunctionComponent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import FlexContainer from "../components/FlexContainer";

const DashboardDesign: FunctionComponent = () => {
  const [groupDropdownAnchorEl, setGroupDropdownAnchorEl] =
    useState<HTMLElement | null>(null);
  const groupDropdownOpen = Boolean(groupDropdownAnchorEl);
  const handleGroupDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
    setGroupDropdownAnchorEl(event.currentTarget);
  };
  const handleGroupDropdownClose = () => {
    setGroupDropdownAnchorEl(null);
  };
  return (
    <div className="w-full relative bg-[#171717] h-[900px] overflow-hidden text-left text-[20px] text-[#fff] font-[Poppins]">
      <div className="absolute top-[0px] left-[0px] shadow-[4px_0px_4px_rgba(0,_0,_0,_0.25)] bg-[#171717] border-[#faff00] border-r-[0.2px] border-solid box-border w-[280px] h-[900px]" />
      <div className="absolute top-[-259px] left-[calc(50%_-_175px)] [filter:blur(700px)] rounded-[50%] bg-[#ffe600] w-[350px] h-[349px]" />
      <div className="absolute top-[48px] left-[18px] w-[244px] h-[35px] text-justify text-[16px] text-[#faff00] font-[Inter]">
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
      <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[132px] left-[30px] w-[220px] h-[40px]">
        <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[220px] h-[40px]" />
        <div className="absolute top-[7px] left-[88px] text-[16px] font-medium font-[Poppins] text-[rgba(255,255,255,0.9)] text-center">
          Menu
        </div>
      </button>
      <div className="absolute top-[514px] left-[30px] w-[220px] h-[40px] text-center text-[16px] text-[rgba(255,255,255,0.9)]">
        <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[220px] h-[40px]" />
        <div className="absolute top-[7px] left-[67px] font-medium">
          Preference
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[716px] left-[30px] w-[220px] h-[40px]">
        <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[220px] h-[40px]" />
        <div className="absolute top-[7px] left-[78px] text-[16px] font-medium font-[Poppins] text-[rgba(255,255,255,0.9)] text-center">
          Support
        </div>
      </button>
      <a className="[text-decoration:none] absolute h-[3.33%] w-[10.63%] top-[21.78%] right-[87.29%] bottom-[74.89%] left-[2.08%] text-[#faff00]">
        <img
          className="absolute h-[66.67%] w-[13.07%] top-[16.67%] right-[86.93%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group7.svg"
        />
        <div className="absolute top-[0px] left-[32px]">DASHBOARD</div>
      </a>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[256px] left-[30px] w-[163px] h-[30px] text-[rgba(255,255,255,0.8)]"
        to="/daily-report-page"
      >
        <div className="absolute top-[0px] left-[32px]">DAILY REPORT</div>
        <img
          className="absolute h-[76.67%] w-[12.27%] top-[13.33%] right-[87.73%] bottom-[10%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group1.svg"
        />
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[316px] left-[30px] w-[151px] h-[30px] text-[rgba(255,255,255,0.8)]"
        to="/profit-split-page"
      >
        <div className="absolute top-[0px] left-[32px]">PROFIT SPLIT</div>
        <img
          className="absolute h-[66.67%] w-[13.25%] top-[16.67%] right-[86.75%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </Link>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[436px] left-[30px] w-[167px] h-[30px] text-[rgba(255,255,255,0.8)]"
        to="/daily-report-page"
      >
        <div className="absolute top-[0px] left-[32px]">NOTIFICATION</div>
        <img
          className="absolute h-[77.67%] w-[11.98%] top-[10%] right-[88.02%] bottom-[12.33%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </Link>
      <a className="[text-decoration:none] absolute top-[578px] left-[30px] w-[127px] h-[30px] opacity-[0.8] text-[inherit]">
        <div className="absolute top-[0px] left-[32px]">My Profile</div>
        <img
          className="absolute h-[74.67%] w-[15.75%] top-[13.33%] right-[84.25%] bottom-[12%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group2.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[638px] left-[30px] w-[113px] h-[30px] opacity-[0.8] text-[inherit]">
        <div className="absolute top-[0px] left-[32px]">Settings</div>
        <img
          className="absolute h-[66.67%] w-[17.7%] top-[16.67%] right-[82.3%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group3.svg"
        />
      </a>
      <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[780px] left-[30px] w-[182px] h-[30px] opacity-[0.8]">
        <div className="absolute top-[0px] left-[32px] text-[20px] font-[Poppins] text-[#fff] text-left">{`Help & Support`}</div>
        <img
          className="absolute h-[66.67%] w-[10.99%] top-[16.67%] right-[89.01%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group4.svg"
        />
      </button>
      <div className="absolute top-[53px] left-[344px] w-[1032px] h-[50px] text-[#faff00]">
        <div className="absolute top-[0px] left-[0px] rounded-[30px] bg-[#3b3b3b] w-[1032px] h-[50px]" />
        <div className="absolute top-[0px] left-[828px] w-[204px] h-[50px]">
          <img
            className="absolute top-[0px] left-[154px] rounded-[50%] w-[50px] h-[50px] object-cover"
            alt=""
            src="/ellipse-347@2x.png"
          />
          <div className="absolute top-[13px] left-[0px]">
            <Button
              id="button-Angel Priyanka"
              aria-controls="menu-Angel Priyanka"
              aria-haspopup="true"
              aria-expanded={groupDropdownOpen ? "true" : undefined}
              onClick={handleGroupDropdownClick}
              color="primary"
              sx={{ width: "142", height: "24" }}
            >
              Angel Priyanka
            </Button>
            <Menu
              anchorEl={groupDropdownAnchorEl}
              open={groupDropdownOpen}
              onClose={handleGroupDropdownClose}
            >
              <MenuItem onClick={handleGroupDropdownClose}>
                Angel Priyanka
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="absolute h-3/5 w-[15.6%] top-[20%] right-[82.36%] bottom-[20%] left-[2.03%]">
          <img
            className="absolute h-[86.67%] w-[16.15%] top-[6.67%] right-[83.85%] bottom-[6.67%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
          <div className="absolute top-[0px] left-[40px]">DASHBOARD</div>
        </div>
      </div>
      <div className="absolute top-[212px] left-[1039px] text-[16px] font-semibold opacity-[0.7]">
        RECENT PAYOUT
      </div>
      <img
        className="absolute top-[222px] left-[1324px] w-[14px] h-[2px]"
        alt=""
        src="/group-1000007433.svg"
      />
      <img
        className="absolute h-[2.18%] w-[1.25%] top-[7.56%] right-[20.28%] bottom-[90.27%] left-[78.47%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group5.svg"
      />
      <img
        className="absolute h-[1.83%] w-[1.25%] top-[7.78%] right-[22.36%] bottom-[90.39%] left-[76.39%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group6.svg"
      />
      <img
        className="absolute h-[0.91%] w-[0.57%] top-[7.56%] right-[22%] bottom-[91.53%] left-[77.43%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      />
      <FlexContainer />
      <div className="absolute top-[198px] left-[360px] [filter:drop-shadow(0px_0px_12px_rgba(0,_0,_0,_0.15))] rounded-[6px] border-[#faff00] border-[0.3px] border-solid box-border w-[641px] h-[162px]" />
      <input
        className="border-[#faff00] border-[0.2px] border-solid [outline:none] bg-[#3b3b3b] absolute top-[257px] left-[1039px] rounded-[6px] box-border w-[299px] h-[55px]"
        type="text"
      />
      <img
        className="absolute top-[265px] left-[1045px] w-[41px] h-[39px] overflow-hidden"
        alt=""
        src="/layer-1.svg"
      />
      <input
        className="border-[#faff00] border-[0.2px] border-solid [outline:none] bg-[#3b3b3b] absolute top-[332px] left-[1039px] rounded-[6px] box-border w-[299px] h-[55px]"
        type="text"
      />
      <img
        className="absolute top-[340px] left-[1045px] w-[41px] h-[39px] overflow-hidden"
        alt=""
        src="/layer-1.svg"
      />
      <div className="absolute top-[288px] left-[1091px] text-[14px] font-semibold opacity-[0.5]">
        USDT-TRC20
      </div>
      <div className="absolute top-[363px] left-[1091px] text-[14px] font-semibold opacity-[0.5]">
        USDT-TRC20
      </div>
      <div className="absolute top-[262px] left-[1258px] text-[14px] text-[#67ea00]">
        Successful
      </div>
      <div className="absolute top-[337px] left-[1258px] text-[14px] text-[#67ea00]">
        Successful
      </div>
      <div className="absolute top-[254px] left-[1091px] text-[26px]">
        $ 2957,00
      </div>
      <div className="absolute top-[329px] left-[1091px] text-[26px]">
        $ 2957,00
      </div>
      <div className="absolute top-[286px] left-[1233px] text-[12px] opacity-[0.5]">
        APRIL - 20 - 2024
      </div>
      <div className="absolute top-[361px] left-[1233px] text-[12px] opacity-[0.5]">
        APRIL - 20 - 2024
      </div>
      <div className="absolute top-[376px] left-[360px] w-[185px] h-[42px] text-[28px]">
        <div className="absolute top-[0px] left-[23px] font-semibold">
          2107534577
        </div>
        <img
          className="absolute h-[26.19%] w-[8.11%] top-[35.71%] right-[91.89%] bottom-[38.1%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector4.svg"
        />
      </div>
      <div className="absolute top-[386px] left-[901px] w-[100px] h-[21px] text-[14px] text-[rgba(255,255,255,0.5)]">
        <div className="absolute top-[0px] left-[13px]">
          <span>Sort by</span>
          <span className="text-[#fff]"> Time</span>
        </div>
        <img
          className="absolute h-[33.33%] w-[8%] top-[33.33%] right-[92%] bottom-[33.33%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector5.svg"
        />
      </div>
      <div className="absolute top-[434px] left-[360px] rounded-[8px] bg-[#252525] border-[#faff00] border-[0.3px] border-solid box-border w-[991px] h-[370px]" />
      <div className="absolute top-[558px] left-[396px] rounded-[8px] bg-[#171717] border-[#faff00] border-[0.3px] border-solid box-border w-[919px] h-[206px]" />
      <button className="cursor-pointer [border:none] py-[6px] px-[14px] bg-[#252525] absolute top-[840px] left-[calc(50%_-_19px)] rounded-[6px] w-[309px] flex flex-row items-center justify-center box-border">
        <div className="relative text-[16px] font-medium font-[Poppins] text-[#faff00] text-left">
          See Details
        </div>
      </button>
      <div className="absolute top-[470px] left-[396px] text-[40px] font-semibold">
        Latest Challenges
      </div>
      <div className="absolute top-[582px] left-[420px] text-[40px] font-semibold">
        200k Express
      </div>
      <div className="absolute top-[658px] left-[420px] text-[16px] font-semibold opacity-[0.5]">
        Current Balance
      </div>
      <div className="absolute top-[658px] left-[1048px] text-[16px] font-semibold opacity-[0.5]">
        Current Balance
      </div>
      <div className="absolute top-[682px] left-[420px] text-[28px] font-semibold text-[rgba(255,255,255,0.6)]">
        $180,481.87
      </div>
      <div className="absolute top-[682px] left-[1045px] text-[28px] font-semibold text-[rgba(255,255,255,0.6)] text-right">
        February 19, 2024
      </div>
      <button className="cursor-pointer border-[#faff00] border-[1px] border-solid py-[6px] px-[14px] bg-[#252525] absolute top-[601px] left-[1146px] rounded-[6px] box-border w-[145px] flex flex-row items-center justify-center">
        <div className="relative text-[16px] font-medium font-[Poppins] text-[#faff00] text-left">
          Funded
        </div>
      </button>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[376px] left-[30px] w-[134px] h-[30px] text-[rgba(255,255,255,0.8)]"
        to="/resources-page"
      >
        <div className="absolute top-[0px] left-[32px]">RESOURCE</div>
        <img
          className="absolute h-[66.67%] w-[14.93%] top-[13.33%] right-[85.07%] bottom-[20%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-10000074382.svg"
        />
      </Link>
      <div className="absolute top-[840px] left-[97px] font-semibold">
        Sign Out
      </div>
      <div className="absolute top-[171.9px] left-[305.9px] border-[#faff00] border-t-[0.2px] border-solid box-border w-[1032.2px] h-[0.2px]" />
    </div>
  );
};

export default DashboardDesign;
