import styled from "styled-components";

interface ICircleProps {
  circle: number;
}

export const MainContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor100};
  width: 400px;
  height: 300px;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.Gray300};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
`;

export const LoadingView = styled.div<ICircleProps>`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  margin-bottom: 15px;
  background: conic-gradient(
    ${({ theme }) => theme.Gray100} 300deg,
    ${({ theme }) => theme.Gray300} 30deg
  );
  transform: rotate(${({ circle }) => circle}deg);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingMiddlePoint = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundColor100};
`;
