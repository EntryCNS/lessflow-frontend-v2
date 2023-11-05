import Image from "next/image";
import styled, { css } from "styled-components";

const isPageActiveContext = {
  active: css`
    color: ${({ theme }) => theme.logoColor};
  `,
  none: css`
    color: ${({ theme }) => theme.Black};
  `,
};

interface IContextProps {
  isActive: boolean;
}

export const LogoImage = styled(Image)`
  height: 50px;
  margin-left: 50px;
`;

export const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  height: 75px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
`;

export const ContentsWrap = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 200px;
`;

export const ContentsContext = styled.p<IContextProps>`
  font-size: 16px;
  font-weight: 700;
  ${({ isActive }) =>
    isActive ? isPageActiveContext.active : isPageActiveContext.none}
  &:hover {
    color: ${({ theme }) => theme.logoColor};
  }
`;
