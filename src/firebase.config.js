
import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCea4WSwLSQeNHKJISBFIxJDAdxAY2GUmk",
    authDomain: "restaurantapp-052426.firebaseapp.com",
    databaseURL: "https://restaurantapp-052426-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-052426",
    storageBucket: "restaurantapp-052426.appspot.com",
    messagingSenderId: "166906328253",
    appId: "1:166906328253:web:8440c9ea2da19b284ef3d4"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app , firestore, storage}