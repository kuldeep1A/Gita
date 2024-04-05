import {OptionPropTypes} from '../../../../Function/PropTypes';
import {ShlokasOptions} from './Shlokas.Options.component';

const OptionComponent = ({
  cSel1V,
  chV,
  cSel3V,
  cSel2V,
  mode,
  shlokasLen,
  whatdb,
  SutTypes,
  KandaTypes,
  SargaLen,
  handleChange1,
  handleChange1a,
  handleChange1b,
  handleChange2b,
  handleChange2a,
  handleChange3b,
  handleChange3a,
}) => {
  return (
    <>
      {chV &&
      [
        'c-bra',
        'c-ash',
        'c-ava',
        'c-kap',
        'c-sru',
        'c-udd',
        'c-sri',
        'c-yog',
      ].includes(whatdb) ? (
        <div className='sel-ch sel'>
          <label htmlFor=''>Select Chapters</label>
          <select
            value={cSel1V}
            onChange={e => handleChange1(parseInt(e.target.value))}>
            <option value={0} defaultChecked>
              select
            </option>
            {Array.from({length: chV}, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {`${index + 1} - Chapter`}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <></>
      )}

      {whatdb === 'c-ash' && cSel1V ? (
        <>
          {mode == 0 ? (
            <ShlokasOptions
              preSel={cSel1V}
              cSelSV={cSel2V}
              type='Shloka'
              shlokasLen={shlokasLen}
              handleChange={handleChange2a}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {whatdb === 'c-ava' && cSel1V ? (
        <>
          {mode == 0 ? (
            <ShlokasOptions
              preSel={cSel1V}
              cSelSV={cSel2V}
              type='Shloka'
              shlokasLen={shlokasLen}
              handleChange={handleChange2a}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {whatdb === 'c-bra' && cSel1V ? (
        <>
          <div className=' sel'>
            <label htmlFor=''>Select Quarters</label>
            <select
              disabled={!cSel1V}
              value={cSel2V}
              onChange={e => {
                handleChange2a(parseInt(e.target.value));
              }}>
              <option value={0} defaultChecked={true}>
                Select
              </option>
              {Array.from({length: 4}, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {`${index + 1}  - Quarter`}
                </option>
              ))}
            </select>
          </div>
          {cSel2V && mode == 0 ? (
            <ShlokasOptions
              preSel={cSel2V}
              cSelSV={cSel3V}
              type='Sutra'
              shlokasLen={shlokasLen}
              handleChange={handleChange3a}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {whatdb === 'c-kap' && cSel1V ? (
        <>
          {mode == 0 ? (
            <ShlokasOptions
              preSel={cSel1V}
              cSelSV={cSel2V}
              type='Shloka'
              shlokasLen={shlokasLen}
              handleChange={handleChange2a}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {whatdb === 's-sri' ? (
        <ShlokasOptions
          cSelSV={cSel1V}
          type='Sutra'
          shlokasLen={shlokasLen}
          handleChange={handleChange1a}
        />
      ) : (
        <></>
      )}

      {whatdb === 'c-sri' && cSel1V ? (
        <>
          {mode == 0 ? (
            <ShlokasOptions
              preSel={cSel1V}
              cSelSV={cSel2V}
              type='Shloka'
              shlokasLen={shlokasLen}
              handleChange={handleChange2a}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {whatdb === 'c-sru' && cSel1V ? (
        <>
          {mode == 0 ? (
            <ShlokasOptions
              preSel={cSel1V}
              cSelSV={cSel2V}
              type='Shloka'
              shlokasLen={shlokasLen}
              handleChange={handleChange2a}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {whatdb === 'c-udd' && cSel1V ? (
        <>
          {mode == 0 ? (
            <ShlokasOptions
              preSel={cSel1V}
              cSelSV={cSel2V}
              type='Shloka'
              shlokasLen={shlokasLen}
              handleChange={handleChange2a}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {whatdb === 's-vib' ? (
        <ShlokasOptions
          cSelSV={cSel1V}
          type='Sutra'
          shlokasLen={shlokasLen}
          handleChange={handleChange1a}
        />
      ) : (
        <></>
      )}

      {whatdb === 'c-yog' && cSel1V ? (
        <>
          <div className=' sel'>
            <label htmlFor=''>Select Types</label>
            <select
              disabled={!cSel1V}
              value={SutTypes}
              onChange={e => {
                handleChange2b(e.target.value);
              }}>
              <option value='' defaultChecked={true}>
                Select
              </option>
              <option value='Bhashya'>Bhashyas</option>
              <option value='Sutra'>Sutras</option>
              <option value='Vritti'>Bhojavrttis</option>
            </select>
          </div>
          {mode == 0 && SutTypes ? (
            <ShlokasOptions
              preSel={SutTypes}
              cSelSV={cSel3V}
              type='Shloka'
              shlokasLen={shlokasLen}
              handleChange={handleChange3b}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {whatdb === 'c-val' ? (
        <>
          <div className=' sel'>
            <label htmlFor=''>Select Kandas</label>
            <select
              value={KandaTypes}
              onChange={e => {
                handleChange1b(e.target.value);
              }}>
              <option value='' defaultChecked={true}>
                Select
              </option>
              <option value='ARANYAKANDA'>ARANYAKANDA</option>
              <option value='AYODHYAKANDA'>AYODHYAKANDA</option>
              <option value='BALAKANDA'>BALAKANDA</option>
            </select>
          </div>
          {KandaTypes ? (
            <div className=' sel'>
              <label htmlFor=''>Select Sargas</label>
              <select
                value={cSel2V}
                onChange={e => {
                  handleChange2a(parseInt(e.target.value));
                }}>
                <option value={0} defaultChecked={true}>
                  Select
                </option>
                {Array.from({length: SargaLen}, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <></>
          )}
          {mode == 0 && cSel2V ? (
            <ShlokasOptions
              preSel={cSel2V}
              cSelSV={cSel3V}
              type='Shloka'
              shlokasLen={shlokasLen}
              handleChange={handleChange3b}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default OptionComponent;
OptionComponent.propTypes = OptionPropTypes;
