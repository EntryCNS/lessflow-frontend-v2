import API from "../API";

export const getArticleList = () => {
  const response = API.get("/article/");
  return response;
};

export const getArtileInformation = (id: string) => {
  const response = API.get(`/article/${id}`);
  return response;
};

export const getArtileVideo = (id: string) => {
  const response = API.get(`/article/video/${id}`);
  return response;
};

export const getArticlePage = (pageIdx: number) => {
  const response = API.get(`/article/list/?page=${pageIdx}`);
  return response;
};

export const getArticleToday = (today: string) => {
  const response = API.get(`/article/home/?date=${today}`);
  return response;
};
