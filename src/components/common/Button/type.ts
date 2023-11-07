import React, { ButtonHTMLAttributes, ReactElement } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean | null;
  disable?: boolean;
  children?: ReactElement | string;
  width?: string | null;
  height?: string | null;
}
