import {useEffect, useState} from 'react';
import {authUtils} from '../../../Function/auth/utils';
import {authStage, handleSignIn} from '../../../Function/auth/auth';
export const LoginFunc = () => {
  const [UTN, _setUTN] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logedIn, setLogedIn] = useState(false);
  const [jkd, setJkd] = useState('');

  const handleAuth = async event => {
    event.preventDefault();
    if (UTN && /^[^@]+@gmail\.com$/i.test(email) && password.length > 14) {
      await handleSignIn(email, password);
    } else {
      alert('Password Lenght must be 14 Above. And Must have Google Email.');
    }
  };
  useEffect(() => {
    if (UTN) {
      authStage({
        setLogedIn,
      });
    }
  }, [UTN]);

  useEffect(() => {
    document.title = 'Login | Gita';
    authUtils({_setUTN, setJkd});
    return () => {
      document.title = 'Login | Gita';
    };
  }, []);

  return {
    UTN,
    setEmail,
    setPassword,
    handleAuth,
    logedIn,
    jkd,
  };
};
