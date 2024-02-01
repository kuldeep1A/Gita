import React from "react";

export const EmailLinkD = ({ email, subject }) => {
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}`;

  return (
    <a target="_blank" href={mailtoLink} rel="noreferrer">
      {email}
    </a>
  );
};

export const EmailLinkM = ({ email, subject }) => {
  const mailtoLink = `mailto:${encodeURIComponent(
    email
  )}?subject=${encodeURIComponent(subject)}`;
  return (
    <a target="_blank" href={mailtoLink} rel="noreferrer">
      {email}
    </a>
  );
};

export default function _set_session() {
  if (window.sessionStorage.getItem("isDark") === null) {
    window.sessionStorage.setItem("isDark", "true");
  } else if (window.sessionStorage.getItem("isDark") === "true") {
    window.sessionStorage.setItem("isDark", "false");
  } else if (window.sessionStorage.getItem("isDark") === "false") {
    window.sessionStorage.setItem("isDark", "true");
  }
  window.location.reload();
}
