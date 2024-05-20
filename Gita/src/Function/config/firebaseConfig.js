import { initializeApp } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'
import { _dkjkj1, _dkjkj2, _dkjkj3, _dkjkj4, _dkjkj5, _dkjkj6, _dkjkj7 } from '../../DATA/vne'
const firebaseConfig = {
  apiKey: window.atob(_dkjkj1),
  authDomain: _dkjkj2,
  projectId: _dkjkj3,
  storageBucket: _dkjkj4,
  messagingSenderId: window.atob(_dkjkj5),
  appId: window.atob(_dkjkj6),
  measurementId: _dkjkj7,
}
const app = initializeApp(firebaseConfig)
export const database = initializeFirestore(app, {
  experimentalLongPollingOptions: true,
  useFetchStreams: false,
})
