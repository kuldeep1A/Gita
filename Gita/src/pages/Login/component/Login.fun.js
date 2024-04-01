import {useEffect, useState} from 'react';
import {authUtils} from '../../../Function/auth/utils';
export const LoginFunc = () => {
  const [UTN, _setUTN] = useState(false);
  useEffect(() => {
    document.title = 'Login | Gita';
    authUtils({_setUTN});
    return () => {
      document.title = 'Login | Gita';
    };
  }, []);
  return {
    UTN,
  };
};
