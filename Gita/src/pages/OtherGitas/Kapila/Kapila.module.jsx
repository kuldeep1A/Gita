import KapilaComponent from "./Component/Kapila.component";
import KapilaFun from "./Component/Kapila.fun";
const Kapila = () => {
  const {
    selectedChapter,
    handleChapterChange,
    selectedShloka,
    handleShlokaChange,
    OptionLength,
    shId,
    ShlokaContent,
    handleClick,
    shareRef,
    _hideTrans,
    hideTrans,
    _changeCodeToEn,
    _changeCodeToHi,
    isHindiTranslate,
    translateContent,
    isSharePopVisible,
    clickEvent,
    site,
    shareTitle,
  } = KapilaFun();
  return (
    <KapilaComponent
      selectedChapter={selectedChapter}
      handleChapterChange={handleChapterChange}
      selectedShloka={selectedShloka}
      handleShlokaChange={handleShlokaChange}
      OptionLength={OptionLength}
      shId={shId}
      ShlokaContent={ShlokaContent}
      handleClick={handleClick}
      shareRef={shareRef}
      _hideTrans={_hideTrans}
      hideTrans={hideTrans}
      _changeCodeToEn={_changeCodeToEn}
      _changeCodeToHi={_changeCodeToHi}
      isHindiTranslate={isHindiTranslate}
      translateContent={translateContent}
      isSharePopVisible={isSharePopVisible}
      clickEvent={clickEvent}
      site={site}
      shareTitle={shareTitle}
     />
  );
};
export default Kapila;
