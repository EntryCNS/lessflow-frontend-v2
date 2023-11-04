import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface IInputStyle extends InputHTMLAttributes<HTMLInputElement> {
  padding?: string | null;
  fontSize?: number | null;
  borderRadius?: number | null;
  border?: boolean | null;
  width?: number;
}

export interface IInputProps extends IInputStyle {
  placeholder: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export interface IPlaceholderProps {
  margin?: string | null;
  active: boolean;
  fontSize?: number | null;
}
