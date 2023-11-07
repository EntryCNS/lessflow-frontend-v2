import API from "../API";

interface IProps {
  email: string;
}

export const sendSubscribeEmail = ({ email }: IProps) => {
  const response = API.post("/subscribe", { email });
  return response;
};
