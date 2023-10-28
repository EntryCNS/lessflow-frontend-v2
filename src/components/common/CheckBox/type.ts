import { Dispatch, SetStateAction } from "react";

export interface ICheckBoxProps {
  context: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

export interface ICheckBoxStyle {
  active: boolean;
}
