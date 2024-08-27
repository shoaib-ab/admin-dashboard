import { FunctionComponent } from "react";

export type EllipseType = {
  className?: string;
};

const Ellipse: FunctionComponent<EllipseType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[4px] rounded-[50%] bg-[#d9d9d9] h-[4px] ${className}`}
    />
  );
};

export default Ellipse;
