import API from "../API";

interface IProps {
  email: string;
  keyword: string;
}

export const sendCreateArticle = ({ email, keyword }: IProps) => {
  const response = API.post("/article/", { email, keyword });
  return response;
};
