import VibhishanaComponent from "./Component/Vibhishana.component";
import VibhishanaFun from "./Component/Vibhishana.fun";
const Vibhishana = () => {
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
  } = VibhishanaFun();
  return (
    <VibhishanaComponent
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
export default Vibhishana;
