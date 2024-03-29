import { EmailLinkPropTypes } from "../Function/PropTypes";
export const EmailLinkD = ({ email, subject }) => {
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email,
  )}&su=${encodeURIComponent(subject)}`;

  return (
    <a target="_blank" href={mailtoLink} rel="noreferrer">
      {email}
    </a>
  );
};
export const EmailLinkM = ({ email, subject }) => {
  const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}`;
  return (
    <a target="_blank" href={mailtoLink} rel="noreferrer">
      {email}
    </a>
  );
};
EmailLinkD.propTypes = EmailLinkPropTypes;
EmailLinkM.propTypes = EmailLinkPropTypes;
