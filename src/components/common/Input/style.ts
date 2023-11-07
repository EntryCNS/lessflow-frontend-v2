import styled, { css } from "styled-components";
import type { IInputStyle, IPlaceholderProps } from "./type";

const Border = {
  none: css`
    border: 1px solid ${({ theme }) => theme.Gray100};
  `,
  active: css`
    border: 1px solid ${({ theme }) => theme.Blue300};
  `,
};

const PlaceholderState = {
  none: css`
    padding: 0px;
    color: ${({ theme }) => theme.Placeholder};
  `,
  active: css`
    color: ${({ theme }) => theme.Blue300};
    font-size: 12px;
    padding: 5px 15px;
    margin-left: 24px;
    margin-top: -9px;
    z-index: 1;
  `,
};

export const Input = styled.input<IInputStyle>`
  padding: ${({ padding }) => (padding ? padding : "24px 28px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16")}px;
  width: ${({ width }) => (width ? width + "px" : "100%")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5")}px;
  ${({ border }) => (border ? Border.active : Border.none)};
  background-color: rgba(255, 255, 255, 0);
  z-index: 100;
`;

export const Placeholder = styled.p<IPlaceholderProps>`
  position: absolute;
  background-color: white;
  z-index: 99;
  transition: 0.1s;
  margin: ${({ margin }) => (margin ? margin : "24px 28px")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16")}px;
  ${({ active }) => (active ? PlaceholderState.active : PlaceholderState.none)};
`;

export const Container = styled.div`
  margin-top: 10px;
  position: relative;
`;
