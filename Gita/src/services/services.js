import {doc, getDoc} from 'firebase/firestore';
import {database} from '../firebaseConfig';

export const fetchGitasContent = async ({
  _path,
  setOptionLength,
  selectedShloka,
  setShlokaContent,
  _fieldname,
}) => {
  try {
    const refC = doc(database, _path);
    const snapshot = await getDoc(refC);
    if (snapshot.exists) {
      const data = snapshot.data();
      console.log();
      const key = `${_fieldname}${selectedShloka}`;
      setOptionLength(data ? Object.keys(data).length : 1);
      setShlokaContent(snapshot.get(key));
    } else {
      console.error('Document does not exist.');
    }
  } catch (error) {
    console.error('Unable to fetch data. Please Reload.', error);
  }
};
