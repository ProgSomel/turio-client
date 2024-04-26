import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwR9lAfGpmiZbmTkBQ0pJEm5CZcGVjpJo",
  authDomain: "turio-4ebb1.firebaseapp.com",
  projectId: "turio-4ebb1",
  storageBucket: "turio-4ebb1.appspot.com",
  messagingSenderId: "234463698519",
  appId: "1:234463698519:web:dcdd605dabc5b70f154d12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
