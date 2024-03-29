import { useState, useEffect, useRef, useCallback } from "react";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";
import { database } from "../../../firebaseConfig";
import { _translate } from "../../../Function/utils";

const BrahmasutraFun = () => {
  useEffect(() => {
    document.title = "Brahmasutra | Gita";
    return () => {
      document.title = "Brahmasutra | Gita";
    };
  }, []);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const [selectedSutra, setSelectedSutra] = useState(1);
  const [OptionLength, setOptionLength] = useState(1);
  const [sutraContent, setSutraContent] = useState("");
  const [translateContent, setTranslateCotent] = useState("");
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const shareRef = useRef(null);
  var site = "brahmasutra";
  var shId = `sh-${site}-${selectedChapter}-${selectedQuarter}-${selectedSutra}`;
  var shareTitle = `Brahma Sutra, Chapter: ${selectedChapter}, Quarter: ${selectedQuarter}, shloka: ${selectedSutra}.`;
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
  useEffect(() => {
    const handleClickOutside = (event) => {
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
    document.body.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", () => closeSharePop(), { capture: true });
    window.addEventListener("resize", () => closeSharePop());
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", () => closeSharePop(), {
        capture: true,
      });
      window.removeEventListener("resize", () => closeSharePop());
    };
  }, [shId]);
  const handleChapterChange = (evnet) => {
    const newChapter = parseInt(evnet.target.value, 10);
    setSelectedChapter(newChapter);
    setSelectedQuarter(1);
    setSelectedSutra(1);
  };
  const handleQuarterChange = (evnet) => {
    const newQuarter = parseInt(evnet.target.value, 10);
    setSelectedQuarter(newQuarter);
    setSelectedSutra(1);
  };
  const handleSutraChange = (evnet) => {
    const newSutra = parseInt(evnet.target.value, 10);
    setSelectedSutra(newSutra);
  };
  const goTranslate = useCallback(async (sansContent, whatcode) => {
    if (sansContent.length < 1912) {
      const content = await _translate(sansContent, whatcode);
      if (content !== "") {
        setTranslateCotent(content);
      } else {
        setTranslateCotent("Wait for Shloka!");
      }
    } else {
      setTranslateCotent("Wait for Shloka! Shloka Length must be less than 1912 character.");
    }
  }, []);
  const _changeCodeToEn = async () => {
    setIsHindiTranslate(false);
    await goTranslate(sutraContent, isHindiTranslate);
  };
  const _changeCodeToHi = async () => {
    setIsHindiTranslate(true);
    await goTranslate(sutraContent, isHindiTranslate);
  };
  function _hideTrans() {
    if (hideTrans) {
      setHideTrans(false);
    } else {
      setHideTrans(true);
    }
  }
  useEffect(() => {
    if (sutraContent !== "" && sutraContent) {
      goTranslate(sutraContent, isHindiTranslate);
    } else {
      setTranslateCotent("Wait for Shloka!");
    }
    const fetchSutraContent = async () => {
      try {
        let idcx = "";
        let idqx = "";
        const pathC = `/brahmasutra/yvDcZdIZ7ZCTA2ptHSoj/Chapter${selectedChapter}`;
        const refC = collection(database, pathC);
        const snapshotC = await getDocs(refC);
        idcx = snapshotC.docs[0].id;
        if (idcx) {
          const pathQ = `${pathC}/${idcx}/Quarter${selectedQuarter}/`;
          const refQ = collection(database, pathQ);
          const snapshotQ = await getDocs(refQ);
          idqx = snapshotQ.docs[0].id;
          console.log(idqx);
          if (idqx) {
            var documentPath = `${pathQ}/${idqx}`;
            const docRef = doc(database, documentPath);
            const docSnapshot = await getDoc(docRef);
            if (docSnapshot.exists) {
              const sutraData = docSnapshot.data();
              setOptionLength(sutraData ? Object.keys(sutraData) : 1);
              setSutraContent(docSnapshot.get(`Sutra${selectedSutra}`));
            } else {
              setSutraContent("");
            }
          }
        }
      } catch (error) {
        console.error("Error fetching shloka content:", error);
      }
    };
    fetchSutraContent();
  }, [
    sutraContent,
    goTranslate,
    isHindiTranslate,
    selectedChapter,
    selectedQuarter,
    selectedSutra,
  ]);
  return {
    selectedChapter,
    handleChapterChange,
    selectedQuarter,
    handleQuarterChange,
    selectedSutra,
    handleSutraChange,
    OptionLength,
    handleClick,
    shareRef,
    shId,
    sutraContent,
    _hideTrans,
    hideTrans,
    _changeCodeToEn,
    isHindiTranslate,
    _changeCodeToHi,
    translateContent,
    isSharePopVisible,
    clickEvent,
    site,
    shareTitle,
  };
};
export default BrahmasutraFun;
