import { FunctionComponent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const ResourcesPage: FunctionComponent = () => {
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
      <div className="absolute top-[716px] left-[30px] w-[220px] h-[40px] text-center text-[16px] text-[rgba(255,255,255,0.9)]">
        <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[220px] h-[40px]" />
        <div className="absolute top-[7px] left-[78px] font-medium">
          Support
        </div>
      </div>
      <a className="[text-decoration:none] absolute h-[3.33%] w-[10.63%] top-[21.78%] right-[87.29%] bottom-[74.89%] left-[2.08%] text-[rgba(255,255,255,0.8)]">
        <img
          className="absolute h-[66.67%] w-[13.07%] top-[16.67%] right-[86.93%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
        <div className="absolute top-[0px] left-[32px]">DASHBOARD</div>
      </a>
      <a className="[text-decoration:none] absolute top-[256px] left-[30px] w-[163px] h-[30px] text-[rgba(255,255,255,0.8)]">
        <div className="absolute top-[0px] left-[32px]">DAILY REPORT</div>
        <img
          className="absolute h-[76.67%] w-[12.27%] top-[13.33%] right-[87.73%] bottom-[10%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group1.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[316px] left-[30px] w-[151px] h-[30px] text-[rgba(255,255,255,0.8)]">
        <div className="absolute top-[0px] left-[32px]">PROFIT SPLIT</div>
        <img
          className="absolute h-[66.67%] w-[13.25%] top-[16.67%] right-[86.75%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[436px] left-[30px] w-[167px] h-[30px] text-[rgba(255,255,255,0.8)]">
        <div className="absolute top-[0px] left-[32px]">NOTIFICATION</div>
        <img
          className="absolute h-[77.67%] w-[11.98%] top-[10%] right-[88.02%] bottom-[12.33%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </a>
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
      <a className="[text-decoration:none] absolute top-[780px] left-[30px] w-[182px] h-[30px] opacity-[0.8] text-[inherit]">
        <div className="absolute top-[0px] left-[32px]">{`Help & Support`}</div>
        <img
          className="absolute h-[66.67%] w-[10.99%] top-[16.67%] right-[89.01%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group4.svg"
        />
      </a>
      <nav className="m-[0px] absolute top-[53px] left-[344px] rounded-[30px] bg-[#3b3b3b] w-[1032px] h-[50px]" />
      <div className="absolute top-[53px] left-[1172px] w-[204px] h-[50px]">
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
      <div className="absolute top-[63px] left-[405px] text-[#faff00]">
        RESOURCE
      </div>
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
      <a className="[text-decoration:none] absolute top-[376px] left-[30px] w-[134px] h-[30px] text-[#faff00]">
        <div className="absolute top-[0px] left-[32px]">RESOURCE</div>
        <img
          className="absolute h-[66.67%] w-[14.93%] top-[13.33%] right-[85.07%] bottom-[20%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-1000007438.svg"
        />
      </a>
      <div className="absolute top-[840px] left-[97px] font-semibold">
        Sign Out
      </div>
      <img
        className="absolute h-[2.89%] w-[1.81%] top-[7.22%] right-[72.88%] bottom-[89.89%] left-[25.31%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-10000074381.svg"
      />
      <div className="absolute top-[139px] left-[374px] text-[36px] font-semibold">
        Resources
      </div>
      <div className="absolute top-[276px] left-[374px] text-[30px] font-semibold">
        Platforms
      </div>
      <div className="absolute top-[353px] left-[374px] text-[24px] font-semibold">
        <span>{`Meta Trader `}</span>
        <span className="text-[#faff00]">4</span>
      </div>
      <div className="absolute top-[205px] left-[374px] text-[rgba(255,255,255,0.6)] inline-block w-[741px]">
        Access to various trading resources for safe and easy downloading
      </div>
      <div className="absolute top-[336.8px] left-[372.8px] border-[#faff00] border-t-[0.3px] border-solid box-border w-[1003.3px] h-[0.3px]" />
      <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[353px] left-[1250px] w-[126px] h-[40px]">
        <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#faff00] border-[#faff00] border-[0.5px] border-solid box-border w-[126px] h-[40px]" />
        <div className="absolute top-[7px] left-[22px] text-[16px] font-medium font-[Poppins] text-[rgba(0,0,0,0.9)] text-center">
          Download
        </div>
      </button>
    </div>
  );
};

export default ResourcesPage;
