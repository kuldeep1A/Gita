import { useState } from 'react'
import { LoginPropTypes } from '../../../../Function/PropTypes'
import Svgs from '../../../../componets/Svgs'

const FormComponent = ({ handleAuth }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isHidePass, setIsHidePaass] = useState(false)
  const handleForm = event => {
    event.preventDefault()
    handleAuth(email, password)
  }
  return (
    <div className='auth'>
      <data>
        <form onSubmit={handleForm}>
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
              <div className='clear-button' onClick={() => setIsHidePaass(!isHidePass)}>
                {!isHidePass ? Svgs._svgShow() : Svgs._svgHide()}
              </div>
            </div>
          </div>
          <div className='auth-submit'>
            <button type='submit'>Login</button>
          </div>
        </form>
      </data>
    </div>
  )
}

export default FormComponent
FormComponent.propTypes = LoginPropTypes
