import { ReactElement } from "react";

type SendTemplateUnion =
  | "subTitle"
  | "title"
  | "image"
  | "pointContext"
  | "context";

export type SendTemplateLeftContents = Record<SendTemplateUnion, string>;

export interface ISendTemplateProps {
  leftContents: SendTemplateLeftContents;
  children: ReactElement | string;
  isSuccess: boolean;
  SuccessInfo: {
    title: string;
    context: string;
  };
}
