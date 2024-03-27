import React from "react";
import JsGoogleTranslateFree from "@kreisler/js-google-translate-free";

export const _SpeakInEnHi = (_isEn, _isHi, _content, speak, voices, cancel) => {
  if (_isEn) {
    const _englishMaleVoice = voices.find((voice) => voice.lang.startsWith("en"));
    if (_englishMaleVoice && _content) {
      speak({
        text: _content,
        voice: _englishMaleVoice,
      });
    }
  } else if (_isHi) {
    const _hindiFemaleVoice = voices.find((voice) => voice.lang.startsWith("hi-IN"));
    if (_hindiFemaleVoice && _content) {
      speak({
        text: _content,
        voice: _hindiFemaleVoice,
      });
    }
  } else {
    cancel();
  }
};
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

export const _translate = async (sansContent, whatcode) => {
  try {
    var lanCode = whatcode ? "hi" : "en";
    const translation = await JsGoogleTranslateFree.translate({
      from: "sa",
      to: lanCode,
      text: sansContent,
    });
    return translation;
  } catch (error) {
    console.error("Trans error:", error);
    return "";
  }
};
