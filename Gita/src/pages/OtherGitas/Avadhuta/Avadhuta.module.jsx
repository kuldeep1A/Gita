import AvadhutaFun from './Component/Avadhuta.fun'
import AvadhutaComponent from './Component/Avadhuta.component'

const Avadhuta = () => {
  const {
    OptionLength,
    ShlokaContent,
    _changeCodeToEn,
    _changeCodeToHi,
    clickEvent,
    handleChapterChange,
    handleClick,
    handleShlokaChange,
    _hideTrans,
    hideTrans,
    isHindiTranslate,
    isSharePopVisible,
    selectedChapter,
    selectedShloka,
    shareRef,
    shareTitle,
    shId,
    site,
    translateContent,
  } = AvadhutaFun()
  return (
    <AvadhutaComponent
      OptionLength={OptionLength}
      ShlokaContent={ShlokaContent}
      _changeCodeToEn={_changeCodeToEn}
      _changeCodeToHi={_changeCodeToHi}
      clickEvent={clickEvent}
      handleChapterChange={handleChapterChange}
      handleClick={handleClick}
      handleShlokaChange={handleShlokaChange}
      _hideTrans={_hideTrans}
      hideTrans={hideTrans}
      isHindiTranslate={isHindiTranslate}
      isSharePopVisible={isSharePopVisible}
      selectedChapter={selectedChapter}
      selectedShloka={selectedShloka}
      shareRef={shareRef}
      shareTitle={shareTitle}
      shId={shId}
      site={site}
      translateContent={translateContent}
    />
  )
}

export default Avadhuta
