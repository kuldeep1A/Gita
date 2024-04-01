import {LoginComponent} from './component/Login.component';
import {LoginFunc} from './component/Login.fun';

const Login = () => {
  const {UTN} = LoginFunc();
  return <LoginComponent UTN={UTN} />;
};
export default Login;
