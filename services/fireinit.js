import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

let config = {
  apiKey: 'AIzaSyDbtT1B2NmKOT7gX8XFe09DrLQIcqnLYXE',
  authDomain: 'bz-blends.firebaseapp.com',
  projectId: 'bz-blends',
  storageBucket: 'bz-blends.appspot.com',
  messagingSenderId: '400006022886',
  appId: '1:400006022886:web:698be2eee450a2b0269d27',
  measurementId: 'G-FG8YXMS6QL'
}


!firebase.apps.length ? firebase.initializeApp(config) : '';
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
