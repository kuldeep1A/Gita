import {getDoc, doc, setDoc} from 'firebase/firestore';
import {database} from '../config/firebaseConfig';

let shlokas = {};

export const getShlokasLen = async ({_path, setShlokasLen}) => {
  const ref = doc(database, _path);
  shlokas = (await getDoc(ref))?.data();
  const len = shlokas ? Object.keys(shlokas).length : 1;
  setShlokasLen(len);
};

export const getShloka = ({field, setData}) => {
  setData(shlokas[field]);
};

export const updateShlokaData = async ({_path, field, changedData}) => {
  const ref = doc(database, _path);
  const _data = {[field]: changedData};
  try {
    await setDoc(ref, _data, {merge: true});
    return true;
  } catch (error) {
    console.error('Error updating document: ', error);
    return false;
  }
};
