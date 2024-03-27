import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { database } from "../../../Function/A_Functions";

export const fetchOtherGitasContent = async ({
  setidC,
  idC,
  setOptionLength,
  selectedShloka,
  setShlokaContent,
  _pathC,
  _documentPath,
}) => {
  try {
    const pathC = _pathC;
    const refC = collection(database, pathC);
    getDocs(refC).then((sanpshot) => {
      sanpshot.docs.forEach((doc) => {
        setidC(`${doc.id}`);
      });
    });
    if (idC) {
      const documentPath = _documentPath;
      const docRef = doc(database, documentPath);
      const docSanpshot = await getDoc(docRef);
      if (docSanpshot.exists) {
        const ShlokaData = docSanpshot.data();
        if (ShlokaData !== undefined && ShlokaData !== null) {
          const ShlokaArray = Object.entries(ShlokaData).map(([shlokaNumber, Shloka]) => ({
            shlokaNumber,
            Shloka,
          }));
          setOptionLength(ShlokaArray.length);
          const shloka = ShlokaData[`Shloka${selectedShloka}`];
          setShlokaContent(shloka);
        }
      }
    }
  } catch (error) {
    console.error("Error fetching shloka content: ", error);
  }
};
