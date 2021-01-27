import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArPxIn9EWxKBIzb5ci9E_QpVfDSoE9M5E",
    authDomain: "crwn-db-cd229.firebaseapp.com",
    databaseURL: "https://crwn-db-cd229.firebaseio.com",
    projectId: "crwn-db-cd229",
    storageBucket: "crwn-db-cd229.appspot.com",
    messagingSenderId: "722570151197",
    appId: "1:722570151197:web:75fba9d43b969e97e64df4",
    measurementId: "G-J9FYQGM8ZG"
  };

  export const createUserProfileDocument = async(userAuth, additionData) => {
    if(!userAuth) {
      return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set(
          {
            displayName,
            email,
            createdAt,
            ...additionData
          }
        )
      }catch(error){
        console.log('error creating user',error.message)
      }
    }

  return userRef;
  } 

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle  = () => auth.signInWithPopup(provider);

  export default firebase;