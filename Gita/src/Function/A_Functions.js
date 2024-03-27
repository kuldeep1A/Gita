import React from "react";
import JsGoogleTranslateFree from "@kreisler/js-google-translate-free";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const _SpeakInEnHi = async (_isEn, _isHi, _content, speak, voices, cancel) => {
  if (_isEn) {
    const _englishMaleVoice = await voices.find((voice) => voice.lang.startsWith("en"));
    if (_englishMaleVoice && _content) {
      speak({
        text: _content,
        voice: _englishMaleVoice,
      });
    }
  } else if (_isHi) {
    const _hindiFemaleVoice = await voices.find((voice) => voice.lang.startsWith("hi-IN"));
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
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementid: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
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
