/**
 * Input component with a button to send
 */

import { BaseComponentProps } from "../../types";
import { RegulerButton } from "../buttons/reguler";
import WrappedInput from "../wrappers/input";

export const SkincodeInput = ({ onClick, style }: BaseComponentProps) => {
  return (
    <div className="flex flex-row gap-3 items-center" style={style}>
      <WrappedInput placeholder="אנא הכנס את הקוד שקיבלת..."></WrappedInput>
      <RegulerButton onClick={onClick}></RegulerButton>
    </div>
  );
};
