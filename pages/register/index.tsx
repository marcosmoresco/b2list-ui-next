import { useIntl } from "react-intl";

export default function Register() {
  const int = useIntl();

  return <div>{int.formatMessage({ id: "register" })}</div>;
}
