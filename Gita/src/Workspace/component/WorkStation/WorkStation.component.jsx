import WorkStationFun from './WorkStation.fun';
import OptionComponent from './Options/Option.component';
const WorkStationComponent = () => {
  const {
    cSel1V,
    chcode,
    chV,
    cSel3V,
    cSel2V,
    dbC,
    data,
    disappear,
    _fetch,
    fetchEnable,
    mode,
    setData,
    setSel1V,
    setSel3V,
    setSel2V,
    setDbc,
    setMode,
    shlokasLen,
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
              onChange={_ => {
                setDbc(_.target.value);
              }}
              defaultChecked>
              <option value=''>Database</option>
              <option value='c-bra'>Brahmasutra</option>
              <option value='c-ash'>Ashtavakra</option>
              <option value='c-kap'>Kapila</option>
              <option value='s-sri'>Sriam</option>
              <option value='c-sru'>Sruti</option>
              <option value='c-udd'>Uddhava</option>
              <option value='s-vib'>Vibhishana</option>
              <option value='c-sri'>Srimad</option>
              <option value='c-val'>Valmikiramayana</option>
              <option value='c-yog'>Yogasutra</option>
            </select>
          </div>
          <OptionComponent
            cSel1V={cSel1V}
            chcode={chcode}
            chV={chV}
            cSel3V={cSel3V}
            cSel2V={cSel2V}
            mode={mode}
            setSel1V={setSel1V}
            setSel3V={setSel3V}
            setSel2V={setSel2V}
            shlokasLen={shlokasLen}
            whatdb={dbC}
          />
        </div>
        <div className='actiondb'>
          <div className='mode'>
            <select
              name='mode-ch'
              id='mode-ch'
              value={mode}
              onChange={e => setMode(parseInt(e.target.value))}>
              <option value={0}>Changing Mode</option>
              <option value={1}>Addition Mode</option>
            </select>
          </div>
          <div className='fetch'>
            <button onClick={() => _fetch()} disabled={fetchEnable}>
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
            ? `${cSel3V} --- Changing`
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
