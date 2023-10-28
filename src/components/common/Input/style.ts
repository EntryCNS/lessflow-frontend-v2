import styled, { css } from "styled-components";
import type { IInputStyle, IPlaceholderProps } from "./type";

const Border = {
  none: css`
    border: 1px solid ${({ theme }) => theme.Gray100};
  `,
  active: css`
    border: 1px solid ${({ theme }) => theme.Blue};
  `,
};

const PlaceholderState = {
  none: css`
    margin-left: 28px;
    margin-top: 24px;
    padding: 0px;
    color: ${({ theme }) => theme.Placeholder};
  `,
  active: css`
    color: ${({ theme }) => theme.Blue};
    font-size: 12px;
    padding: 0px 15px;
    margin-left: 24px;
    margin-top: -4px;
    z-index: 1;
  `,
};

export const Input = styled.input<IInputStyle>`
  padding: 24px 28px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16")}px;
  width: ${({ width }) => (width ? width : "400")}px;
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5")}px;
  ${({ border }) => (border ? Border.active : Border.none)};
  background-color: rgba(255, 255, 255, 0);
`;

export const Placeholder = styled.p<IPlaceholderProps>`
  position: absolute;
  background-color: white;
  z-index: -1;
  transition: 0.2s;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16")}px;
  ${({ active }) => (active ? PlaceholderState.active : PlaceholderState.none)};
`;

export const Container = styled.div`
  position: relative;
`;
