import { collection, deleteDoc, doc, getDocs, setDoc,getDoc, where, query } from "firebase/firestore"
import { firestoreDb } from "../../firebase/utils"

export const handleAddProduct = (product) => {
    return new Promise((resolve,reject) => {
        setDoc(doc(firestoreDb, 'products', `${Date.now()}`),product)
        .then(()=> {
            resolve();
        }).catch(err => {
            reject(err)
        });
        // collection(firestoreDb,'products')
        // .doc()
        // .set(product)
        // .then(() => {
        //     resolve();
        // })
        // .catch(err => {
        //     reject(err);
        // });
    })
};

export const handleFetchProducts = ({filter}) => {
    return new Promise((resolve, reject) => {
        let ref = collection(firestoreDb, 'products');
        if (filter) ref = query(ref, where('productName', 'not-in', filter));

        getDocs(ref)
        .then((snapshot) => {
            const productsArray = snapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    documentID: doc.id
                }
            });
            resolve(productsArray);
        })
        .catch(err => {
            reject(err);
        })
    })
}

export const handleDeleteProduct = (documentID) => {
    return new Promise((resolve,reject) => {
        const docToUpdate = doc(firestoreDb, "products",documentID);
        deleteDoc(docToUpdate)
        .then(() => {
            resolve();
        })
        .catch((err) => {
            reject(err);
        });
    })
}

export const handleFetchProduct = productID => {
    return new Promise((resolve, reject) => {
        const docRef = doc(firestoreDb, 'products',productID);
        getDoc(docRef)
        .then((snapshot) => {
            if(snapshot.exists) {
                resolve(
                    {
                        documentID:productID,
                        ...snapshot.data()
                    }
                    
                );
            }
        }).
        catch((err) => {
            reject(err);
        })

    })
}