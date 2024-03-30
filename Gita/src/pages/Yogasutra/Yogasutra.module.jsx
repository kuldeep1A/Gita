import YogaSutraComponent from './Component/Yogasutra.component';
import YogaSutraFun from './Component/Yogasutra.fun';
const YogaSutra = () => {
  const {
    selectedChapter,
    handleChapterChange,
    selectedSutra,
    handleSutraChange,
    OptionLength,
    handleCheckboxChange,
    isViewBhasya,
    isViewSutra,
    isViewVritti,
    shsId,
    SutraContent,
    handleClick,
    setShareTC,
    shareRefB,
    shareRefS,
    shareRefV,
    shareTitle,
    shbId,
    shvId,
    BhasyaContent,
    VrittiContent,
    _hideTrans,
    hideTrans,
    _changeCodeToEn,
    _changeCodeToHi,
    isHindiTranslate,
    setWhichSutra,
    whichSutra,
    translateContent,
    clickEvent,
    shId,
    site,
    isSharePopVisible,
    areAnyCheckboxesChecked,
  } = YogaSutraFun();

  return (
    <YogaSutraComponent
      selectedChapter={selectedChapter}
      handleChapterChange={handleChapterChange}
      selectedSutra={selectedSutra}
      handleSutraChange={handleSutraChange}
      OptionLength={OptionLength}
      handleCheckboxChange={handleCheckboxChange}
      isViewBhasya={isViewBhasya}
      isViewSutra={isViewSutra}
      isViewVritti={isViewVritti}
      shsId={shsId}
      SutraContent={SutraContent}
      handleClick={handleClick}
      setShareTC={setShareTC}
      shareRefB={shareRefB}
      shareRefS={shareRefS}
      shareRefV={shareRefV}
      shareTitle={shareTitle}
      shbId={shbId}
      shvId={shvId}
      BhasyaContent={BhasyaContent}
      VrittiContent={VrittiContent}
      _hideTrans={_hideTrans}
      hideTrans={hideTrans}
      _changeCodeToEn={_changeCodeToEn}
      _changeCodeToHi={_changeCodeToHi}
      isHindiTranslate={isHindiTranslate}
      setWhichSutra={setWhichSutra}
      whichSutra={whichSutra}
      translateContent={translateContent}
      clickEvent={clickEvent}
      shId={shId}
      site={site}
      isSharePopVisible={isSharePopVisible}
      areAnyCheckboxesChecked={areAnyCheckboxesChecked}
    />
  );
};
export default YogaSutra;
