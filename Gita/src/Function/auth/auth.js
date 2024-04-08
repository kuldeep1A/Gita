import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const auth = getAuth();
export const handleSignIn = async (email, passowrd) => {
  await signInWithEmailAndPassword(auth, email, passowrd).catch(error => {
    if (error.code == 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(error.message);
    }
    console.error('error: ', error);
  });
  if (auth.currentUser) {
    window.location.href =
      import.meta.env.MODE === 'production'
        ? 'https://gitas.web.app/workspace'
        : 'http://localhost:9999/workspace';
  }
};

export const handleSignOut = async ({setLogedIn}) => {
  if (auth.currentUser) {
    await signOut(auth);
    setLogedIn && setLogedIn(false);
    if (!setLogedIn) {
      window.location.href =
        import.meta.env.MODE === 'production'
          ? 'https://gitas.web.app/workspace'
          : 'http://localhost:9999/workspace';
    }
  }
};

export const authStage = ({setUserEmail, setEmailVerified, setLogedIn}) => {
  onAuthStateChanged(auth, function (user) {
    if (user) {
      setUserEmail && setUserEmail(user.email);
      setEmailVerified && setEmailVerified(user.emailVerified);
      setLogedIn && setLogedIn(true);
    } else {
      setLogedIn && setLogedIn(false);
    }
  });
};
onAuthStateChanged(auth, function () {});

export const _getAuth = () =>
  new Promise(resolve => {
    onAuthStateChanged(auth, user => {
      resolve(!!user);
    });
  });
