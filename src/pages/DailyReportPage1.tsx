import { FunctionComponent } from "react";
import SidebarComponent from "../SidebarComponent";
import NavComponent from "../NavComponent";

const DailyReportPage1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-[#171717] h-[1229px] overflow-hidden">
      <div className="absolute top-[-259px] left-[calc(50%_-_175px)] [filter:blur(700px)] rounded-[50%] bg-[#ffe600] w-[350px] h-[349px]" />
      <main className="absolute top-[0px] left-[0px] w-[1414.7px] h-[1217px] text-left text-[20px] text-[rgba(255,255,255,0.8)] font-[Poppins]">
        <SidebarComponent />
        <NavComponent />
        <div className="absolute top-[137.3px] left-[389px] font-semibold inline-block w-[252.8px] h-[31px]">
          <span>Welcome Back</span>
          <span className="text-[#fff]"> Priyanka</span>
        </div>
        <nav className="m-[0px] absolute top-[137.3px] left-[1033.9px] w-[374.6px] h-[28px]">
          <button className="cursor-pointer border-[#faff00] border-[0.4px] border-solid py-[2px] px-[10px] bg-[transparent] absolute top-[0px] left-[0px] rounded-[6px] box-border w-[102.4px] flex flex-row items-center justify-center gap-[10px]">
            <img
              className="w-[14px] relative h-[14.9px]"
              alt=""
              src="/vector12.svg"
            />
            <div className="relative text-[16px] font-medium font-[Poppins] text-[#faff00] text-left">
              Refresh
            </div>
          </button>
          <button className="cursor-pointer border-[#ff00e5] border-[0.4px] border-solid py-[2px] px-[10px] bg-[transparent] absolute top-[0px] left-[110.5px] rounded-[6px] box-border w-[153.5px] flex flex-row items-center justify-center gap-[10px]">
            <img
              className="w-[14px] relative h-[14.2px]"
              alt=""
              src="/group-1000007469.svg"
            />
            <div className="relative text-[16px] font-medium font-[Poppins] text-[#ff00e6] text-left">
              See Credential
            </div>
          </button>
          <button className="cursor-pointer border-[#70ff00] border-[0.4px] border-solid py-[2px] px-[10px] bg-[transparent] absolute top-[0px] left-[272.2px] rounded-[6px] box-border w-[102.4px] flex flex-row items-center justify-center gap-[10px]">
            <img
              className="w-[14px] relative h-[14px]"
              alt=""
              src="/group-1000007470.svg"
            />
            <div className="relative text-[16px] font-medium font-[Poppins] text-[#70ff00] text-left">
              Funded
            </div>
          </button>
        </nav>
        <div className="absolute top-[228.1px] left-[389px] w-[1025.7px] h-[28px] text-[16px] text-[#fff]">
          <div className="absolute top-[0px] left-[0px] w-[350.9px] h-[28px]">
            <div className="absolute top-[0px] left-[0px] rounded-[6px] border-[#faff00] border-[0.4px] border-solid flex flex-row items-center justify-center py-[2px] px-[10px] gap-[10px]">
              <img
                className="w-[14px] relative h-[14px]"
                alt=""
                src="/group-1000007471.svg"
              />
              <div className="relative font-medium">Active Days: 0</div>
            </div>
            <div className="absolute top-[0px] left-[168.9px] rounded-[6px] border-[#faff00] border-[0.4px] border-solid flex flex-row items-center justify-center py-[2px] px-[10px] gap-[10px]">
              <img
                className="w-[14px] relative h-[14px]"
                alt=""
                src="/vector13.svg"
              />
              <div className="relative font-medium">Inactive Days: 45</div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[766.7px] rounded-[6px] border-[#faff00] border-[0.4px] border-solid flex flex-row items-center justify-center py-[2px] px-[10px] gap-[10px]">
            <img
              className="w-[14px] relative h-[14px]"
              alt=""
              src="/group-1000007472.svg"
            />
            <div className="relative font-medium">Last updated 6 month ago</div>
          </div>
        </div>
        <div className="absolute top-[273.5px] left-[389px] w-[1014.4px] h-[943.5px] text-right text-[14px]">
          <div className="absolute top-[0px] left-[0px] rounded-[8px] border-[#faff00] border-[0.3px] border-solid box-border w-[1014.4px] h-[866px]" />
          <div className="absolute top-[36.2px] left-[35.8px] rounded-[8px] bg-[#171717] border-[#faff00] border-[0.3px] border-solid box-border w-[266.1px] h-[253.9px] flex flex-col items-center justify-center py-[20px] px-[15px] text-left text-[32px] text-[#1aff06]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
              <div className="w-[100px] relative h-[100px]">
                <div className="absolute top-[26px] left-[28px] opacity-[0.7]">
                  0%
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] border-[#1aff06] border-[5px] border-solid box-border w-[100px] h-[100px] opacity-[0.7]" />
              </div>
              <div className="w-[240px] relative h-[56px] text-center text-[16px] text-[#fff]">
                <div className="absolute top-[0px] left-[calc(50%_-_120px)] font-medium">
                  Minimum Withdraw = $100.00
                </div>
                <div className="absolute top-[32px] left-[calc(50%_-_86px)] font-medium text-[#1aff06]">
                  Current Profit = $0.00
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[36.2px] left-[374.6px] rounded-[8px] bg-[#171717] border-[#faff00] border-[0.3px] border-solid box-border w-[266.1px] h-[253.9px] flex flex-col items-center justify-center py-[20px] px-[15px] text-left text-[32px] text-[#ff0606]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
              <div className="w-[100px] relative h-[100px]">
                <div className="absolute top-[26px] left-[28px] opacity-[0.7]">
                  0%
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] border-[#ff0606] border-[5px] border-solid box-border w-[100px] h-[100px] opacity-[0.7]" />
              </div>
              <div className="w-[220px] relative h-[56px] text-center text-[16px] text-[#fff]">
                <div className="absolute top-[0px] left-[calc(50%_-_110px)] font-medium">
                  Daily Loss Limit = $9,024.09
                </div>
                <div className="absolute top-[32px] left-[calc(50%_-_72px)] font-medium text-[#ff0606]">
                  Total Loss = $0.00
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[36.2px] left-[712.4px] rounded-[8px] bg-[#171717] border-[#faff00] border-[0.3px] border-solid box-border w-[266.1px] flex flex-col items-center justify-center py-[20px] px-[15px] text-left text-[32px] text-[#ff0606]">
            <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
              <div className="w-[100px] relative h-[99.8px]">
                <div className="absolute top-[calc(50%_-_23.9px)] left-[calc(50%_-_32px)]">
                  98%
                </div>
                <img
                  className="absolute top-[0px] left-[0px] w-[100px] h-[99.8px] object-cover"
                  alt=""
                  src="/ellipse-352@2x.png"
                />
              </div>
              <div className="w-[229px] relative h-[76px] text-center text-[16px] text-[#fff]">
                <div className="absolute top-[0px] left-[calc(50%_-_102px)] font-medium inline-block w-[204px]">
                  Maximum Drawdown = $20,000.00
                </div>
                <div className="absolute top-[52px] left-[calc(50%_-_114.5px)] font-medium text-[#ff0606]">
                  Accoureted Loss = $19,518.14
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[384px] left-[calc(50%_-_471.4px)] font-medium text-[#fff] text-left inline-block w-[89.1px] h-[21.7px]">
            $208.000.00
          </div>
          <div className="absolute top-[436.7px] left-[calc(50%_-_471.4px)] font-medium text-[#fff] text-left inline-block w-[89.1px] h-[21.7px]">
            $200.000.00
          </div>
          <div className="absolute top-[489.3px] left-[calc(50%_-_471.4px)] font-medium text-[#fff] text-left inline-block w-[85px] h-[21.7px]">
            $192.000.00
          </div>
          <div className="absolute top-[542px] left-[calc(50%_-_471.4px)] font-medium text-[#fff] text-left inline-block w-[86px] h-[21.7px]">
            $184.000.00
          </div>
          <div className="absolute top-[594.6px] left-[calc(50%_-_471.4px)] font-medium text-[#fff] text-left inline-block w-[85px] h-[21.7px]">
            $176.000.00
          </div>
          <div className="absolute top-[647.2px] left-[calc(50%_-_471.4px)] font-medium text-[#fff] text-left inline-block w-[86px] h-[21.7px]">
            $168.000.00
          </div>
          <div className="absolute top-[738.1px] left-[calc(50%_-_429.4px)] font-medium inline-block w-[84.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            01 Jan 2024
          </div>
          <div className="absolute top-[738.1px] left-[calc(50%_-_404.8px)] font-medium inline-block w-[84.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            10 Jan 2024
          </div>
          <div className="absolute top-[740.7px] left-[calc(50%_-_381.8px)] font-medium inline-block w-[87.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            20 Jan 2024
          </div>
          <div className="absolute top-[740.7px] left-[calc(50%_-_357.2px)] font-medium inline-block w-[87.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            28 Jan 2024
          </div>
          <div className="absolute top-[740.7px] left-[calc(50%_-_332.7px)] font-medium inline-block w-[87.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            05 Feb 2024
          </div>
          <div className="absolute top-[736.3px] left-[calc(50%_-_305.5px)] font-medium inline-block w-[82.4px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            12 Feb 2024
          </div>
          <div className="absolute top-[737.2px] left-[calc(50%_-_281.5px)] font-medium inline-block w-[83.4px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            15 Feb 2024
          </div>
          <div className="absolute top-[741.6px] left-[calc(50%_-_259.5px)] font-medium inline-block w-[88.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            07 Mar 2024
          </div>
          <div className="absolute top-[739px] left-[calc(50%_-_233.4px)] font-medium inline-block w-[85.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            10 Mar 2024
          </div>
          <div className="absolute top-[738.1px] left-[calc(50%_-_208.3px)] font-medium inline-block w-[84.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            17 Mar 2024
          </div>
          <div className="absolute top-[736.3px] left-[calc(50%_-_182.7px)] font-medium inline-block w-[82.4px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            16 Apr 2024
          </div>
          <div className="absolute top-[739px] left-[calc(50%_-_159.7px)] font-medium inline-block w-[85.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            22 Apr 2024
          </div>
          <div className="absolute top-[736.3px] left-[calc(50%_-_133.6px)] font-medium inline-block w-[82.4px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            31 Apr 2024
          </div>
          <div className="absolute top-[744.3px] left-[calc(50%_-_113.6px)] font-medium inline-block w-[91.7px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            03 May 2024
          </div>
          <div className="absolute top-[741.6px] left-[calc(50%_-_87.5px)] font-medium inline-block w-[88.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            18 May 2024
          </div>
          <div className="absolute top-[740.7px] left-[calc(50%_-_62.4px)] font-medium inline-block w-[87.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            21 May 2024
          </div>
          <div className="absolute top-[740.7px] left-[calc(50%_-_37.9px)] font-medium inline-block w-[87.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            02 Jun 2024
          </div>
          <div className="absolute top-[740.7px] left-[calc(50%_-_13.3px)] font-medium inline-block w-[87.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            24 Jun 2024
          </div>
          <div className="absolute top-[740.7px] left-[calc(50%_+_11.3px)] font-medium inline-block w-[87.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            28 Jun 2024
          </div>
          <div className="absolute top-[735.4px] left-[calc(50%_+_38.9px)] font-medium inline-block w-[81.4px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            07 Jul 2024
          </div>
          <div className="absolute top-[737.2px] left-[calc(50%_+_62.4px)] font-medium inline-block w-[83.4px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            09 Jul 2024
          </div>
          <div className="absolute top-[732.7px] left-[calc(50%_+_89.6px)] font-medium inline-block w-[78.3px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            13 Jul 2024
          </div>
          <div className="absolute top-[739.8px] left-[calc(50%_+_110px)] font-medium inline-block w-[86.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            15 Aug 2024
          </div>
          <div className="absolute top-[742.5px] left-[calc(50%_+_133.1px)] font-medium inline-block w-[89.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            20 Aug 2024
          </div>
          <div className="absolute top-[742.5px] left-[calc(50%_+_157.6px)] font-medium inline-block w-[89.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            20 Aug 2024
          </div>
          <div className="absolute top-[738.1px] left-[calc(50%_+_184.8px)] font-medium inline-block w-[84.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            01 Sep 2024
          </div>
          <div className="absolute top-[738.1px] left-[calc(50%_+_209.3px)] font-medium inline-block w-[84.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            16 Sep 2024
          </div>
          <div className="absolute top-[741.6px] left-[calc(50%_+_231.9px)] font-medium inline-block w-[88.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            29 Sep 2024
          </div>
          <div className="absolute top-[736.3px] left-[calc(50%_+_259.5px)] font-medium inline-block w-[82.4px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            21 Oct 2024
          </div>
          <div className="absolute top-[739.8px] left-[calc(50%_+_282px)] font-medium inline-block w-[86.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            28 Oct 2024
          </div>
          <div className="absolute top-[741.6px] left-[calc(50%_+_305.6px)] font-medium inline-block w-[88.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            30 Nov 2024
          </div>
          <div className="absolute top-[742.5px] left-[calc(50%_+_329.6px)] font-medium inline-block w-[89.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            09 Nov 2024
          </div>
          <div className="absolute top-[741.6px] left-[calc(50%_+_354.7px)] font-medium inline-block w-[88.6px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            25 Dec 2024
          </div>
          <div className="absolute top-[738.1px] left-[calc(50%_+_381.3px)] font-medium inline-block w-[84.5px] h-[21.5px] [transform:_rotate(-60.2deg)] [transform-origin:0_0]">
            31 Dec 2024
          </div>
          <div className="absolute top-[326.2px] left-[35.8px] border-[#faff00] border-t-[0.3px] border-solid box-border w-[943.1px] h-[0.3px]" />
          <img
            className="absolute top-[448px] left-[137.1px] max-h-full w-[838.3px]"
            alt=""
            src="/vector-51.svg"
          />
          <img
            className="absolute top-[439.8px] left-[137.1px] w-[832.7px] h-[133.2px]"
            alt=""
            src="/vector-52.svg"
          />
          <img
            className="absolute top-[504.3px] left-[137.1px] w-[830.7px] h-[127.5px]"
            alt=""
            src="/vector-53.svg"
          />
          <div className="absolute top-[444.9px] left-[135.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[135.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[505.8px] left-[143.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[151.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[503.8px] left-[159.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[502.7px] left-[167.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[501.7px] left-[179.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[184.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[191.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[197.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[513.1px] left-[201.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[513.1px] left-[209.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[513.1px] left-[217px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[511px] left-[222.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[511px] left-[228.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[233.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[241.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[249.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[257.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[265.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[271.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[279.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[287.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[295.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[300.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[511px] left-[304px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[310.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[318.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[326.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[508.9px] left-[331.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[336.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[504.8px] left-[341.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[513.1px] left-[342.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[521.3px] left-[344.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[529.6px] left-[347px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[537.8px] left-[349px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[544px] left-[350.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[544px] left-[360.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[536.8px] left-[364.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[539.9px] left-[371.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[539.9px] left-[378.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[548.2px] left-[378.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[556.4px] left-[379.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[566.7px] left-[380.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[566.7px] left-[388.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[566.7px] left-[396.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[575px] left-[397.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[583.3px] left-[398.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[590.5px] left-[400.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[590.5px] left-[406.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[597.7px] left-[407.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[604.9px] left-[409.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[604.9px] left-[417.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[604.9px] left-[425.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[603.9px] left-[434px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[603.9px] left-[442.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[602.9px] left-[450.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[602.9px] left-[458.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[602.9px] left-[466.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[599.8px] left-[471.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[608px] left-[472.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[810.3px] left-[calc(50%_-_227.8px)] w-[456.5px] h-[31px] text-left text-[20px] text-[#fff]">
            <div className="absolute top-[0px] left-[calc(50%_-_228.25px)] w-[107.5px] h-[31px]">
              <div className="absolute top-[0px] left-[calc(50%_-_31.25px)] font-medium inline-block w-[85px] h-[31px]">
                Balance
              </div>
              <div className="absolute top-[8.3px] left-[0px] rounded-[50%] bg-[#01d9fd] w-[14.3px] h-[14.5px]" />
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_104.35px)] w-[86px] h-[31px]">
              <div className="absolute top-[0px] left-[calc(50%_-_20.5px)] font-medium inline-block w-[63.5px] h-[31px]">
                Equity
              </div>
              <div className="absolute top-[8.3px] left-[0px] rounded-[50%] bg-[#01d9fd] w-[14.3px] h-[14.5px]" />
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_2.05px)] w-[123.9px] h-[31px]">
              <div className="absolute top-[0px] left-[calc(50%_-_39.35px)] font-medium inline-block w-[101.3px] h-[31px]">
                Daily Loss
              </div>
              <div className="absolute top-[8.3px] left-[0px] rounded-[50%] bg-[#ff0000] w-[14.3px] h-[14.5px]" />
            </div>
            <div className="absolute top-[0px] left-[calc(50%_+_138.25px)] w-[90.1px] h-[31px]">
              <div className="absolute top-[0px] left-[calc(50%_-_22.55px)] font-medium inline-block w-[67.6px] h-[31px]">
                Target
              </div>
              <div className="absolute top-[8.3px] left-[0px] rounded-[50%] bg-[#1aff06] w-[14.3px] h-[14.5px]" />
            </div>
          </div>
          <div className="absolute top-[616.3px] left-[474.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[627.6px] left-[477px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[485.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[495.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[505.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[515.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[526.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[536.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[546.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[556.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[567.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[577.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[587.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[597.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[608px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[618.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[628.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[638.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[648.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[659.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[669.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[679.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[689.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[700.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[710.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[720.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[730.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[741.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[751.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[761.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[771.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[782px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[792.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[802.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[812.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[823px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[833.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[843.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[853.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[863.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[874.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[884.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[894.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[904.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[915.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[925.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[935.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[945.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[956px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[628.7px] left-[966.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[441.8px] left-[141.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[440.8px] left-[154.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[438.7px] left-[165.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[436.7px] left-[178.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[438.7px] left-[195.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[451.1px] left-[205.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[450.1px] left-[213.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[447px] left-[228.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[439.8px] left-[270.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[438.7px] left-[288.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[439.8px] left-[300.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[438.7px] left-[310.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[438.7px] left-[319.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[438.7px] left-[325.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[438.7px] left-[335.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[438.7px] left-[340.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[455.3px] left-[343.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[462.5px] left-[346px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[469.7px] left-[348px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[481.1px] left-[351.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[481.1px] left-[359.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[474.9px] left-[364.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[478px] left-[369.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[478px] left-[377.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[485.2px] left-[379.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[492.4px] left-[380.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[499.6px] left-[381.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[381.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[387.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[506.9px] left-[394.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[514.1px] left-[395.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[522.3px] left-[397.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[530.6px] left-[399.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[530.6px] left-[404.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[538.9px] left-[406.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[546.1px] left-[408.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[546.1px] left-[417.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[546.1px] left-[426.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[546.1px] left-[436px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[546.1px] left-[445.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[546.1px] left-[454.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[546.1px] left-[464.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[540.9px] left-[470.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[549.2px] left-[472.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[558.5px] left-[473.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[568.8px] left-[476px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[486.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[496.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[506.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[516.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[527.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[537.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[547.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[557.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[568.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[578.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[588.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[598.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[609px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[619.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[629.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[639.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[650px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[660.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[670.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[680.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[690.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[701.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[711.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[721.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[731.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[742.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[752.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[762.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[772.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[783px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[793.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[803.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[813.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[824px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[834.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[844.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[854.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[864.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[875.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[885.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[895.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[905.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[916.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[926.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[936.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[946.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[957.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[569.8px] left-[967.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[438.7px] left-[277.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[147.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[159.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[171.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[184.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[196.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[208.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[221.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[233.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[245.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[257.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[270.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[282.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[294.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[307.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[319.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[331.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[343.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[356.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[368.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[380.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[393px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[405.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[417.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[429.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[442.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[454.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[466.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[479px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[491.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[503.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[515.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[528.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[540.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[552.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[565px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[577.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[589.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[601.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[614.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[626.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[638.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[651px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[663.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[675.6px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[687.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[700.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[712.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[724.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[737px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[749.3px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[761.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[773.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[786.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[798.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[810.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[823px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[835.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[847.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[859.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[872.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[884.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[896.7px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[908.9px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[921.2px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[933.5px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[945.8px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[958.1px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <div className="absolute top-[444.9px] left-[970.4px] rounded-[50%] bg-[#fff] w-[6.1px] h-[6.2px]" />
          <button className="cursor-pointer border-[#70ff00] border-[0.4px] border-solid py-[0px] px-[10px] bg-[#70ff00] absolute top-[435.6px] left-[874.1px] rounded-[6px] box-border w-[102.4px] flex flex-row items-center justify-center">
            <div className="relative text-[16px] font-medium font-[Poppins] text-[#000] text-left">
              Target
            </div>
          </button>
          <div className="absolute top-[886.7px] left-[calc(50%_-_507.2px)] w-[553.8px] h-[56.8px] text-left text-[22px] text-[rgba(255,255,255,0.9)]">
            <div className="absolute top-[0px] left-[calc(50%_-_249.3px)] font-medium inline-block w-[120.8px] h-[34.1px]">
              Disclaimer
            </div>
            <img
              className="absolute h-[34.51%] w-[3.5%] top-[12.85%] right-[96.5%] bottom-[52.64%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
              alt=""
              src="/vector14.svg"
            />
            <div className="absolute top-[38.2px] left-[calc(50%_-_276.9px)] text-[12px] text-[rgba(255,255,255,0.5)] inline-block w-[553.8px] h-[18.6px]">
              The Data is updated periodically and can be reviewed in real time
              on the trading platform.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DailyReportPage1;
