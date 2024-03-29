import SriramComponent from "./Component/Sriram.component";
import SriramFun from "./Component/Sriram.fun";
const Sriram = () => {
  const {
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
    clickEvent,
    site,
    shareTitle,
    isSharePopVisible,
  } = SriramFun();
  return (
    <SriramComponent
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
      clickEvent={clickEvent}
      site={site}
      shareTitle={shareTitle}
      isSharePopVisible={isSharePopVisible}
    />
  );
};
export default Sriram;
