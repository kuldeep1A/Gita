import CryptoJS from 'crypto-js';
import {key, adNetI} from '../config/firebaseConfig';

function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return parseInt(originalText);
}

export const authUtils = async ({_setUTN}) => {
  const _Num = generateBrowserIdentifier();
  const _Num2 = decrypt(adNetI);
  if (_Num === _Num2) {
    _setUTN(true);
  } else {
    console.error("You're not use the admin browser or network!");
    _setUTN(false);
  }
};

function generateBrowserIdentifier() {
  const userAgent = navigator.userAgent;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const timezoneOffset = new Date().getTimezoneOffset();
  const plugins = Array.from(navigator.plugins).map(plugin => ({
    name: plugin.name,
    description: plugin.description,
  }));
  const identifier = `${userAgent}_${screenWidth}_${screenHeight}_${timezoneOffset}_${JSON.stringify(plugins)}`;
  const hashedIdentifier = hashString(identifier);
  return hashedIdentifier;
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash &= hash;
  }
  return hash;
}
