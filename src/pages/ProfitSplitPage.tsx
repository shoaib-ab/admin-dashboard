import { FunctionComponent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import FlexComponent from "../components/FlexComponent";

const ProfitSplitPage: FunctionComponent = () => {
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
    <div className="w-full relative bg-[#171717] h-[900px] overflow-hidden">
      <div className="absolute top-[-259px] left-[calc(50%_-_175px)] [filter:blur(700px)] rounded-[50%] bg-[#ffe600] w-[350px] h-[349px]" />
      <main className="absolute top-[0px] left-[0px] w-[1376px] h-[900px] text-justify text-[16px] text-[#faff00] font-[Inter]">
        <div className="absolute top-[0px] left-[0px] w-[280px] h-[900px]">
          <div className="absolute top-[0px] left-[0px] shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] bg-[#171717] border-[#faff00] border-r-[0.2px] border-solid box-border w-[280px] h-[900px]" />
          <div className="absolute top-[48px] left-[18px] w-[244px] h-[822px]">
            <div className="absolute top-[0px] left-[0px] w-[244px] h-[35px]">
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
            <div className="absolute top-[84px] left-[12px] w-[220px] h-[738px] text-left text-[20px] text-[rgba(255,255,255,0.8)] font-[Poppins]">
              <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[0px] left-[0px] w-[220px] h-[40px]">
                <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[220px] h-[40px]" />
                <div className="absolute top-[7px] left-[88px] text-[16px] font-medium font-[Poppins] text-[rgba(255,255,255,0.9)] text-center">
                  Menu
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[382px] left-[0px] w-[220px] h-[40px]">
                <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[220px] h-[40px]" />
                <div className="absolute top-[7px] left-[67px] text-[16px] font-medium font-[Poppins] text-[rgba(255,255,255,0.9)] text-center">
                  Preference
                </div>
              </button>
              <div className="absolute top-[584px] left-[0px] w-[220px] h-[40px] text-center text-[16px] text-[rgba(255,255,255,0.9)]">
                <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[220px] h-[40px]" />
                <div className="absolute top-[7px] left-[78px] font-medium">
                  Support
                </div>
              </div>
              <a className="[text-decoration:none] absolute h-[4.07%] w-[69.55%] top-[8.67%] right-[30.45%] bottom-[87.26%] left-[0%] text-[inherit]">
                <img
                  className="absolute h-[66.67%] w-[13.07%] top-[16.67%] right-[86.93%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group.svg"
                />
                <div className="absolute top-[0px] left-[32px]">DASHBOARD</div>
              </a>
              <a className="[text-decoration:none] absolute top-[124px] left-[0px] w-[163px] h-[30px] text-[inherit]">
                <div className="absolute top-[0px] left-[32px]">
                  DAILY REPORT
                </div>
                <img
                  className="absolute h-[76.67%] w-[12.27%] top-[13.33%] right-[87.73%] bottom-[10%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group1.svg"
                />
              </a>
              <a className="[text-decoration:none] absolute top-[184px] left-[0px] w-[151px] h-[30px] text-[#faff00]">
                <div className="absolute top-[0px] left-[32px]">
                  PROFIT SPLIT
                </div>
                <img
                  className="absolute h-[66.67%] w-[13.25%] top-[16.67%] right-[86.75%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector6.svg"
                />
              </a>
              <a className="[text-decoration:none] absolute top-[304px] left-[0px] w-[167px] h-[30px] text-[inherit]">
                <div className="absolute top-[0px] left-[32px]">
                  NOTIFICATION
                </div>
                <img
                  className="absolute h-[77.67%] w-[11.98%] top-[10%] right-[88.02%] bottom-[12.33%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector1.svg"
                />
              </a>
              <a className="[text-decoration:none] absolute top-[446px] left-[0px] w-[127px] h-[30px] opacity-[0.8] text-[#fff]">
                <div className="absolute top-[0px] left-[32px]">My Profile</div>
                <img
                  className="absolute h-[74.67%] w-[15.75%] top-[13.33%] right-[84.25%] bottom-[12%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group2.svg"
                />
              </a>
              <a className="[text-decoration:none] absolute top-[506px] left-[0px] w-[113px] h-[30px] opacity-[0.8] text-[#fff]">
                <div className="absolute top-[0px] left-[32px]">Settings</div>
                <img
                  className="absolute h-[66.67%] w-[17.7%] top-[16.67%] right-[82.3%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group3.svg"
                />
              </a>
              <a className="[text-decoration:none] absolute top-[648px] left-[0px] w-[182px] h-[30px] opacity-[0.8] text-[#fff]">
                <div className="absolute top-[0px] left-[32px]">{`Help & Support`}</div>
                <img
                  className="absolute h-[66.67%] w-[10.99%] top-[16.67%] right-[89.01%] bottom-[16.67%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group4.svg"
                />
              </a>
              <a className="[text-decoration:none] absolute top-[244px] left-[0px] w-[134px] h-[30px] text-[inherit]">
                <div className="absolute top-[0px] left-[32px]">RESOURCE</div>
                <img
                  className="absolute h-[66.67%] w-[14.93%] top-[13.33%] right-[85.07%] bottom-[20%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-10000074382.svg"
                />
              </a>
              <div className="absolute top-[708px] left-[67px] font-semibold text-[#fff]">
                Sign Out
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[53px] left-[344px] w-[1032px] h-[804px] text-center text-[12px] text-[#fff] font-[Poppins]">
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
          <div className="absolute h-[2.44%] w-[4.65%] top-[1.87%] right-[22.09%] bottom-[95.7%] left-[73.26%]">
            <img
              className="absolute h-full w-[37.5%] top-[0%] right-[0%] bottom-[0%] left-[62.5%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group5.svg"
            />
            <img
              className="absolute h-[94.39%] w-[48.33%] top-[0%] right-[51.67%] bottom-[5.61%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-1000007446.svg"
            />
          </div>
          <div className="absolute top-[10px] left-[61px] text-[20px] text-[#faff00] text-left">
            PROFIT SPLIT
          </div>
          <div className="absolute top-[119px] left-[0px] rounded-[8px] border-[#faff00] border-[0.3px] border-solid box-border w-[1032px] h-[685px]" />
          <img
            className="absolute h-[3.36%] w-[2.62%] top-[1.49%] right-[95.25%] bottom-[95.15%] left-[2.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector7.svg"
          />
          <div className="absolute top-[149px] left-[280px] text-[36px] font-semibold">
            Few Steps for Your Payout
          </div>
          <FlexComponent />
          <div className="absolute top-[648px] left-[433px] text-[24px] font-semibold">
            Latest Payout
          </div>
          <div className="absolute top-[714px] left-[149px] w-[734px] h-[22px] text-[rgba(255,255,255,0.8)]">
            <div className="absolute top-[0px] left-[0px] w-[348px] h-[22px]">
              <div className="absolute top-[2px] left-[116px]">
                11 Mar 2024 | to your account of $120.79
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-[6px] border-[#ff0000] border-[0.4px] border-solid box-border w-[100px] flex flex-row items-center justify-center py-[2px] px-[10px] text-left text-[#ff0000]">
                <div className="relative font-medium">Rejected</div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[378px] w-[356px] h-[22px]">
              <div className="absolute top-[2px] left-[113px]">
                24 Sep 2024 | to your account of $669.79
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-[6px] border-[#14ff00] border-[0.4px] border-solid box-border w-[100px] flex flex-row items-center justify-center py-[2px] px-[10px] text-left text-[#14ff00]">
                <div className="relative font-medium">Confirmed</div>
              </div>
            </div>
          </div>
          <div className="absolute top-[752px] left-[149px] w-[734px] h-[22px] text-[rgba(255,255,255,0.8)]">
            <div className="absolute top-[0px] left-[0px] w-[348px] h-[22px]">
              <div className="absolute top-[2px] left-[116px]">
                11 Mar 2024 | to your account of $120.79
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-[6px] border-[#ff0000] border-[0.4px] border-solid box-border w-[100px] flex flex-row items-center justify-center py-[2px] px-[10px] text-left text-[#ff0000]">
                <div className="relative font-medium">Rejected</div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[378px] w-[356px] h-[22px]">
              <div className="absolute top-[2px] left-[113px]">
                24 Sep 2024 | to your account of $669.79
              </div>
              <div className="absolute top-[0px] left-[0px] rounded-[6px] border-[#14ff00] border-[0.4px] border-solid box-border w-[100px] flex flex-row items-center justify-center py-[2px] px-[10px] text-left text-[#14ff00]">
                <div className="relative font-medium">Confirmed</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfitSplitPage;
