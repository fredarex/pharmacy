import { collection, doc, getDocs, orderBy, query, setDoc, where } from "firebase/firestore";
import { firestoreDb } from "../../firebase/utils";


export const handleSaveOrder = (order) => {
    return new Promise((resolve,reject) => {
        setDoc(doc(firestoreDb, 'orders', `${Date.now()}`),order)
        .then(()=> {
            resolve();
        }).catch(err => {
            reject(err)
        });
    })
}

export const handleGetUserOrderHistory = uid => {
    return new Promise((resolve, reject) => {
        let ref = collection(firestoreDb, 'orders'); 
        ref = query(ref, where('orderUserID', '==', uid),orderBy('orderCreatedDate'));
        
        getDocs(ref)
        .then((snapshot) => {
            const data = [
                ...snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
            ];
        
            resolve({data});
        })
        .catch(err => {
            reject(err);
        })

    })
}