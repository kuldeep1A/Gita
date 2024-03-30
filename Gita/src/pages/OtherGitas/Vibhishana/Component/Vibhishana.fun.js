import {useEffect, useState, useRef, useCallback} from 'react';
import {fetchGitasContent} from '../../../../services/services';
import {_translate} from '../../../../Function/utils';
const VibhishanaFun = () => {
  useEffect(() => {
    document.title = 'Vibhishana | Gita';
    return () => {
      document.title = 'Vibhishana | Gita';
    };
  }, []);
  const [OptionLength, setOptionLength] = useState(1);
  const [selectedShloka, setSelectedShloka] = useState(1);
  const [ShlokaContent, setShlokaContent] = useState('');
  const [translateContent, setTranslateCotent] = useState('');
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(false);
  const [clickEvent, setClickEvent] = useState(null);
  const shareRef = useRef(null);
  var site = 'vibhishana';
  var shId = `sh-${site}-${selectedShloka}`;
  var shareTitle = `Vibhishana Gita, shloka: ${selectedShloka}.`;
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

    let _path = `/gitas/database/othergitas/collection/vibhishana/shlokasdoc`;
    fetchGitasContent({
      _path,
      setOptionLength,
      selectedShloka,
      setShlokaContent,
      _fieldname: 'Shloka',
    });
  }, [selectedShloka, isHindiTranslate, ShlokaContent, goTranslate]);
  return {
    OptionLength,
    ShlokaContent,
    _changeCodeToEn,
    _changeCodeToHi,
    clickEvent,
    handleClick,
    handleShlokaChange,
    _hideTrans,
    hideTrans,
    isHindiTranslate,
    isSharePopVisible,
    selectedShloka,
    shareRef,
    shareTitle,
    shId,
    site,
    translateContent,
  };
};

export default VibhishanaFun;