import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface IInputStyle extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string | null;
  borderRadius?: string | null;
  border?: boolean | null;
  width?: number;
}

export interface IInputProps extends IInputStyle {
  placeholder: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export interface IPlaceholderProps {
  active: boolean;
  fontSize?: string | null;
}
