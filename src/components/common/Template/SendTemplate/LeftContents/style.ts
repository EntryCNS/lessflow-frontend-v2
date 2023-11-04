import Image from "next/image";
import styled from "styled-components";

export const LeftContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor100};
  width: 50%;
  height: 100%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrap = styled.div`
  width: 100%;
`;

export const SubTitle = styled.div`
  font-size: 26px;
  font-weight: 600;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

export const SymbolImage = styled(Image)`
  margin-top: 20px;
  width: 80%;
`;

export const ContextWrap = styled.pre`
  margin-top: 10px;
  display: flex;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.Blue100};
`;

export const Context = styled.p`
  color: black;
`;
