import { FunctionComponent } from "react";

export type RectangleType = {
  className?: string;
};

const Rectangle: FunctionComponent<RectangleType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[327px] rounded-[6px] border-[#faff00] border-[0.3px] border-solid box-border h-[203px] ${className}`}
    />
  );
};

export default Rectangle;
