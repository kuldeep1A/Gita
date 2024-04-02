import {useEffect, useState} from 'react';
import {authUtils} from '../../../Function/auth/utils';
import {
  authStage,
  handleSignIn,
  handleSignOut,
} from '../../../Function/auth/auth';
export const LoginFunc = () => {
  const [UTN, _setUTN] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [photoURL, setPhotoURL] = useState('');
  const [logedIn, setLogedIn] = useState(false);

  const handleAuth = async () => {
    if (UTN) {
      await handleSignIn(email, password);
      if (logedIn) {
        window.open('https://gitas.web.app/gitasWorkspace');
      }
    }
  };
  const handleOut = async () => {
    if (UTN) {
      await handleSignOut(setLogedIn);
      if (!logedIn) {
        window.location.href = 'https://gitas.web.app/login';
      }
    }
  };
  useEffect(() => {
    if (UTN) {
      authStage({
        setDisplayName,
        setUserEmail,
        setEmailVerified,
        setPhotoURL,
        setLogedIn,
      });
    }
  }, [UTN]);

  useEffect(() => {
    document.title = 'Login | Gita';
    authUtils({_setUTN});
    return () => {
      document.title = 'Login | Gita';
    };
  }, []);
  return {
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
  };
};
