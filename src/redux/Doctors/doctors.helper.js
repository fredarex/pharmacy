import { collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { auth, firestoreDb } from "../../firebase/utils"
import { currentUser } from "../User/user.selector";

export const handleEnrollDoctor = async(doctor)=> {
    const uid = auth.currentUser.uid;
    const doctorRef = doc(firestoreDb,'doctors',uid);
    const snapshot = await getDoc(doctorRef);
    if(!snapshot.exists()) {
        return new Promise((resolve,reject) => {
                setDoc(doc(firestoreDb,'doctors',`${uid}`),doctor)
                .then(() => {
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                })  
        })
    };
    return;
}

export const handleFetchDoctor = (doctorId) => {
    return new Promise((resolve,reject) => {
        const doctorRef = doc(firestoreDb, 'doctors',doctorId);
        getDoc(doctorRef)
        .then((snapshot) => {
            if(snapshot.exists) {
                resolve({
                    doctorID: doctorId,
                    ...snapshot.data()
                });
            }
        })
        .catch((err) => {
            reject(err);
        })

    })
}


export const handleUpdateDoctor = (doctorId,doctorData) => {
    return new Promise((resolve,reject) => {
        const doctorRef = doc(firestoreDb, 'doctors', doctorId);
        updateDoc(doctorRef,doctorData);
    })
}

export const handleFetchDoctors = () => {
    return new Promise((resolve, reject) => {
    let doctorsRef = collection(firestoreDb,'doctors');
    getDocs(doctorsRef)
    .then((snapshot) => {
        const doctorsArray = snapshot.docs.map(doc => {
            return {
                ...doc.data(),
            }
        });
        resolve(doctorsArray);
    })
    .catch(err => {
        reject(err);
    })
    })
}