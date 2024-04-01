import YogaSutraComponent from './Component/Yogasutra.component';
import YogaSutraFun from './Component/Yogasutra.fun';
const YogaSutra = () => {
  const {
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
  } = YogaSutraFun();

  return (
    <YogaSutraComponent
      _changeCodeToEn={_changeCodeToEn}
      _changeCodeToHi={_changeCodeToHi}
      _hideTrans={_hideTrans}
      areAnyCheckboxesChecked={areAnyCheckboxesChecked}
      BhasyaContent={BhasyaContent}
      clickEvent={clickEvent}
      handleChapterChange={handleChapterChange}
      handleCheckboxChange={handleCheckboxChange}
      handleClick={handleClick}
      handleSutraChange={handleSutraChange}
      hideTrans={hideTrans}
      isHindiTranslate={isHindiTranslate}
      isSharePopVisible={isSharePopVisible}
      isViewBhasya={isViewBhasya}
      isViewSutra={isViewSutra}
      isViewVritti={isViewVritti}
      OptionLength={OptionLength}
      selectedChapter={selectedChapter}
      selectedSutra={selectedSutra}
      setShareTC={setShareTC}
      setWhichSutra={setWhichSutra}
      shbId={shbId}
      shId={shId}
      shareRefB={shareRefB}
      shareRefS={shareRefS}
      shareRefV={shareRefV}
      shareTitle={shareTitle}
      shsId={shsId}
      shvId={shvId}
      site={site}
      SutraContent={SutraContent}
      translateContent={translateContent}
      VrittiContent={VrittiContent}
      whichSutra={whichSutra}
    />
  );
};
export default YogaSutra;
