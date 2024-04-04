import ValmikiramayanaComponent from './Component/Valmikiramayana.component';
import useValmikiramayanaLogic from './Component/Valmikiramayana.fun';

const Valmikiramayana = () => {
  const {
    _hideTrans,
    clickEvent,
    handleClick,
    handleKandaChange,
    handleSargaChange,
    handleSargaLen,
    handleShlokaChange,
    shlokaOptionLen,
    hideTrans,
    isSharePopVisible,
    sanEng,
    selectedKanda,
    selectedSarga,
    selectedShloka,
    shId,
    shareRef,
    shareTitle,
    shlokaContent,
    shlokaDescription,
    shlokaTranslate,
    site,
  } = useValmikiramayanaLogic();

  return (
    <ValmikiramayanaComponent
      _hideTrans={_hideTrans}
      clickEvent={clickEvent}
      handleClick={handleClick}
      handleKandaChange={handleKandaChange}
      handleSargaChange={handleSargaChange}
      handleSargaLen={handleSargaLen}
      handleShlokaChange={handleShlokaChange}
      shlokaOptionLen={shlokaOptionLen}
      hideTrans={hideTrans}
      isSharePopVisible={isSharePopVisible}
      sanEng={sanEng}
      selectedKanda={selectedKanda}
      selectedSarga={selectedSarga}
      selectedShloka={selectedShloka}
      shId={shId}
      shareRef={shareRef}
      shareTitle={shareTitle}
      shlokaContent={shlokaContent}
      shlokaDescription={shlokaDescription}
      shlokaTranslate={shlokaTranslate}
      site={site}
    />
  );
};

export default Valmikiramayana;
