interface IProps {
  email: string;
  keyword: string;
  TTSService: boolean;
  sendEmail: boolean;
}

const EmailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const KeywordRegExp = /\s/g;

export const summaryCheckHandler: ({}: IProps) => boolean = ({
  email,
  keyword,
  TTSService,
  sendEmail,
}: IProps) => {
  console.log(
    EmailRegExp.test(email),
    keyword.replace(KeywordRegExp, "") !== ""
  );

  if (
    TTSService &&
    sendEmail &&
    EmailRegExp.test(email) &&
    keyword.replace(KeywordRegExp, "") !== ""
  )
    return true;
  else return false;
};
