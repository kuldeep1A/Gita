import {initializeApp} from 'firebase/app';
import {initializeFirestore, memoryLocalCache} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASEURL,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
export const database = initializeFirestore(app, {
  experimentalLongPollingOptions: true,
  localCache: memoryLocalCache(),
  useFetchStreams: false,
});