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
    shlokaData,
    site,
  } = useValmikiramayanaLogic();

  return (
    <ValmikiramayanaComponent
      handleKandaChange={handleKandaChange}
      selectedSarga={selectedSarga}
      handleSargaChange={handleSargaChange}
      handleSargaLen={handleSargaLen}
      selectedShloka={selectedShloka}
      handleShlokaChange={handleShlokaChange}
      shlokaOptionLen={shlokaOptionLen}
      shId={shId}
      shlokaData={shlokaData}
      sanEng={sanEng}
      selectedKanda={selectedKanda}
      handleClick={handleClick}
      shareRef={shareRef}
      _hideTrans={_hideTrans}
      hideTrans={hideTrans}
      isSharePopVisible={isSharePopVisible}
      clickEvent={clickEvent}
      site={site}
      shareTitle={shareTitle}
    />
  );
};

export default Valmikiramayana;
