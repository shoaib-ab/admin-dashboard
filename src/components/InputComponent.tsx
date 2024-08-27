import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputComponentType = {
  className?: string;
  payoutMethod?: string;
  crypto1?: string;
  rectangle22323?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const InputComponent: FunctionComponent<InputComponentType> = ({
  className = "",
  propTop,
  payoutMethod,
  crypto1,
  rectangle22323,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[270px] left-[157px] w-[713px] h-[76px] text-left text-[20px] text-[#fff] font-[Poppins] ${className}`}
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[16px] opacity-[0.6]">
        {payoutMethod}
      </div>
      <div className="absolute top-[27px] left-[16px] text-[26px]">
        {crypto1}
      </div>
      <img
        className="absolute top-[16px] left-[0px] rounded-[6px] w-[713px] h-[60px]"
        alt=""
        src={rectangle22323}
      />
      <img
        className="absolute top-[41px] left-[668.5px] w-[22px] h-[11px]"
        alt=""
        src="/vector-48.svg"
      />
    </div>
  );
};

export default InputComponent;
