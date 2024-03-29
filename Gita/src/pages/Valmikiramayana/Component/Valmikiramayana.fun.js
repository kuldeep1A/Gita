import { useState, useEffect, useRef } from "react";
import { fetchValmikiRamayanaData } from "../../../services/services";
import { optionData } from "../../../DATA/MoreData";

const ValmikiramayanaFun = () => {
  useEffect(() => {
    document.title = "Valmiki Ramayana | Gita";

    return () => {
      document.title = "Valmiki Ramayana | Gita";
    };
  }, []);
  const [selectedKanda, setSelectedKanda] = useState("BALAKANDA");
  const [selectedSarga, setSelectedSarga] = useState(1);
  const [selectedShloka, setSelectedShloka] = useState(1);
  const balakandaLen = Object.keys(optionData.BALAKANDA).length;
  const ayodhyaLen = Object.keys(optionData.AYODHYAKANDA).length;
  const aranyadaLen = Object.keys(optionData.ARANYAKANDA).length;
  const kishkindaLen = Object.keys(optionData.KISHKINDAKANDA).length;
  const sundaraLen = Object.keys(optionData.SUNDARAKANDA).length;
  const yuddhadaLen = Object.keys(optionData.YUDDHAKANDA).length;
  const [shlokaData, setShlokaData] = useState({});
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [hideTrans, setHideTrans] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const shareRef = useRef(null);
  var site = "valmikiramayana";
  var shId = `sh-${selectedKanda}-${selectedSarga}-${selectedShloka}`;
  var shareTitle = `Valmiki Ramayana, Kanda: ${selectedKanda}, Sarga: ${selectedSarga}, Shloka: ${selectedShloka}.`;
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
  const sanEng = (shloka, c, isSans) => {
    var engs = [];
    var all = {};
    if (shloka && c === 0) {
      all = shloka.split("'").filter((line) => line.trim() !== "," && line.trim() !== "");
      c = c + 1;
    }
    var ed = "";
    var sd = all.filter((e) => {
      if (/[a-zA-Z]/.test(e) && !engs.includes(e)) {
        ed = `${ed}${e}`;
      }
      return !/[a-zA-Z]/.test(e);
    });
    engs.push(ed);
    if (isSans) {
      return sd;
    } else {
      return engs;
    }
  };
  const handleKandaChange = (event) => {
    setSelectedKanda(event.target.value);
    setSelectedSarga(1);
    setSelectedShloka(1);
  };
  const handleSargaChange = (event) => {
    const newSarga = parseInt(event.target.value, 10);
    setSelectedSarga(newSarga);
    setSelectedShloka(1);
  };
  const handleShlokaChange = (event) => {
    const newShloka = parseInt(event.target.value, 10);
    setSelectedShloka(newShloka);
  };
  const handleSargaLen = () => {
    if (selectedKanda === "BALAKANDA") {
      return balakandaLen;
    } else if (selectedKanda === "AYODHYAKANDA") {
      return ayodhyaLen;
    } else if (selectedKanda === "ARANYAKANDA") {
      return aranyadaLen;
    } else if (selectedKanda === "KISHKINDAKANDA") {
      return kishkindaLen;
    } else if (selectedKanda === "SUNDARAKANDA") {
      return sundaraLen;
    } else if (selectedKanda === "YUDDHAKANDA") {
      return yuddhadaLen;
    }
  };
  const handleShlokaLen = () => {
    var l = 1;
    if (selectedKanda === "BALAKANDA") {
      l = optionData.BALAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "AYODHYAKANDA") {
      l = optionData.AYODHYAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "ARANYAKANDA") {
      l = optionData.ARANYAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "KISHKINDAKANDA") {
      l = optionData.KISHKINDAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "SUNDARAKANDA") {
      l = optionData.SUNDARAKANDA[selectedSarga];
      return l;
    } else if (selectedKanda === "YUDDHAKANDA") {
      l = optionData.YUDDHAKANDA[selectedSarga];
      return l;
    }
  };
  function _hideTrans() {
    if (hideTrans) {
      setHideTrans(false);
    } else {
      setHideTrans(true);
    }
  }
  useEffect(() => {
    let _pathK = `/valmikiramayana/J9qxm1uTJFUgEKP0fVvF/${selectedKanda}`;

    fetchValmikiRamayanaData({ _pathK, setShlokaData, selectedSarga, selectedShloka });
  }, [selectedKanda, selectedSarga, selectedShloka]);
  return {
    selectedKanda,
    selectedSarga,
    selectedShloka,
    shlokaData,
    sanEng,
    isSharePopVisible,
    clickEvent,
    handleClick,
    shareRef,
    shId,
    site,
    hideTrans,
    _hideTrans,
    handleKandaChange,
    handleSargaChange,
    handleShlokaChange,
    handleSargaLen,
    handleShlokaLen,
    shareTitle,
  };
};

export default ValmikiramayanaFun;
