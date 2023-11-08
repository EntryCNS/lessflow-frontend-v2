interface IProps {
  email: string;
  keyword: string;
  sendEmail: boolean;
}

const EmailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const KeywordRegExp = /\s/g;

export const summaryCheckHandler: ({}: IProps) => boolean = ({
  email,
  keyword,
  sendEmail,
}: IProps) => {
  if (
    sendEmail &&
    EmailRegExp.test(email) &&
    keyword.replace(KeywordRegExp, "") !== ""
  )
    return true;
  else return false;
};
