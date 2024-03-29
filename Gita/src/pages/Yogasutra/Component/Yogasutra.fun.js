import { useState, useEffect, useRef, useCallback } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { _translate } from "../../../Function/utils";

const YogaSutraFun = () => {
  useEffect(() => {
    document.title = "Yogasutra | Gita";
    return () => {
      document.title = "Yogasutra | Gita";
    };
  }, []);
  const [idC, setidC] = useState("");
  const [OptionLength, setOptionLength] = useState(1);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedSutra, setSelectedSutra] = useState(1);
  const [SutraContent, setSutraContent] = useState("");
  const [BhasyaContent, setBhasyaContent] = useState("");
  const [VrittiContent, setVrittiContent] = useState("");
  const [stranslateContent, setSTranslateCotent] = useState("");
  const [btranslateContent, setBTranslateCotent] = useState("");
  const [vtranslateContent, setVTranslateCotent] = useState("");
  const [translateContent, setTranslateCotent] = useState("");
  const [whichSutra, setWhichSutra] = useState(2);
  const [isViewSutra, setIsViewSutra] = useState(false);
  const [isViewBhasya, setIsViewBhasya] = useState(false);
  const [isViewVritti, setIsViewVritti] = useState(false);
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(false);
  const [shareTC, setShareTC] = useState("sutra");
  const [clickEvent, setClickEvent] = useState(null);
  const shareRefS = useRef(null);
  const shareRefB = useRef(null);
  const shareRefV = useRef(null);
  var site = "surti";
  var shsId = `sh-${site}-sutra-${selectedChapter}-${selectedSutra}`;
  var shbId = `sh-${site}-bhasya-${selectedChapter}-${selectedSutra}`;
  var shvId = `sh-${site}-vritti-${selectedChapter}-${selectedSutra}`;
  var shId = `sh-${site}-${shareTC}-${selectedChapter}-${selectedSutra}`;
  var shareTitle = `Sruti Gita, Content: ${shareTC}, Chapter: ${selectedChapter}, shloka: ${selectedSutra}.`;
  const handleClick = (event) => {
    if (!isSharePopVisible) {
      setClickEvent(event);
      setSharePopVisible(true);
    } else {
      closeSharePop();
    }
  };
  const closeSharePop = () => {
    setSharePopVisible(false);
  };
  const fillTranslate = useCallback(
    (whichSutra) => {
      if (whichSutra === 1) {
        setTranslateCotent(stranslateContent);
      } else if (whichSutra === 2) {
        setTranslateCotent(btranslateContent);
      } else if (whichSutra === 3) {
        setTranslateCotent(vtranslateContent);
      }
    },
    [stranslateContent, btranslateContent, vtranslateContent],
  );
  const goTranslate = useCallback(
    async (shsContent, shbContent, shvContent, whatcode) => {
      if (shbContent.length < 1912 && shvContent.length < 1912) {
        const shstcontent = await _translate(shsContent, whatcode);
        const shbtcontent = await _translate(shbContent, whatcode);
        const shvtcontent = await _translate(shvContent, whatcode);
        if (shstcontent !== "" && shbtcontent !== "" && shvtcontent !== "") {
          setSTranslateCotent(shstcontent);
          setBTranslateCotent(shbtcontent);
          setVTranslateCotent(shvtcontent);
          fillTranslate(whichSutra);
        } else {
          setSTranslateCotent("Wait for Shloka!");
          setBTranslateCotent("Wait for Shloka!");
          setVTranslateCotent("Wait for Shloka!");
        }
      } else {
        setSTranslateCotent("Wait for Shloka! Shloka Length must be less than 1912 character.");
        setBTranslateCotent("Wait for Shloka! Shloka Length must be less than 1912 character.");
        setVTranslateCotent("Wait for Shloka! Shloka Length must be less than 1912 character.");
      }
    },
    [whichSutra, fillTranslate],
  );
  const _changeCodeToEn = async () => {
    setIsHindiTranslate(false);
    await goTranslate(BhasyaContent, isHindiTranslate);
  };
  const _changeCodeToHi = async () => {
    setIsHindiTranslate(true);
    await goTranslate(BhasyaContent, isHindiTranslate);
  };
  function _hideTrans() {
    if (hideTrans) {
      setHideTrans(false);
    } else {
      setHideTrans(true);
    }
  }
  useEffect(() => {
    if (BhasyaContent !== "" && BhasyaContent) {
      goTranslate(SutraContent, BhasyaContent, VrittiContent, isHindiTranslate);
      fillTranslate(whichSutra);
    } else {
      setSTranslateCotent("Wait for Shloka!");
      setBTranslateCotent("Wait for Shloka!");
      setVTranslateCotent("Wait for Shloka!");
    }
    const handleClickOutside = (event, shareRef) => {
      const target = event.target || event.srcElement;
      if (target && shareRef !== null) {
        const share_b = !shareRef.current.contains(target);
        if (share_b) {
          setTimeout(() => {
            closeSharePop();
          }, 100);
        }
      }
    };
    const handleRef = (event) => {
      if (event) {
        const isShareS = event.target.hasAttribute("data-share-s");
        const isShareB = event.target.hasAttribute("data-share-b");
        const isShareV = event.target.hasAttribute("data-share-v");
        if (isShareS) {
          handleClickOutside(event, shareRefS);
        } else if (isShareB) {
          handleClickOutside(event, shareRefB);
        } else if (isShareV) {
          handleClickOutside(event, shareRefV);
        } else {
          closeSharePop();
        }
      }
    };
    document.body.addEventListener("click", handleRef);
    window.addEventListener("scroll", () => closeSharePop(), { capture: true });
    window.addEventListener("resize", () => closeSharePop());
    return () => {
      document.body.removeEventListener("click", handleRef);
      window.removeEventListener("scroll", () => closeSharePop(), {
        capture: true,
      });
      window.removeEventListener("resize", () => closeSharePop());
    };
  }, [
    shId,
    goTranslate,
    isHindiTranslate,
    BhasyaContent,
    SutraContent,
    VrittiContent,
    shareRefB,
    shareRefS,
    shareRefV,
    whichSutra,
    fillTranslate,
  ]);
  const handleChapterChange = (event) => {
    const newChapter = parseInt(event.target.value, 10);
    setSelectedChapter(newChapter);
    setSelectedSutra(1);
  };
  const handleSutraChange = (event) => {
    const newSutra = parseInt(event.target.value, 10);
    setSelectedSutra(newSutra);
  };
  const handleCheckboxChange = (checkboxNumber) => {
    switch (checkboxNumber) {
      case 1:
        fillTranslate(!isViewBhasya ? 2 : !isViewVritti ? 3 : 2);
        setIsViewSutra(!isViewSutra);
        break;
      case 2:
        fillTranslate(!isViewSutra ? 1 : !isViewVritti ? 3 : 2);
        setIsViewBhasya(!isViewBhasya);
        break;
      case 3:
        fillTranslate(!isViewSutra ? 1 : !isViewBhasya ? 2 : 2);
        setIsViewVritti(!isViewVritti);
        break;
      default:
        break;
    }
  };
  const areAnyCheckboxesChecked = isViewBhasya && isViewSutra && isViewVritti;

  useEffect(() => {
    const fetching = async () => {
      try {
        const pathC = `/yogasutra/sRlub19VnFbWvEfx4nGi/Chapter${selectedChapter}`;
        const refC = collection(database, pathC);
        getDocs(refC).then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            setidC(`${doc.id}`);
          });
        });
        if (idC) {
          const documentPath = `/yogasutra/sRlub19VnFbWvEfx4nGi/Chapter${selectedChapter}/${idC}`;
          const docRef = doc(database, documentPath);
          const docSanpshot = await getDoc(docRef);
          if (docSanpshot.exists) {
            const SutraData = docSanpshot.data();
            if (SutraData !== undefined && SutraData !== null) {
              const SutraArrays = Object.entries(SutraData).map(([key, value]) => ({
                key,
                value,
              }));
              setOptionLength(SutraArrays.length / 3);
              const Sutra = SutraData[`Sutra${selectedSutra}`];
              const Bhasya = SutraData[`Bhashya${selectedSutra}`];
              const Vritti = SutraData[`Vritti${selectedSutra}`];
              setSutraContent(Sutra);
              setBhasyaContent(Bhasya);
              setVrittiContent(Vritti);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching sutras content: ", error);
      }
    };
    fetching();
  }, [idC, selectedChapter, selectedSutra]);
  return {
    selectedChapter,
    handleChapterChange,
    selectedSutra,
    handleSutraChange,
    OptionLength,
    handleCheckboxChange,
    isViewBhasya,
    isViewSutra,
    isViewVritti,
    shsId,
    SutraContent,
    handleClick,
    setShareTC,
    shareRefB,
    shareRefS,
    shareRefV,
    shareTitle,
    shbId,
    shvId,
    BhasyaContent,
    VrittiContent,
    _hideTrans,
    hideTrans,
    _changeCodeToEn,
    _changeCodeToHi,
    isHindiTranslate,
    setWhichSutra,
    whichSutra,
    translateContent,
    clickEvent,
    shId,
    site,
    isSharePopVisible,
    areAnyCheckboxesChecked,
  };
};
export default YogaSutraFun;
