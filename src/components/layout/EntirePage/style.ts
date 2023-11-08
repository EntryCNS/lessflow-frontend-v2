import styled from "styled-components";

export const NewsBoxWrap = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  overflow: auto;
  margin-bottom: 5rem;
`;

export const NewsContentsWrap = styled.div`
  padding-bottom: 5rem;
  width: 65%;
`;

export const MainContainer = styled.div`
  min-width: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
`;

export const GetNewsButton = styled.button`
  width: 70%;
  height: 75px;
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 5rem;
  color: ${({ theme }) => theme.Gray300};
  background-color: ${({ theme }) => theme.Gray100};
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  border: none;
  cursor: pointer;
  &:active {
    background-color: ${({ theme }) => theme.backgroundColor300};
  }
`;
