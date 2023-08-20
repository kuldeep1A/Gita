import React from "react";

const EmailLink = ({ email, subject, children }) => {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return <a href={mailtoLink}>{children}</a>;
};

export default EmailLink;
