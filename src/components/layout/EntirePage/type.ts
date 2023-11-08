export interface IEntireNewsValue {
  keyword: string;
  thumbnail: string;
  id: string;
}

export interface IEntireValue {
  title: string;
  list: IEntireNewsValue[];
}
