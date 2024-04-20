import {useState, useEffect, useRef} from 'react';
import {goTranslate} from '../../../Function/utils';
import {fetchGitasContent} from '../../../Function/services/services';
const SrimadFun = () => {
  useEffect(() => {
    document.title = 'Srimad Bhagavad | Gita';
    return () => {
      document.title = 'Srimad Bhagavad | Gita';
    };
  }, []);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedShloka, setselectedShloka] = useState(1);
  const [OptionLength, setOptionLength] = useState(1);
  const [ShlokaContent, setShlokaContent] = useState('');
  const [translateContent, setTranslateCotent] = useState('');
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const [data, setData] = useState({});
  const shareRef = useRef(null);
  var site = 'srimad';
  var shId = `sh-${site}-${selectedChapter}-${selectedShloka}`;
  var shareTitle = `Srimad Bhagavad Gita, Chapter: ${selectedChapter}, shloka: ${selectedShloka}.`;
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
  const handleChapterChange = event => {
    const newChapter = parseInt(event.target.value, 10);
    setSelectedChapter(newChapter);
    setselectedShloka(1);
    setData({});
  };
  const handleShlokaChange = event => {
    const newShloka = parseInt(event.target.value, 10);
    setselectedShloka(newShloka);
  };

  const _changeCodeToEn = async () => {
    setIsHindiTranslate(false);
    await goTranslate({
      sansContent: ShlokaContent,
      whatcode: isHindiTranslate,
      setTranslateCotent,
    });
  };

  const _changeCodeToHi = async () => {
    setIsHindiTranslate(true);
    await goTranslate({
      sansContent: ShlokaContent,
      whatcode: isHindiTranslate,
      setTranslateCotent,
    });
  };
  function _hideTrans() {
    if (hideTrans) {
      setHideTrans(false);
    } else {
      setHideTrans(true);
    }
  }
  useEffect(() => {
    if (ShlokaContent !== '' && ShlokaContent) {
      goTranslate({
        sansContent: ShlokaContent,
        whatcode: isHindiTranslate,
        setTranslateCotent,
      });
    } else {
      setTranslateCotent('Wait for Shloka!');
    }
  }, [ShlokaContent, isHindiTranslate]);

  useEffect(() => {
    let _path = `/gitas/database/bhagavadgita/chapters/Chapter${selectedChapter}/shlokasdoc`;
    Object.keys(data).length === 0 &&
      fetchGitasContent({
        _path,
        setOptionLength,
        selectedShloka,
        setShlokaContent,
        _fieldname: 'shloka',
        setData,
      });
  }, [selectedChapter, data, selectedShloka]);

  useEffect(() => {
    Object.keys(data).length > 0 &&
      setShlokaContent(data[`shloka${selectedShloka}`]);
  }, [data, selectedShloka]);

  return {
    _changeCodeToEn,
    _changeCodeToHi,
    _hideTrans,
    clickEvent,
    handleChapterChange,
    handleClick,
    handleShlokaChange,
    hideTrans,
    isHindiTranslate,
    isSharePopVisible,
    OptionLength,
    selectedChapter,
    selectedShloka,
    shareRef,
    shareTitle,
    shId,
    ShlokaContent,
    site,
    translateContent,
  };
};

export default SrimadFun;
