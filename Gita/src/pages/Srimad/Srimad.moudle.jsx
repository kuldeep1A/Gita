import SrimadComponent from './Component/Srimad.component';
import SrimadFun from './Component/Srimad.fun';

const Srimad = () => {
  const {
    _changeCodeToEn,
    _changeCodeToHi,
    _hideTrans,
    clickEvent,
    handleChapterChange,
    handleClick,
    handleSholkaChange,
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
  } = SrimadFun();
  return (
    <SrimadComponent
      _changeCodeToEn={_changeCodeToEn}
      _changeCodeToHi={_changeCodeToHi}
      _hideTrans={_hideTrans}
      clickEvent={clickEvent}
      handleChapterChange={handleChapterChange}
      handleClick={handleClick}
      handleSholkaChange={handleSholkaChange}
      hideTrans={hideTrans}
      isHindiTranslate={isHindiTranslate}
      isSharePopVisible={isSharePopVisible}
      OptionLength={OptionLength}
      selectedChapter={selectedChapter}
      selectedShloka={selectedShloka}
      shareRef={shareRef}
      shareTitle={shareTitle}
      shId={shId}
      ShlokaContent={ShlokaContent}
      site={site}
      translateContent={translateContent}
    />
  );
};

export default Srimad;
