import {useState} from 'react';
import {LoginPropTypes} from '../../../../Function/PropTypes';
import Svgs from '../../../../componets/Svgs';

const FormComponent = ({setEmail, setPassword, handleAuth}) => {
  const [isHidePass, setIsHidePaass] = useState(false);
  return (
    <div className='auth'>
      <data>
        <form >
          <div className='auth-email'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              onChange={_ => setEmail(_.target.value)}
              required
              id='email'
              autoComplete='username'
            />
          </div>
          <div className='auth-password'>
            <label htmlFor='password'>Password</label>
            <div className='pass'>
              <input
                type={isHidePass ? 'text' : 'password'}
                onChange={_ => setPassword(_.target.value)}
                required
                id='password'
                autoComplete='current-password'
              />
              <div
                className='clear-button'
                onClick={() => setIsHidePaass(!isHidePass)}>
                {!isHidePass ? Svgs._svgShow() : Svgs._svgHide()}
              </div>
            </div>
          </div>
          <div className='auth-submit'>
            <button
              onClick={(e) => {
                e.preventDefault()
                handleAuth();
              }}>
              Login
            </button>
          </div>
        </form>
      </data>
    </div>
  );
};

export default FormComponent;
FormComponent.propTypes = LoginPropTypes;
