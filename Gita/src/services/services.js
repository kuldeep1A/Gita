import {doc, getDoc} from 'firebase/firestore';
import {database} from '../Function/config/firebaseConfig';

export const fetchGitasContent = async ({
  _path,
  setOptionLength,
  selectedShloka,
  setShlokaContent,
  setShlokaTranslate,
  setShlokaDescription,
  _fieldname,
}) => {
  try {
    const refC = doc(database, _path);
    const snapshot = await getDoc(refC);
    if (snapshot.exists()) {
      const data = snapshot?.data();
      setOptionLength(data ? Object.keys(data).length : 1);
      const key = `${_fieldname}${selectedShloka}`;
      const shloka = snapshot.get(key);
      if (typeof shloka === 'string') {
        setShlokaContent(shloka);
      } else {
        const keys = ['description', 'content', 'translate'];
        setShlokaDescription(shloka[keys[0]]);
        setShlokaContent(shloka[keys[1]]);
        setShlokaTranslate(shloka[keys[2]]);
      }
    } else {
      console.error('Document does not exist.');
    }
  } catch (error) {
    console.error('Unable to fetch data. Please Reload.', error);
  }
};
