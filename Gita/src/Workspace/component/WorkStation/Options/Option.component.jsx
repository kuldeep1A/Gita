import {OptionPropTypes} from '../../../../Function/PropTypes';
import ShlokasOptions from './Shlokas.Options.component';

const OptionComponent = ({
  cSel1V,
  chcode,
  chV,
  cSel3V,
  cSel2V,
  mode,
  qucode,
  setSel1V,
  setSel3V,
  setSel2V,
  shcode,
  shlokasLen,
  whatdb,
}) => {
  return (
    <>
      {chV &&
      chcode &&
      [
        'c-bra',
        'c-ash',
        'c-kap',
        'c-sru',
        'c-udd',
        'c-sri',
        'c-val',
        'c-yog',
      ].includes(whatdb) ? (
        <div className='sel-ch sel'>
          <label htmlFor=''>Select Chapters</label>
          <select
            value={cSel1V}
            onChange={e => setSel1V(parseInt(e.target.value))}>
            <option value={0} defaultChecked>
              select
            </option>
            {Array.from({length: chV}, (_, index) => (
              <option id={chcode[index]} key={index + 1} value={index + 1}>
                {`${index + 1} - ${chcode[index]}`}
              </option>
            ))}
          </select>
        </div>
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
              onChange={e => setSel2V(parseInt(e.target.value))}>
              <option value={0} defaultChecked={true}>
                Select
              </option>
              {Array.from({length: 4}, (_, index) => (
                <option id={qucode[index]} key={index + 1} value={index + 1}>
                  {`${index + 1} - ${qucode[index]}`}
                </option>
              ))}
            </select>
          </div>
          {cSel2V && mode == 0 ? (
            <ShlokasOptions
              preSel={cSel2V}
              cSelSV={cSel3V}
              setSelSV={setSel3V}
              shcode={shcode}
              type='Sutra'
              shlokasLen={shlokasLen}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      {whatdb === 'c-ash' && cSel1V ? (
        <>
          {cSel1V && mode == 0 ? (
            <ShlokasOptions
              preSel={cSel1V}
              cSelSV={cSel3V}
              setSelSV={setSel3V}
              shcode={shcode}
              type='Shloka'
              shlokasLen={shlokasLen}
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
