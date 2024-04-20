import {useState, useEffect, useRef, useCallback} from 'react';
import {_translate} from '../../../Function/utils';
import {fetchGitasContent} from '../../../Function/services/services';

const YogaSutraFun = () => {
  useEffect(() => {
    document.title = 'Yogasutra | Gita';
    return () => {
      document.title = 'Yogasutra | Gita';
    };
  }, []);
  const [OptionLength, setOptionLength] = useState(1);
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedSutra, setSelectedSutra] = useState(1);
  const [SutraContent, setSutraContent] = useState('');
  const [BhasyaContent, setBhasyaContent] = useState('');
  const [VrittiContent, setVrittiContent] = useState('');
  const [stranslateContent, setSTranslateCotent] = useState('');
  const [btranslateContent, setBTranslateCotent] = useState('');
  const [vtranslateContent, setVTranslateCotent] = useState('');
  const [translateContent, setTranslateCotent] = useState('');
  const [whichSutra, setWhichSutra] = useState(2);
  const [isViewSutra, setIsViewSutra] = useState(false);
  const [isViewBhasya, setIsViewBhasya] = useState(false);
  const [isViewVritti, setIsViewVritti] = useState(false);
  const [isSharePopVisible, setSharePopVisible] = useState(false);
  const [isHindiTranslate, setIsHindiTranslate] = useState(true);
  const [hideTrans, setHideTrans] = useState(false);
  const [shareTC, setShareTC] = useState('sutra');
  const [clickEvent, setClickEvent] = useState(null);
  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const shareRefS = useRef(null);
  const shareRefB = useRef(null);
  const shareRefV = useRef(null);
  var site = 'surti';
  var shsId = `sh-${site}-sutra-${selectedChapter}-${selectedSutra}`;
  var shbId = `sh-${site}-bhasya-${selectedChapter}-${selectedSutra}`;
  var shvId = `sh-${site}-vritti-${selectedChapter}-${selectedSutra}`;
  var shId = `sh-${site}-${shareTC}-${selectedChapter}-${selectedSutra}`;
  var shareTitle = `Sruti Gita, Content: ${shareTC}, Chapter: ${selectedChapter}, shloka: ${selectedSutra}.`;
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
  const fillTranslate = useCallback(
    whichSutra => {
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
        if (shstcontent !== '' && shbtcontent !== '' && shvtcontent !== '') {
          setSTranslateCotent(shstcontent);
          setBTranslateCotent(shbtcontent);
          setVTranslateCotent(shvtcontent);
          fillTranslate(whichSutra);
        } else {
          setSTranslateCotent('Wait for Shloka!');
          setBTranslateCotent('Wait for Shloka!');
          setVTranslateCotent('Wait for Shloka!');
        }
      } else {
        setSTranslateCotent('Wait!');
        setBTranslateCotent('Wait!');
        setVTranslateCotent('Wait!');
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
    if (BhasyaContent !== '' && BhasyaContent) {
      goTranslate(SutraContent, BhasyaContent, VrittiContent, isHindiTranslate);
      fillTranslate(whichSutra);
    } else {
      setSTranslateCotent('Wait for Shloka!');
      setBTranslateCotent('Wait for Shloka!');
      setVTranslateCotent('Wait for Shloka!');
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
    const handleRef = event => {
      if (event) {
        const isShareS = event.target.hasAttribute('data-share-s');
        const isShareB = event.target.hasAttribute('data-share-b');
        const isShareV = event.target.hasAttribute('data-share-v');
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
    document.body.addEventListener('click', handleRef);
    window.addEventListener('scroll', () => closeSharePop(), {capture: true});
    window.addEventListener('resize', () => closeSharePop());
    return () => {
      document.body.removeEventListener('click', handleRef);
      window.removeEventListener('scroll', () => closeSharePop(), {
        capture: true,
      });
      window.removeEventListener('resize', () => closeSharePop());
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
  const handleChapterChange = event => {
    const newChapter = parseInt(event.target.value, 10);
    setSelectedChapter(newChapter);
    setSelectedSutra(1);
    setData1({});
    setData2({});
    setData3({});
  };
  const handleSutraChange = event => {
    const newSutra = parseInt(event.target.value, 10);
    setSelectedSutra(newSutra);
  };
  const handleCheckboxChange = checkboxNumber => {
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
    let _pathB = `/gitas/database/yogasutra/chapters/Chapter${selectedChapter}/shlokas/Bhashya/shlokasdoc`;
    let _pathS = `/gitas/database/yogasutra/chapters/Chapter${selectedChapter}/shlokas/Sutra/shlokasdoc`;
    let _pathV = `/gitas/database/yogasutra/chapters/Chapter${selectedChapter}/shlokas/Vritti/shlokasdoc`;

    Object.keys(data1).length === 0 &&
      fetchGitasContent({
        _path: _pathB,
        setOptionLength,
        selectedShloka: selectedSutra,
        setShlokaContent: setBhasyaContent,
        _fieldname: 'Bhashya',
        setData: setData1,
      });

    Object.keys(data2).length === 0 &&
      fetchGitasContent({
        _path: _pathS,
        setOptionLength,
        selectedShloka: selectedSutra,
        setShlokaContent: setSutraContent,
        _fieldname: 'Sutra',
        setData: setData2,
      });
    Object.keys(data3).length === 0 &&
      fetchGitasContent({
        _path: _pathV,
        setOptionLength,
        selectedShloka: selectedSutra,
        setShlokaContent: setVrittiContent,
        _fieldname: 'Vritti',
        setData: setData3,
      });
  }, [selectedChapter, data1, data2, data3, selectedSutra]);

  useEffect(() => {
    Object.keys(data1).length > 0 &&
      setBhasyaContent(data1[`Bhashya${selectedSutra}`]);
    Object.keys(data2).length > 0 &&
      setSutraContent(data2[`Sutra${selectedSutra}`]);
    Object.keys(data3).length > 0 &&
      setVrittiContent(data3[`Vritti${selectedSutra}`]);
  }, [selectedSutra, data1, data2, data3]);

  return {
    _changeCodeToEn,
    _changeCodeToHi,
    _hideTrans,
    areAnyCheckboxesChecked,
    BhasyaContent,
    clickEvent,
    handleChapterChange,
    handleCheckboxChange,
    handleClick,
    handleSutraChange,
    hideTrans,
    isHindiTranslate,
    isSharePopVisible,
    isViewBhasya,
    isViewSutra,
    isViewVritti,
    OptionLength,
    selectedChapter,
    selectedSutra,
    setShareTC,
    setWhichSutra,
    shbId,
    shId,
    shareRefB,
    shareRefS,
    shareRefV,
    shareTitle,
    shsId,
    shvId,
    site,
    SutraContent,
    translateContent,
    VrittiContent,
    whichSutra,
  };
};
export default YogaSutraFun;
