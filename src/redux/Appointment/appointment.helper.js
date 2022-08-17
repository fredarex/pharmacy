import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"
import { firestoreDb } from "../../firebase/utils"

export const handleAddAppointment = async(appointment) => {
    return new Promise((resolve,reject) => {
        setDoc(doc(firestoreDb,'appointments',`${Date.now()}`),appointment)
        .then(() => {
            resolve();
        }).catch(err => {
            reject(err);
        })
    })
}

export const handleFetchAppointments = async(key,value) => {
    return new Promise((resolve, reject) => {
        const currentDate = new Date().getTime();
        let appointmentsRef = collection(firestoreDb,'appointments');
        appointmentsRef = query(appointmentsRef, where(`${key}`,'==',value), where('date','>=',currentDate));

        getDocs(appointmentsRef)
        .then((snapshot) => {
            const appointmentsArray = snapshot.docs.map(doc => {
                return {
                    ...doc.data()
                }
            });
            resolve(appointmentsArray);
        })
        .catch((err) => {
            reject(err);
        })
    })
}