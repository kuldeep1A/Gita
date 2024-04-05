import {useState, useEffect, useRef} from 'react';
import {fetchGitasContent} from '../../../../Function/services/services';
import {goTranslate} from '../../../../Function/utils';
const AshtavakraFun = () => {
  useEffect(() => {
    document.title = 'Ashtavakra | Gita';
    return () => {
      document.title = 'Ashtavakra | Gita';
    };
  }, []);
  const [OptionLength, setOptionLength] = useState(1);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedShloka, setSelectedShloka] = useState(1);
  const [ShlokaContent, setShlokaContent] = useState('');
  const [translateContent, setTranslateCotent] = useState('');
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const shareRef = useRef(null);
  var site = 'ashtavakra';
  var shId = `sh-${site}-${selectedChapter}-${selectedShloka}`;
  var shareTitle = `Ashtavakra Gita, Chapter: ${selectedChapter}, shloka: ${selectedShloka}.`;
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
    setSelectedShloka(1);
  };
  const handleShlokaChange = event => {
    const newShloka = parseInt(event.target.value, 10);
    setSelectedShloka(newShloka);
  };
  const _changeCodeToEn = async () => {
    setIsHindiTranslate(false);
    await goTranslate({ShlokaContent, isHindiTranslate, setTranslateCotent});
  };
  const _changeCodeToHi = async () => {
    setIsHindiTranslate(true);
    await goTranslate({ShlokaContent, isHindiTranslate, setTranslateCotent});
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
    let _path = `/gitas/database/othergitas/collection/ashtavakra/chapters/Chapter${selectedChapter}/shlokasdoc`;
    fetchGitasContent({
      _path,
      setOptionLength,
      selectedShloka,
      setShlokaContent,
      _fieldname: 'Shloka',
    });
  }, [selectedShloka, selectedChapter, ShlokaContent, isHindiTranslate]);

  return {
    OptionLength,
    ShlokaContent,
    _changeCodeToEn,
    _changeCodeToHi,
    clickEvent,
    handleChapterChange,
    handleClick,
    handleShlokaChange,
    _hideTrans,
    hideTrans,
    isHindiTranslate,
    isSharePopVisible,
    selectedChapter,
    selectedShloka,
    shareRef,
    shareTitle,
    shId,
    site,
    translateContent,
  };
};

export default AshtavakraFun;
