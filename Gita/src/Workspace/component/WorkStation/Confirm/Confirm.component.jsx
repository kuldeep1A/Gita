import {ConfrimPropTypes} from '../../../../Function/PropTypes';

const ConfirmComponent = ({handleConfirm, confirm, changeData, update}) => {
  return (
    <dialog className='confirm-modal' open={confirm}>
      <div className='modal-box '>
        <div className='c'>
          <div className='top'>
            <div className='close'>
              <button
                className='clear-button'
                style={{width: '30px', height: '30px'}}
                onClick={handleConfirm}>
                ✕
              </button>
            </div>
            <div className='change-note'>
              <span>Confrim What you Change!</span>
            </div>
          </div>
          <div className='dd'>
            <dd className='changedata'>{changeData}</dd>
          </div>
          <div>
            <div className=''>
              <button className='px-5' onClick={() => update()}>
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
export default ConfirmComponent;
ConfirmComponent.propTypes = ConfrimPropTypes;
