import BrahmaSutraComponent from './Component/Brahmasutra.component'
import BrahmasutraFun from './Component/Brahmasutra.fun'
const BrahmaSutra = () => {
  const {
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
  } = BrahmasutraFun()

  return (
    <BrahmaSutraComponent
      OptionLength={OptionLength}
      _changeCodeToEn={_changeCodeToEn}
      _changeCodeToHi={_changeCodeToHi}
      clickEvent={clickEvent}
      handleChapterChange={handleChapterChange}
      handleClick={handleClick}
      handleQuarterChange={handleQuarterChange}
      handleSutraChange={handleSutraChange}
      _hideTrans={_hideTrans}
      hideTrans={hideTrans}
      isHindiTranslate={isHindiTranslate}
      isSharePopVisible={isSharePopVisible}
      selectedChapter={selectedChapter}
      selectedQuarter={selectedQuarter}
      selectedSutra={selectedSutra}
      shareRef={shareRef}
      shareTitle={shareTitle}
      shId={shId}
      site={site}
      sutraContent={sutraContent}
      translateContent={translateContent}
    />
  )
}
export default BrahmaSutra
