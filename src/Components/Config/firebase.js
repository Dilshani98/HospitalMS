import firebase from 'firebase/compat/app';
import firebaseAuth from 'firebase/auth';
import 'firebase/firestore';
import { GoogleAuthProvider,getAuth} from 'firebase/auth';
import config from './config'; 





export const Firebase = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);

export const Providers =  new GoogleAuthProvider();



export const auth = getAuth();



export default Firebase;