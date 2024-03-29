import ValmikiramayanaComponent from "./Component/Valmikiramayana.component";
import useValmikiramayanaLogic from "./Component/Valmikiramayana.fun";

const Valmikiramayana = () => {
  const {
    selectedKanda,
    selectedSarga,
    selectedShloka,
    shlokaData,
    sanEng,
    isSharePopVisible,
    clickEvent,
    handleClick,
    shareRef,
    shId,
    site,
    hideTrans,
    _hideTrans,
    handleKandaChange,
    handleSargaChange,
    handleShlokaChange,
    handleSargaLen,
    handleShlokaLen,
    shareTitle,
  } = useValmikiramayanaLogic();

  return (
    <ValmikiramayanaComponent
      handleKandaChange={handleKandaChange}
      selectedSarga={selectedSarga}
      handleSargaChange={handleSargaChange}
      handleSargaLen={handleSargaLen}
      selectedShloka={selectedShloka}
      handleShlokaChange={handleShlokaChange}
      handleShlokaLen={handleShlokaLen}
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
