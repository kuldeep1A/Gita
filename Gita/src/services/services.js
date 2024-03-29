import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { database } from "../firebaseConfig";

export const fetchOtherGitasContent = async ({
  setOptionLength,
  selectedShloka,
  setShlokaContent,
  _pathC,
}) => {
  try {
    const pathC = _pathC;
    const refC = collection(database, pathC);
    const snapshot = await getDocs(refC);
    let idC = snapshot?.docs[0].id;
    if (idC) {
      let _documentPath = `${pathC}/${idC}`;
      await fetchOtherGitasDocument({
        _documentPath,
        setOptionLength,
        selectedShloka,
        setShlokaContent,
      });
    }
  } catch (error) {
    console.error("Error fetching shloka content: ", error);
  }
};

export const fetchOtherGitasDocument = async ({
  _documentPath,
  setOptionLength,
  selectedShloka,
  setShlokaContent,
}) => {
  try {
    const documentPath = _documentPath;
    const docRef = doc(database, documentPath);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists) {
      const ShlokaData = docSnapshot?.data();
      setOptionLength(ShlokaData ? Object.keys(ShlokaData).length : 1);
      setShlokaContent(docSnapshot.get(`Shloka${selectedShloka}`));
    } else {
      setShlokaContent("");
    }
  } catch (error) {
    console.error("Error fetching shloka content: ", error);
  }
};

export const fetchValmikiRamayanaData = async ({
  _pathK,
  setShlokaData,
  selectedSarga,
  selectedShloka,
}) => {
  try {
    const pathK = _pathK;
    const refK = collection(database, pathK);
    const idKValue = (await getDocs(refK))?.docs[0].id;
    if (idKValue) {
      const pathS = `${pathK}/${idKValue}/sarga${selectedSarga}/Shloka${selectedShloka}`;
      const refS = doc(database, pathS);
      const docSnapshot = await getDoc(refS);
      if (docSnapshot.exists()) {
        setShlokaData(docSnapshot.data());
      }
    }
  } catch (error) {
    console.error("Error fetching shloka content:", error);
  }
};
