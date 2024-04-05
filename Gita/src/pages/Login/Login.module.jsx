import {LoginComponent} from './component/Login.component';
import {LoginFunc} from './component/Login.fun';

const Login = () => {
  const {UTN, setEmail, setPassword, handleAuth, logedIn} = LoginFunc();
  return (
    <LoginComponent
      UTN={UTN}
      setEmail={setEmail}
      setPassword={setPassword}
      handleAuth={handleAuth}
      logedIn={logedIn}
    />
  );
};
export default Login;
