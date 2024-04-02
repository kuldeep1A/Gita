import {LoginComponent} from './component/Login.component';
import {LoginFunc} from './component/Login.fun';

const Login = () => {
  const {
    UTN,
    setEmail,
    setPassword,
    handleAuth,
    displayName,
    userEmail,
    emailVerified,
    photoURL,
    logedIn,
    handleOut,
  } = LoginFunc();
  return (
    <LoginComponent
      UTN={UTN}
      setEmail={setEmail}
      setPassword={setPassword}
      handleAuth={handleAuth}
      displayName={displayName}
      userEmail={userEmail}
      emailVerified={emailVerified}
      photoURL={photoURL}
      logedIn={logedIn}
      handleOut={handleOut}
    />
  );
};
export default Login;
