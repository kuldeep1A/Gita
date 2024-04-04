import WorkStationFun from './WorkStation.fun';
import OptionComponent from './Options/Option.component';
const WorkStationComponent = () => {
  const {
    chV,
    cSel1V,
    cSel2V,
    cSel3V,
    dbC,
    data,
    disappear,
    _fetch,
    fetchDisable,
    mode,
    setData,
    shlokasLen,
    SutTypes,
    handleDbChange,
    handleMode,
    handleChange1,
    handleChange1a,
    handleChange2b,
    handleChange2a,
    handleChange2c,
    handleChange3a,
  } = WorkStationFun();

  return (
    <div className='workstation'>
      <div className='controller'>
        <div className='dbAc'>
          <div className='sel-db sel'>
            <label htmlFor=''>Database Collection</label>
            <select
              name='db-col'
              id='db-col'
              value={dbC}
              onChange={handleDbChange}
              defaultChecked>
              <option value=''>Database</option>
              <option value='c-ash'>Ashtavakra</option>
              <option value='c-ava'>Avadhuta</option>
              <option value='c-bra'>Brahmasutra</option>
              <option value='c-kap'>Kapila</option>
              <option value='s-sri'>Sriam</option>
              <option value='c-sri'>Srimad</option>
              <option value='c-sru'>Sruti</option>
              <option value='c-udd'>Uddhava</option>
              <option value='c-val'>Valmikiramayana</option>
              <option value='s-vib'>Vibhishana</option>
              <option value='c-yog'>Yogasutra</option>
            </select>
          </div>
          <OptionComponent
            chV={chV}
            cSel1V={cSel1V}
            cSel2V={cSel2V}
            cSel3V={cSel3V}
            mode={mode}
            shlokasLen={shlokasLen}
            whatdb={dbC}
            SutTypes={SutTypes}
            handleChange1={handleChange1}
            handleChange1a={handleChange1a}
            handleChange2b={handleChange2b}
            handleChange2a={handleChange2a}
            handleChange2c={handleChange2c}
            handleChange3a={handleChange3a}
          />
        </div>
        <div className='actiondb'>
          <div className='mode'>
            <select
              name='mode-ch'
              id='mode-ch'
              value={mode}
              onChange={e => handleMode(parseInt(e.target.value))}>
              <option value={0}>Changing Mode</option>
              <option value={1}>Addition Mode</option>
            </select>
          </div>
          <div className='fetch'>
            <button onClick={() => _fetch()} disabled={fetchDisable}>
              Fetch
            </button>
          </div>
        </div>
      </div>
      <div
        style={{marginTop: '10px'}}
        className={`editor ${disappear ? 'disappear' : ''}`}>
        <div className='shlokaInfo'>
          You are now at Shloka No.
          {mode == 0
            ? `${['c-bra', 'c-val'].includes(dbC) ? cSel3V : ['c-sri', 'c-ash', 'c-ava', 'c-kap', 'c-sru', 'c-udd', 'c-yog'].includes(dbC) ? cSel2V : cSel1V} --- Changing`
            : `${shlokasLen + 1} --- Addition`}
        </div>
        <div className='shlokaEditor'>
          <textarea
            name='shlokas editor'
            className={data ? '' : 'eM'}
            spellCheck={false}
            aria-autocomplete={false}
            aria-expanded={true}
            id=''
            style={{height: '330px'}}
            value={data}
            onChange={e => setData(e.target.value)}
          />
        </div>
        <div className={`updation ${data ? '' : 'is-hidden-desktop'}`}>
          <div className='confirm'>
            <button type='button'>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkStationComponent;
