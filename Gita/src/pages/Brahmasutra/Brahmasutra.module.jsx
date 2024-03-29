import BrahmaSutraComponent from "./Component/Brahmasutra.component";
import BrahmasutraFun from "./Component/Brahmasutra.fun";
const BrahmaSutra = () => {
  const {
    selectedChapter,
    handleChapterChange,
    selectedQuarter,
    handleQuarterChange,
    selectedSutra,
    handleSutraChange,
    OptionLength,
    handleClick,
    shareRef,
    shId,
    sutraContent,
    _hideTrans,
    hideTrans,
    _changeCodeToEn,
    isHindiTranslate,
    _changeCodeToHi,
    translateContent,
    isSharePopVisible,
    clickEvent,
    site,
    shareTitle,
  } = BrahmasutraFun();

  return (
    <BrahmaSutraComponent
      selectedChapter={selectedChapter}
      handleChapterChange={handleChapterChange}
      selectedQuarter={selectedQuarter}
      handleQuarterChange={handleQuarterChange}
      selectedSutra={selectedSutra}
      handleSutraChange={handleSutraChange}
      OptionLength={OptionLength}
      handleClick={handleClick}
      shareRef={shareRef}
      shId={shId}
      sutraContent={sutraContent}
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
export default BrahmaSutra;
