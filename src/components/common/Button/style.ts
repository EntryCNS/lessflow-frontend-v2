import styled, { css } from "styled-components";
import { IButtonProps } from "./type";

const Color = {
  none: css`
    background-color: ${({ theme }) => theme.Gray300};
  `,
  active: css`
    background-color: ${({ theme }) => theme.Blue300};
  `,
};

export const Button = styled.button<IButtonProps>`
  font-size: 16px;
  padding: 18px 26px;
  border-radius: 10px;
  border: none;
  color: white;
  box-shadow: none;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  ${({ active }) => (active ? Color.active : Color.none)};
`;
