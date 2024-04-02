import {LoginPropTypes} from '../../../../Function/PropTypes';

const FormComponent = ({setEmail, setPassword, handleAuth}) => {
  return (
    <div className='auth'>
      <data>
        <div className='auth-input auth-email'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            onChange={_ => setEmail(_.target.value)}
            required
            id='email'
            autoComplete='username'
          />
        </div>
        <div className='auth-input auth-password'>
          <label htmlFor='password'>Passowrd</label>
          <input
            type='passowrd'
            onChange={_ => setPassword(_.target.value)}
            required
            id='password'
            autoComplete='current-password'
          />
        </div>
        <div className='auth-input auth-submit'>
          <button
            onClick={() => {
              handleAuth();
            }}>
            Login
          </button>
        </div>
      </data>
    </div>
  );
};

export default FormComponent;
FormComponent.propTypes = LoginPropTypes;
