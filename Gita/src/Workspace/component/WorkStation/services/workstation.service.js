import {getDoc, doc} from 'firebase/firestore';
import {database} from '../../../../Function/config/firebaseConfig';

let shlokas = {};

export const getShlokasLen = async ({_path, setShlokasLen}) => {
  const ref = doc(database, _path);
  shlokas = (await getDoc(ref))?.data();
  const len = shlokas ? Object.keys(shlokas).length : 1;
  setShlokasLen(len);
};

export const getShloka = ({field, setData}) => {
  console.log('d: ', shlokas[field]);
  setData(shlokas[field]);
};
