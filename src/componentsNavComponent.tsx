import { FunctionComponent, useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

export type NavComponentType = {
  className?: string;
};

const NavComponent: FunctionComponent<NavComponentType> = ({
  className = "",
}) => {
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
    <div
      className={`absolute top-[54.7px] left-[352.1px] w-[1056.4px] h-[51.6px] text-left text-[20px] text-[#faff00] font-[Poppins] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-[30px] bg-[#3b3b3b] w-[1056.4px] h-[51.6px]" />
      <div className="absolute top-[0px] left-[773.9px] w-[282.5px] h-[51.6px]">
        <div className="absolute top-[0px] left-[73.7px] w-[208.8px] h-[51.6px]">
          <img
            className="absolute top-[0px] left-[157.6px] rounded-[50%] w-[51.2px] h-[51.6px] object-cover"
            alt=""
            src="/ellipse-3471@2x.png"
          />
          <div className="absolute top-[13.4px] left-[0px]">
            <Button
              id="button-Angel Priyanka"
              aria-controls="menu-Angel Priyanka"
              aria-haspopup="true"
              aria-expanded={groupDropdownOpen ? "true" : undefined}
              onClick={handleGroupDropdownClick}
              color="primary"
              sx={{ width: "145.4", height: "24.8" }}
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
        <div className="absolute h-[39.34%] w-[17.38%] top-[30.04%] right-[82.62%] bottom-[30.62%] left-[0%]">
          <img
            className="absolute h-full w-[37.47%] top-[0%] right-[0%] bottom-[0%] left-[62.53%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group13.svg"
          />
          <img
            className="absolute h-[94.09%] w-[48.27%] top-[0%] right-[51.73%] bottom-[5.91%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-1000007475.svg"
          />
        </div>
      </div>
      <div className="absolute top-[10.3px] left-[22.5px] w-[186.3px] h-[31px]">
        <div className="absolute top-[0px] left-[40px] inline-block w-[146.4px] h-[31px]">
          DAILY REPORTS
        </div>
        <img
          className="absolute h-[87.1%] w-[12.51%] top-[6.45%] right-[87.49%] bottom-[6.45%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group14.svg"
        />
      </div>
    </div>
  );
};

export default NavComponent;
