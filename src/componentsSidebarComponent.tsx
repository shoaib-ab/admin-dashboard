import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type SidebarComponentType = {
  className?: string;
};

const SidebarComponent: FunctionComponent<SidebarComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[286.6px] h-[929px] text-left text-[20px] text-[rgba(255,255,255,0.8)] font-[Poppins] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] bg-[#171717] border-[#faff00] border-r-[0.2px] border-solid box-border w-[286.6px] h-[929px]" />
      <div className="absolute top-[49.5px] left-[18.4px] w-[249.8px] h-[36.1px] text-justify text-[16px] text-[#faff00] font-[Inter]">
        <img
          className="absolute top-[2.6px] left-[2.9px] w-[30.6px] h-[30.8px]"
          alt=""
          src="/group-10000073251.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-[249.8px] h-[36.1px]">
          <b className="absolute top-[9.3px] left-[42px] inline-block w-[207.8px] h-[19.6px]">
            <span>{`FREEDOM `}</span>
            <span className="text-[#fff]">ELITE</span>
            <span> FUNDING</span>
          </b>
          <img
            className="absolute top-[0px] left-[0px] w-[35.8px] h-[36.1px] object-cover"
            alt=""
            src="/21@2x.png"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[136.3px] left-[30.7px] w-[225.2px] h-[41.3px]">
        <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[225.2px] h-[41.3px]" />
        <div className="absolute top-[7.2px] left-[90.1px] text-[16px] font-medium font-[Poppins] text-[rgba(255,255,255,0.9)] text-center inline-block w-[46.1px] h-[24.8px]">
          Menu
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[530.6px] left-[30.7px] w-[225.2px] h-[41.3px]">
        <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[225.2px] h-[41.3px]" />
        <div className="absolute top-[7.2px] left-[68.6px] text-[16px] font-medium font-[Poppins] text-[rgba(255,255,255,0.9)] text-center inline-block w-[89.1px] h-[24.8px]">
          Preference
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-[0px] bg-[transparent] absolute top-[739.1px] left-[30.7px] w-[225.2px] h-[41.3px]">
        <div className="absolute top-[0px] left-[0px] rounded-[6px] bg-[#3b3b3b] border-[#faff00] border-[0.5px] border-solid box-border w-[225.2px] h-[41.3px]" />
        <div className="absolute top-[7.2px] left-[79.9px] text-[16px] font-medium font-[Poppins] text-[rgba(255,255,255,0.9)] text-center inline-block w-[66.5px] h-[24.8px]">
          Support
        </div>
      </button>
      <a className="[text-decoration:none] absolute h-[3.34%] w-[54.64%] top-[21.78%] right-[34.65%] bottom-[74.89%] left-[10.71%] text-[inherit]">
        <img
          className="absolute h-[66.77%] w-[13.09%] top-[16.77%] right-[86.91%] bottom-[16.45%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group8.svg"
        />
        <div className="absolute top-[0px] left-[32.8px] inline-block w-[123.9px] h-[31px]">
          DASHBOARD
        </div>
      </a>
      <a className="[text-decoration:none] absolute top-[264.3px] left-[30.7px] w-[166.8px] h-[31px] text-[#faff00]">
        <div className="absolute top-[0px] left-[32.8px] inline-block w-[134.1px] h-[31px]">
          DAILY REPORT
        </div>
        <img
          className="absolute h-[76.45%] w-[12.29%] top-[13.23%] right-[87.71%] bottom-[10.32%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group9.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[326.2px] left-[30.7px] w-[154.6px] h-[31px] text-[inherit]">
        <div className="absolute top-[0px] left-[32.8px] inline-block w-[121.8px] h-[31px]">
          PROFIT SPLIT
        </div>
        <img
          className="absolute h-[66.45%] w-[13.26%] top-[16.45%] right-[86.74%] bottom-[17.1%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector10.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[450.1px] left-[30.7px] w-[170.9px] h-[31px] text-[inherit]">
        <div className="absolute top-[0px] left-[32.8px] inline-block w-[138.2px] h-[31px]">
          NOTIFICATION
        </div>
        <img
          className="absolute h-[77.74%] w-[12%] top-[9.68%] right-[88%] bottom-[12.58%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector11.svg"
        />
      </a>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[596.6px] left-[30.7px] w-[130px] h-[31px] opacity-[0.8] text-[#fff]"
        to="/dashboard-login-page"
      >
        <div className="absolute top-[0px] left-[32.8px] inline-block w-[97.2px] h-[31px]">
          My Profile
        </div>
        <img
          className="absolute h-[74.52%] w-[15.77%] top-[13.55%] right-[84.23%] bottom-[11.94%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group10.svg"
        />
      </Link>
      <a className="[text-decoration:none] absolute top-[658.6px] left-[30.7px] w-[115.7px] h-[31px] opacity-[0.8] text-[#fff]">
        <div className="absolute top-[0px] left-[32.8px] inline-block w-[82.9px] h-[31px]">
          Settings
        </div>
        <img
          className="absolute h-[66.45%] w-[17.72%] top-[16.45%] right-[82.28%] bottom-[17.1%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group11.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[805.1px] left-[30.7px] w-[186.3px] h-[31px] opacity-[0.8] text-[#fff]">
        <div className="absolute top-[0px] left-[32.8px] inline-block w-[153.5px] h-[31px]">{`Help & Support`}</div>
        <img
          className="absolute h-[66.45%] w-[11%] top-[16.77%] right-[89%] bottom-[16.77%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group12.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[388.1px] left-[30.7px] w-[137.2px] h-[31px] text-[inherit]">
        <div className="absolute top-[0px] left-[32.8px] inline-block w-[104.4px] h-[31px]">
          RESOURCE
        </div>
        <img
          className="absolute h-[66.77%] w-[14.94%] top-[13.23%] right-[85.06%] bottom-[20%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-10000074383.svg"
        />
      </a>
      <div className="absolute top-[867.1px] left-[99.3px] font-semibold text-[#fff] inline-block w-[88px] h-[31px]">
        Sign Out
      </div>
    </div>
  );
};

export default SidebarComponent;
