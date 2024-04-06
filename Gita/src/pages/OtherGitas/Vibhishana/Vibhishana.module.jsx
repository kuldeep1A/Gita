import VibhishanaComponent from './Component/Vibhishana.component';
import VibhishanaFun from './Component/Vibhishana.fun';
const Vibhishana = () => {
  const {
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
  } = VibhishanaFun();
  return (
    <VibhishanaComponent
      OptionLength={OptionLength}
      ShlokaContent={ShlokaContent}
      _changeCodeToEn={_changeCodeToEn}
      _changeCodeToHi={_changeCodeToHi}
      clickEvent={clickEvent}
      handleClick={handleClick}
      handleShlokaChange={handleShlokaChange}
      _hideTrans={_hideTrans}
      hideTrans={hideTrans}
      isHindiTranslate={isHindiTranslate}
      isSharePopVisible={isSharePopVisible}
      selectedShloka={selectedShloka}
      shareRef={shareRef}
      shareTitle={shareTitle}
      shId={shId}
      site={site}
      translateContent={translateContent}
    />
  );
};
export default Vibhishana;
