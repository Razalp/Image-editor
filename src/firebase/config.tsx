import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDV-zXODXxlOdUKvMq4VFjbAkr6YPU2HVQ",
  authDomain: "preset-app-81b99.firebaseapp.com",
  projectId: "preset-app-81b99",
  storageBucket: "preset-app-81b99.appspot.com",
  messagingSenderId: "818297117328",
  appId: "1:818297117328:web:1482b262c0050c940f1615",
  measurementId: "G-1E4900SQ62"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)
const auth =getAuth(app)
const provider=new GoogleAuthProvider();
export {auth,provider};