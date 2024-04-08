import {useState, useEffect, useRef} from 'react';
import {fetchGitasContent} from '../../../Function/services/services';
import {optionData} from '../../../DATA/MoreData';

const ValmikiramayanaFun = () => {
  useEffect(() => {
    document.title = 'Valmiki Ramayana | Gita';
    return () => {
      document.title = 'Valmiki Ramayana | Gita';
    };
  }, []);
  const [selectedKanda, setSelectedKanda] = useState('BALAKANDA');
  const [selectedSarga, setSelectedSarga] = useState(1);
  const [selectedShloka, setSelectedShloka] = useState(1);
  const [shlokaOptionLen, setShlokaOptionLen] = useState(1);
  const balakandaLen = Object.keys(optionData.BALAKANDA).length;
  const ayodhyaLen = Object.keys(optionData.AYODHYAKANDA).length;
  const aranyadaLen = Object.keys(optionData.ARANYAKANDA).length;
  const kishkindaLen = Object.keys(optionData.KISHKINDAKANDA).length;
  const sundaraLen = Object.keys(optionData.SUNDARAKANDA).length;
  const yuddhadaLen = Object.keys(optionData.YUDDHAKANDA).length;
  const [shlokaContent, setShlokaContent] = useState('');
  const [shlokaTranslate, setShlokaTranslate] = useState('');
  const [shlokaDescription, setShlokaDescription] = useState('');
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [hideTrans, setHideTrans] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const [data, setData] = useState({});
  const shareRef = useRef(null);
  var site = 'valmikiramayana';
  var shId = `sh-${selectedKanda}-${selectedSarga}-${selectedShloka}`;
  var shareTitle = `Valmiki Ramayana, Kanda: ${selectedKanda}, Sarga: ${selectedSarga}, Shloka: ${selectedShloka}.`;
  const handleClick = event => {
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
    const handleClickOutside = event => {
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

    document.body.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', () => closeSharePop(), {capture: true});
    window.addEventListener('resize', () => closeSharePop());

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', () => closeSharePop(), {
        capture: true,
      });
      window.removeEventListener('resize', () => closeSharePop());
    };
  }, [shId]);
  const sanEng = (shloka, c, isSans) => {
    var engs = [];
    var all = {};
    if (shloka && c === 0) {
      all = shloka
        .split("'")
        .filter(line => line.trim() !== ',' && line.trim() !== '');
      c = c + 1;
    }
    var ed = '';
    var sd = all.filter(e => {
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
  const handleKandaChange = event => {
    setSelectedKanda(event.target.value);
    setSelectedSarga(1);
    setSelectedShloka(1);
    setData({});
  };
  const handleSargaChange = event => {
    const newSarga = parseInt(event.target.value, 10);
    setSelectedSarga(newSarga);
    setSelectedShloka(1);
    setData({});
  };
  const handleShlokaChange = event => {
    const newShloka = parseInt(event.target.value, 10);
    setSelectedShloka(newShloka);
  };
  const handleSargaLen = () => {
    if (selectedKanda === 'BALAKANDA') {
      return balakandaLen;
    } else if (selectedKanda === 'AYODHYAKANDA') {
      return ayodhyaLen;
    } else if (selectedKanda === 'ARANYAKANDA') {
      return aranyadaLen;
    } else if (selectedKanda === 'KISHKINDAKANDA') {
      return kishkindaLen;
    } else if (selectedKanda === 'SUNDARAKANDA') {
      return sundaraLen;
    } else if (selectedKanda === 'YUDDHAKANDA') {
      return yuddhadaLen;
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
    let _path = `/gitas/database/valmikiramayana/kandas/${selectedKanda}/sargas/sarga${selectedSarga}/shlokasdoc`;
    if (
      (selectedKanda, selectedSarga, selectedShloka) &&
      Object.keys(data).length === 0
    ) {
      fetchGitasContent({
        _path,
        _fieldname: 'Shloka',
        selectedShloka,
        setShlokaContent: setShlokaContent,
        setShlokaDescription: setShlokaDescription,
        setShlokaTranslate: setShlokaTranslate,
        setOptionLength: setShlokaOptionLen,
        setData: setData,
      });
    }
  }, [
    selectedKanda,
    selectedSarga,
    selectedShloka,
    shlokaContent,
    shlokaDescription,
    shlokaTranslate,
    data,
  ]);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const keys = ['description', 'content', 'translate'];
      const shloka = data[`Shloka${selectedShloka}`];
      setShlokaDescription(shloka[keys[0]]);
      setShlokaContent(shloka[keys[1]]);
      setShlokaTranslate(shloka[keys[2]]);
    }
  }, [data, selectedShloka]);
  return {
    _hideTrans,
    clickEvent,
    handleClick,
    handleKandaChange,
    handleSargaChange,
    handleSargaLen,
    handleShlokaChange,
    shlokaOptionLen,
    hideTrans,
    isSharePopVisible,
    sanEng,
    selectedKanda,
    selectedSarga,
    selectedShloka,
    shId,
    shareRef,
    shareTitle,
    shlokaContent,
    shlokaDescription,
    shlokaTranslate,
    site,
  };
};

export default ValmikiramayanaFun;
