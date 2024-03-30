import {doc, getDoc} from 'firebase/firestore';
import {database} from '../firebaseConfig';

export const fetchGitasContent = async ({
  _path,
  setOptionLength,
  selectedShloka,
  setShlokaContent,
  _fieldname,
}) => {
  const maxRetires = 3;
  let retries = 0;
  const fetchData = async () => {
    try {
      const refC = doc(database, _path);
      const snapshot = await getDoc(refC);
      if (snapshot.exists) {
        const shlokasData = snapshot.data();
        const key = `${_fieldname}${selectedShloka}`;
        const shlokaContent = shlokasData[key];
        setOptionLength(shlokasData ? Object.keys(shlokasData).length : 1);
        setShlokaContent(shlokaContent);
      } else {
        console.error('Document does not exist.');
      }
    } catch (error) {
      if (retries < maxRetires) {
        retries++;
        setTimeout(fetchData, 4000);
      } else {
        console.error(
          'Max retires exceeded. Unable to fetch data. Please Reload.',
        );
      }
    }
  };
  fetchData();
};
