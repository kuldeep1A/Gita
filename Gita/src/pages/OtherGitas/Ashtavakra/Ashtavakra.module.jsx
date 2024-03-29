import AshtavakraFun from "./Component/Ashtavakra.fun";
import AshtavakraComponent from "./Component/Ashtavakra.component";

const Ashtavakra = () => {
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
  } = AshtavakraFun();

  return (
    <AshtavakraComponent
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

export default Ashtavakra;
