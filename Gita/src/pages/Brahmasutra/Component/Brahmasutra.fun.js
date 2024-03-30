import {useState, useEffect, useRef, useCallback} from 'react';
import {_translate} from '../../../Function/utils';
import {fetchGitasContent} from '../../../services/services';

const BrahmasutraFun = () => {
  useEffect(() => {
    document.title = 'Brahmasutra | Gita';
    return () => {
      document.title = 'Brahmasutra | Gita';
    };
  }, []);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const [selectedSutra, setSelectedSutra] = useState(1);
  const [OptionLength, setOptionLength] = useState(1);
  const [sutraContent, setSutraContent] = useState('');
  const [translateContent, setTranslateCotent] = useState('');
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const shareRef = useRef(null);
  var site = 'brahmasutra';
  var shId = `sh-${site}-${selectedChapter}-${selectedQuarter}-${selectedSutra}`;
  var shareTitle = `Brahma Sutra, Chapter: ${selectedChapter}, Quarter: ${selectedQuarter}, shloka: ${selectedSutra}.`;
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
  const handleChapterChange = evnet => {
    const newChapter = parseInt(evnet.target.value, 10);
    setSelectedChapter(newChapter);
    setSelectedQuarter(1);
    setSelectedSutra(1);
  };
  const handleQuarterChange = evnet => {
    const newQuarter = parseInt(evnet.target.value, 10);
    setSelectedQuarter(newQuarter);
    setSelectedSutra(1);
  };
  const handleSutraChange = evnet => {
    const newSutra = parseInt(evnet.target.value, 10);
    setSelectedSutra(newSutra);
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
    if (sutraContent !== '' && sutraContent) {
      goTranslate(sutraContent, isHindiTranslate);
    } else {
      setTranslateCotent('Wait for Shloka!');
    }
    let _path = `/gitas/database/brahmasutra/chapters/Chapter${selectedChapter}/quarters/Quarter${selectedQuarter}/sutrasdoc`;
    fetchGitasContent({
      _path,
      setOptionLength,
      selectedShloka: selectedSutra,
      setShlokaContent: setSutraContent,
      _fieldname: 'Sutra',
    });
  }, [
    sutraContent,
    goTranslate,
    isHindiTranslate,
    selectedChapter,
    selectedQuarter,
    selectedSutra,
  ]);
  return {
    OptionLength,
    _changeCodeToEn,
    _changeCodeToHi,
    clickEvent,
    handleChapterChange,
    handleClick,
    handleQuarterChange,
    handleSutraChange,
    _hideTrans,
    hideTrans,
    isHindiTranslate,
    isSharePopVisible,
    selectedChapter,
    selectedQuarter,
    selectedSutra,
    shareRef,
    shareTitle,
    shId,
    site,
    sutraContent,
    translateContent,
  };
};
export default BrahmasutraFun;