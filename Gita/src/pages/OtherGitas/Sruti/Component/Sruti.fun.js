import {useState, useEffect, useRef, useCallback} from 'react';
import {_translate} from '../../../../Function/utils';
import {fetchGitasContent} from '../../../../services/services';
const SrutiFun = () => {
  useEffect(() => {
    document.title = 'Sruti | Gita';
    return () => {
      document.title = 'Sruti | Gita';
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
  var site = 'surti';
  var shId = `sh-${site}-${selectedChapter}-${selectedShloka}`;
  var shareTitle = `Sruti Gita, Chapter: ${selectedChapter}, shloka: ${selectedShloka}.`;
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
  const goTranslate = useCallback(async (sansContent, whatcode) => {
    if (sansContent.length < 1912) {
      const content = await _translate(sansContent, whatcode);
      if (content !== '') {
        setTranslateCotent(content);
      } else {
        setTranslateCotent('Wait for Shloka!');
      }
    } else {
      setTranslateCotent(
        'Wait for Shloka! Shloka Length must be less than 1912 character.',
      );
    }
  }, []);
  const _changeCodeToEn = async () => {
    setIsHindiTranslate(false);
    await goTranslate(ShlokaContent, isHindiTranslate);
  };
  const _changeCodeToHi = async () => {
    setIsHindiTranslate(true);
    await goTranslate(ShlokaContent, isHindiTranslate);
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
      goTranslate(ShlokaContent, isHindiTranslate);
    } else {
      setTranslateCotent('Wait for Shloka!');
    }
    let _path = `/gitas/database/othergitas/collection/sruti/chapters/Chapter${selectedChapter}/shlokasdoc`;
    fetchGitasContent({
      _path,
      setOptionLength,
      selectedShloka,
      setShlokaContent,
      _fieldname: 'Shloka',
    });
  }, [
    selectedShloka,
    selectedChapter,
    isHindiTranslate,
    goTranslate,
    ShlokaContent,
  ]);

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
export default SrutiFun;
