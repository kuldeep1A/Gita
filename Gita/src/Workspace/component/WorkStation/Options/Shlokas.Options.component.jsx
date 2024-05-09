import { ShlokasOptionPropTypes } from '../../../../Function/PropTypes'

const ShlokasOptions = ({ preSel, cSelSV, type, shlokasLen, handleChange }) => {
  return (
    <div className='sel-ch sel'>
      <label htmlFor=''>Select {type}</label>
      <select
        disabled={preSel === undefined ? false : !preSel}
        value={cSelSV}
        onChange={e => handleChange(parseInt(e.target.value))}>
        <option value={0} defaultChecked>
          select
        </option>
        {Array.from({ length: shlokasLen }, (_, index) => (
          <option key={index + 1} value={index + 1}>
            {`${index + 1} - ${type}`}
          </option>
        ))}
      </select>
    </div>
  )
}

export { ShlokasOptions }
ShlokasOptions.propTypes = ShlokasOptionPropTypes
