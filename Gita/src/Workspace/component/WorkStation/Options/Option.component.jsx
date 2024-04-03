import {OptionPropTypes} from '../../../../Function/PropTypes';
import ShlokasOptions from './Shlokas.Options.component';

const OptionComponent = ({
  cSel1V,
  chV,
  cSel3V,
  cSel2V,
  mode,
  setSel1V,
  setSel3V,
  setSel2V,
  shlokasLen,
  whatdb,
}) => {
  return (
    <>
      {chV &&
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
              <option key={index + 1} value={index + 1}>
                {`${index + 1} - Chapter`}
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
              setSelSV={setSel3V}
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
          {mode == 0 ? (
            <ShlokasOptions
              preSel={cSel1V}
              cSelSV={cSel2V}
              setSelSV={setSel2V}
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
