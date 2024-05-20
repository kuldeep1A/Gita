import WorkStationFun from './WorkStation.fun'
import OptionComponent from './Options/Option.component'
import ConfirmComponent from './Confirm/Confirm.component'
const WorkStationComponent = () => {
  const {
    cData,
    ChangedDataUpdate,
    chV,
    confirm,
    cSel1V,
    cSel2V,
    cSel3V,
    data,
    dbC,
    disappear,
    _fetch,
    fetchDisable,
    handleChange1,
    handleChange1a,
    handleChange1b,
    handleChange2b,
    handleChange2a,
    handleChange3b,
    handleChange3a,
    handleChangeData,
    handleConfirm,
    handleDbChange,
    handleMode,
    handleOpenEditor,
    KandaTypes,
    mode,
    openEdit,
    SargaLen,
    shlokasLen,
    SutTypes,
  } = WorkStationFun()
  const _con = cData
  return (
    <div className='workstation'>
      <div className={`controller ${disappear ? 'empty-editor' : ''}`}>
        <div className='dbAc'>
          <div className='sel-db sel'>
            <label htmlFor=''>Database Collection</label>
            <select
              name='db-col'
              id='db-col'
              value={dbC}
              onChange={e => handleDbChange(e.target.value)}
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
            KandaTypes={KandaTypes}
            SargaLen={SargaLen}
            handleChange1={handleChange1}
            handleChange1a={handleChange1a}
            handleChange1b={handleChange1b}
            handleChange2b={handleChange2b}
            handleChange2a={handleChange2a}
            handleChange3b={handleChange3b}
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
            {mode === 0 ? (
              <button
                onClick={() => _fetch()}
                className={fetchDisable ? 'cursor-none' : ''}
                disabled={fetchDisable}>
                Get-Shloka
              </button>
            ) : (
              <button
                onClick={() => handleOpenEditor()}
                className={!openEdit ? 'cursor-none' : ''}
                disabled={!openEdit}>
                Open-Editor
              </button>
            )}
          </div>
        </div>
      </div>
      {!disappear && (
        <div style={{ marginTop: '10px' }} className={`editor`}>
          <div className='shlokaInfo'>
            You are now at Shloka No.
            {mode == 0
              ? `${['c-bra', 'c-val'].includes(dbC) ? cSel3V : ['c-sri', 'c-ash', 'c-ava', 'c-kap', 'c-sru', 'c-udd', 'c-yog'].includes(dbC) ? cSel2V : cSel1V} --- Changing`
              : `${shlokasLen + 1} --- Addition`}
          </div>
          <div className='shlokaEditor'>
            <div className='ch-con-area'>
              <textarea
                name='shlokas editor'
                spellCheck={false}
                aria-autocomplete={false}
                aria-expanded={true}
                value={
                  cData === ''
                    ? data
                    : cData === data
                      ? data
                      : cData != data
                        ? undefined
                        : undefined
                }
                id=''
                style={{ height: '330px' }}
                onChange={e => handleChangeData(e.target.value)}
              />
              <div className='c-em3-data'>
                <div className='ch-data'>{cData}</div>
              </div>
            </div>
          </div>
          <div className={`updation ${cData !== '' ? '' : 'is-hidden-desktop'}`}>
            <div className='confirm'>
              <button type='button' onClick={handleConfirm}>
                Confirm
              </button>
              {_con && confirm && (
                <ConfirmComponent
                  handleConfirm={handleConfirm}
                  confirm={confirm}
                  changeData={_con}
                  update={ChangedDataUpdate}
                  mode={mode}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default WorkStationComponent
