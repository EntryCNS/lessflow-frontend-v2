import styled from "styled-components";

export const InlineBox = styled.div`
  display: inline-block;
`;

export const MainContainer = styled.div`
  position: relative;
  width: 250px;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const TitleBox = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.Normal};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentsWrap = styled.div`
  width: 70vh;
  display: flex;
  justify-content: space-between;
`;
