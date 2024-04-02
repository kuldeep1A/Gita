import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const auth = getAuth();
export const handleSignIn = async (email, passowrd) => {
  await signInWithEmailAndPassword(auth, email, passowrd).catch(error => {
    if (error.code == 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(error.message);
    }
    console.error('error: ', error);
  });
};

export const handleSignOut = async setLogedIn => {
  if (auth.currentUser) {
    await signOut(auth);
    setLogedIn(false);
  }
};

export const authStage = ({
  setDisplayName,
  setUserEmail,
  setEmailVerified,
  setPhotoURL,
  setLogedIn,
}) => {
  onAuthStateChanged(auth, function (user) {
    if (user) {
      setDisplayName(user.displayName);
      setUserEmail(user.email);
      setEmailVerified(user.emailVerified);
      setPhotoURL(user.photoURL);
      setLogedIn(true);
    } else {
      setLogedIn(false);
    }
  });
};
onAuthStateChanged(auth, function () {});
