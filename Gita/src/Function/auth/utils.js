import CryptoJS from 'crypto-js';
import {key, adNetI} from '../config/firebaseConfig';

function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return parseInt(originalText);
}

export const authUtils = async ({_setUTN}) => {
  const _networkIP = await fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => data.ip);
  const _Num = parseInt(_networkIP.split('.').join(''));
  const _Num2 = decrypt(adNetI);
  if (_Num === _Num2) {
    _setUTN(true);
  } else {
    console.error("You're not under the admin network!");
    _setUTN(false);
  }
};
