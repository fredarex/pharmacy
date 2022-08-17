import {initializeApp} from 'firebase/app';
import {getFirestore,doc, getDoc, setDoc} from  'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {firebaseConfig} from './config';

export const firebaseApp = initializeApp(firebaseConfig);

//export const auth = firebase.auth();
export const firestoreDb = getFirestore(firebaseApp);
export let auth = getAuth();


export const handleUserProfile = async ({userAuth, additionalData}) => {
   if (!userAuth) return;
   const { uid } = userAuth;
   const userRef = doc(firestoreDb,'users',uid);
   const snapshot = await getDoc(userRef);

   if(!snapshot.exists()) {
      const {displayName, email} = userAuth;
      const timestamp = new Date();
      const userRoles = ['user'];
      
      //const collectionRef = collection(firestoreDb,"users");
      try {
        await setDoc(doc(firestoreDb,"users",uid),{
               displayName,
               email,
               createdDate: timestamp,
               userRoles,
               ...additionalData
         });
      } catch (err) {
         console.log(err);
      }
   }
   return userRef;
}


export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
         unsubscribe();
         resolve(userAuth);
      }, reject);
   })
}