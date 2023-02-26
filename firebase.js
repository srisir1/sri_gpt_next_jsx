import { getFirestore } from 'firebase/firestore';
import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: "charming-sky-374610",
          storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId:process.env.FIREBASE_MESSAGE_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase

const app = getApps().length ? getApps() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };