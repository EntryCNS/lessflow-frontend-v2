export interface articleListType {
  id: string;
  keyword: string;
  thumbnail: string;
  createAt: string;
}

export interface articleType {
  keyword: string;
  article: {
    title: string;
    content: string;
    thumbnail: string;
  };
}
