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
  const renderShlokasOptions = (preSel, cSelSV, type, handleChange) => {
    return (
      <ShlokasOptions
        preSel={preSel === undefined ? undefined : preSel}
        cSelSV={cSelSV}
        type={type}
        shlokasLen={shlokasLen}
        handleChange={handleChange}
      />
    );
  };

  const renderSeletedOptions = (label, value, handleChange, options) => {
    return (
      <div className='sel-ch sel'>
        <label htmlFor=''>{label}</label>
        <select
          name=''
          id=''
          value={value}
          onChange={e => handleChange(parseInt(e.target.value))}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderTypesOptions = (label, value, handleChange, options) => {
    return (
      <div className='sel-ch sel'>
        <label htmlFor=''>{label}</label>
        <select
          name=''
          id=''
          value={value}
          onChange={e => handleChange(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderChapterOptions = () => {
    if (
      !chV &&
      ![
        'c-bra',
        'c-ash',
        'c-ava',
        'c-kap',
        'c-sru',
        'c-udd',
        'c-sri',
        'c-yog',
      ].includes(whatdb)
    ) {
      return null;
    }

    return renderSeletedOptions('Select Chapters', cSel1V, handleChange1, [
      {value: 0, label: 'Select'},
      ...Array.from({length: chV}, (_, index) => ({
        value: index + 1,
        label: `${index + 1} Chapter`,
      })),
    ]);
  };
  return (
    <>
      {renderChapterOptions()}

      {whatdb === 'c-ash' && cSel1V && mode === 0
        ? renderShlokasOptions(cSel1V, cSel2V, 'Shloka', handleChange2a)
        : null}

      {whatdb === 'c-ava' && cSel1V && mode === 0
        ? renderShlokasOptions(cSel1V, cSel2V, 'Shloka', handleChange2a)
        : null}

      {/* For Bhamasutra */}
      {whatdb === 'c-bra' && cSel1V
        ? renderSeletedOptions('Select Quarters', cSel2V, handleChange2a, [
            {value: 0, label: 'Select'},
            ...Array.from({length: 4}, (_, index) => ({
              value: index + 1,
              label: `${index + 1} - Quarter`,
            })),
          ])
        : null}
      {whatdb === 'c-bra' && cSel2V && mode == 0
        ? renderShlokasOptions(cSel2V, cSel3V, 'Sutra', handleChange3a)
        : null}

      {whatdb === 'c-kap' && cSel1V && mode === 0
        ? renderShlokasOptions(cSel1V, cSel2V, 'Shloka', handleChange2a)
        : null}

      {whatdb === 's-sri' && mode === 0
        ? renderShlokasOptions(undefined, cSel1V, 'Sutra', handleChange1a)
        : null}

      {whatdb === 'c-sri' && cSel1V && mode == 0
        ? renderShlokasOptions(cSel1V, cSel2V, 'Shloka', handleChange2a)
        : null}

      {whatdb === 'c-sru' && cSel1V && mode == 0
        ? renderShlokasOptions(cSel1V, cSel2V, 'Shloka', handleChange2a)
        : null}

      {whatdb === 'c-udd' && cSel1V && mode === 0
        ? renderShlokasOptions(cSel1V, cSel2V, 'Shloka', handleChange2a)
        : null}

      {whatdb === 's-vib' && mode === 0
        ? renderShlokasOptions(undefined, cSel1V, 'Sutra', handleChange1a)
        : null}

      {/* For Yogasutar */}
      {whatdb === 'c-yog' && cSel1V
        ? renderTypesOptions('Select Types', SutTypes, handleChange2b, [
            {value: '', label: 'Select'},
            {value: 'Bhashya', label: 'Bhashyas'},
            {value: 'Sutra', label: 'Sutras'},
            {value: 'Vritti', label: 'Bhojavrttis'},
          ])
        : null}
      {whatdb === 'c-yog' && mode == 0 && SutTypes
        ? renderShlokasOptions(SutTypes, cSel3V, 'Shloka', handleChange3a)
        : null}

      {/* For Valmikiramayana */}
      {whatdb === 'c-val'
        ? renderTypesOptions('Select Kandas', KandaTypes, handleChange1b, [
            {
              value: '',
              label: 'Select',
            },
            {
              value: 'ARANYAKANDA',
              label: 'ARANYAKANDA',
            },
            {
              value: 'AYODHYAKANDA',
              label: 'AYODHYAKANDA',
            },
            {
              value: 'BALAKANDA',
              label: 'BALAKANDA',
            },
          ])
        : null}
      {whatdb === 'c-val' && KandaTypes
        ? renderSeletedOptions('Select Sargas', cSel2V, handleChange2a, [
            {value: 0, label: 'Select'},
            ...Array.from({length: SargaLen}, (_, index) => ({
              value: index + 1,
              label: `${index + 1}  - Sarga`,
            })),
          ])
        : null}
      {whatdb === 'c-val' && mode == 0 && cSel2V
        ? renderShlokasOptions(cSel2V, cSel3V, 'Shloka', handleChange3b)
        : null}
    </>
  );
};
export default OptionComponent;
OptionComponent.propTypes = OptionPropTypes;
