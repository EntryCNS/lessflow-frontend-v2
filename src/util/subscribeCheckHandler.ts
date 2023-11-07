interface subscribePostProps {
  email: string;
  sendEmail: boolean;
}

interface subscribeEmailStringProps {
  email: string;
}

const EmailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const KeywordRegExp = /\s/g;

export const subscribeCheckHandler: ({}: subscribePostProps) => boolean = ({
  email,
  sendEmail,
}: subscribePostProps) => {
  if (sendEmail && EmailRegExp.test(email)) return true;
  else return false;
};

export const subscribeEmailCheckHandler: ({}: subscribeEmailStringProps) => boolean =
  ({ email }: subscribeEmailStringProps) => {
    if (EmailRegExp.test(email)) return true;
    else return false;
  };
