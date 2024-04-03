import {ShlokasOptionPropTypes} from '../../../../Function/PropTypes';

const ShlokasOptions = ({preSel, cSelSV, setSelSV, type, shlokasLen}) => {
  return (
    <div className='sel-ch sel'>
      <label htmlFor=''>Select {type}</label>
      <select
        disabled={!preSel}
        value={cSelSV}
        onChange={e => setSelSV(parseInt(e.target.value))}>
        <option value={0} defaultChecked>
          select
        </option>
        {Array.from({length: shlokasLen}, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {`${index + 1} - ${type}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShlokasOptions;
ShlokasOptions.propTypes = ShlokasOptionPropTypes;
