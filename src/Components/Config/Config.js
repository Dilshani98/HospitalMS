import { initializeApp } from "firebase/app";
import { getFirestore} from '@firebase/firestore';

const config = {
  apiKey: "AIzaSyAIGdjdDBZHD4n6ErekUfFS45Dr9_zztpQ",
  authDomain: "hospital-management-syst-13f31.firebaseapp.com",
  projectId: "hospital-management-syst-13f31",
  storageBucket: "hospital-management-syst-13f31.appspot.com",
  messagingSenderId: "150325786446",
  appId: "1:150325786446:web:b33a08173b7513bb9ad01f",
  measurementId: "G-3N42M9T4KZ"
    }
    
const app = initializeApp(config);

export const db = getFirestore(app);
