import API from "../API";

export const getArticleList = () => {
  const response = API.get("/article/list");
  return response;
};
