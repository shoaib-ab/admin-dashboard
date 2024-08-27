import { FunctionComponent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import InputComponent from "../components/InputComponent";

const RequestAPayoutPage: FunctionComponent = () => {
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
    <div className="w-full relative bg-[#171717] h-[1232px] overflow-hidden">
      <div className="absolute top-[-259px] left-[calc(50%_-_175px)] [filter:blur(700px)] rounded-[50%] bg-[#ffe600] w-[350px] h-[349px]" />
      <main className="absolute top-[0px] left-[0px] w-[1376px] h-[1192px] text-justify text-[16px] text-[#faff00] font-[Inter]">
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
              <div className="absolute top-[382px] left-[0px] w-[220px] h-[40px] text-center text-[16px] text-[rgba(255,255,255,0.9)]">
                <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[220px] h-[40px]" />
                <div className="absolute top-[7px] left-[67px] font-medium">
                  Preference
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[584px] left-[0px] w-[220px] h-[40px]">
                <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[220px] h-[40px]" />
                <div className="absolute top-[7px] left-[78px] text-[16px] font-medium font-[Poppins] text-[rgba(255,255,255,0.9)] text-center">
                  Support
                </div>
              </button>
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
              <Link
                className="cursor-pointer [text-decoration:none] absolute top-[244px] left-[0px] w-[134px] h-[30px] text-[inherit]"
                to="/resources-page"
              >
                <div className="absolute top-[0px] left-[32px]">RESOURCE</div>
                <img
                  className="absolute h-[66.67%] w-[14.93%] top-[13.33%] right-[85.07%] bottom-[20%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group-10000074382.svg"
                />
              </Link>
              <div className="absolute top-[708px] left-[67px] font-semibold text-[#fff]">
                Sign Out
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[172px] left-[344px] w-[1032px] h-[1020px] text-left text-[20px] text-[#fff] font-[Poppins]">
          <div className="absolute top-[24px] left-[354px] text-[36px] font-semibold text-center">
            Request a Payout
          </div>
          <div className="absolute top-[84px] left-[157px] text-center inline-block w-[713px]">
            You can payout up to $0.00 The minimum payout is for $100.00.
          </div>
          <div className="absolute top-[170px] left-[173px] opacity-[0.6]">
            Amount to payout*
          </div>
          <div className="absolute top-[200px] left-[173px] text-[26px]">0</div>
          <div className="absolute top-[0px] left-[0px] rounded-[8px] border-[#faff00] border-[0.3px] border-solid box-border w-[1032px] h-[1020px]" />
          <img
            className="absolute top-[186px] left-[157px] rounded-[6px] w-[713px] h-[60px]"
            alt=""
            src="/rectangle-22322.svg"
          />
          <div className="absolute top-[470px] left-[157px] w-[713px] h-[288px]">
            <div className="absolute top-[0px] left-[16px] opacity-[0.6]">
              Movement Details
            </div>
            <div className="absolute top-[43px] left-[16px] text-[26px]">
              Wallet Address:
            </div>
            <img
              className="absolute top-[15px] left-[0px] rounded-[6px] w-[713px] h-[273px]"
              alt=""
              src="/rectangle-22325.svg"
            />
          </div>
          <InputComponent
            payoutMethod="Payout Method"
            crypto1="Crypto"
            rectangle22323="/rectangle-22323.svg"
          />
          <InputComponent
            propTop="370px"
            payoutMethod="Crypto/Network"
            crypto1="USDT-ERC20"
            rectangle22323="/rectangle-22324.svg"
          />
          <div className="absolute top-[788px] left-[157px] w-[713px] h-[50px]">
            <div className="absolute top-[10px] left-[16px] opacity-[0.6]">
              Confirm Password*
            </div>
            <div className="absolute top-[0px] left-[0px] rounded-[6px] border-[#faff00] border-[0.3px] border-solid box-border w-[713px] h-[50px]" />
          </div>
          <button className="cursor-pointer [border:none] py-[15px] px-[10px] bg-[#faff00] absolute top-[918px] left-[157px] rounded-[6px] w-[713px] flex flex-row items-center justify-center box-border">
            <div className="relative text-[28px] font-medium font-[Poppins] text-[#000] text-left">
              Request Payout
            </div>
          </button>
        </div>
        <nav className="m-[0px] absolute top-[53px] left-[344px] w-[1032px] h-[50px] text-left text-[20px] text-[#faff00] font-[Poppins]">
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
          <div className="absolute h-[39.2%] w-[4.65%] top-[30%] right-[22.09%] bottom-[30.8%] left-[73.26%]">
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
          <div className="absolute top-[10px] left-[22px] w-[158px] h-[30px]">
            <div className="absolute top-[0px] left-[39px]">PROFIT SPLIT</div>
            <img
              className="absolute h-[90%] w-[17.09%] top-[6.67%] right-[82.91%] bottom-[3.33%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector7.svg"
            />
          </div>
        </nav>
      </main>
    </div>
  );
};

export default RequestAPayoutPage;
