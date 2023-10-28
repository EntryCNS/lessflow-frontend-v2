import React, { ButtonHTMLAttributes, ReactElement } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  disable: boolean;
  active: boolean | null;
  children?: ReactElement | string;
  width?: string | null;
  height?: string | null;
}
