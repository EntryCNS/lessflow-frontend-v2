import Image from "next/image";
import styled from "styled-components";

export const MainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor100};
`;

export const SubContainer = styled.div`
  width: 70%;
  max-width: 70%;
  height: 70%;
  max-height: 70%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-itmes: center;
`;

export const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 4rem;
`;

export const SuccessContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EmailIcon = styled(Image)`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;
export const SuccessTitle = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.Normal};
`;
export const SuccessContext = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.Gray300};
`;
