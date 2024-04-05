import {useState, useEffect} from 'react';
import {authStage} from '../../Function/auth/auth';

const WorkspaceFun = () => {
  const [userEmail, setUserEmail] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  useEffect(() => {
    authStage({
      setUserEmail: setUserEmail,
      setEmailVerified: setEmailVerified,
    });
  }, []);
  useEffect(() => {
    document.title = 'WorkSpace | Gita';
    return () => {
      document.title = 'WorkSpace | Gita';
    };
  }, []);
  return {
    userEmail,
    emailVerified,
  };
};
export default WorkspaceFun;
