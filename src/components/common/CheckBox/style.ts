import styled, { css } from "styled-components";
import CheckIcon from "@/../public/asset/Check.svg";
import { ICheckBoxStyle } from "./type";
import Image from "next/image";

const Color = {
  none: css`
    background-color: ${({ theme }) => theme.Gray100};
  `,
  active: css`
    background-color: ${({ theme }) => theme.Blue};
  `,
};

export const Check = styled(Image)`
  width: 10px;
  height: 10px;
`;

export const CheckBox = styled.div<ICheckBoxStyle>`
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${({ active }) => (active ? Color.active : Color.none)}
`;

export const Container = styled.div`
  display: inline-block;
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Context = styled.p`
  color: ${({ theme }) => theme.Normal};
  font-size: 14px;
  margin-left: 12px;
`;
