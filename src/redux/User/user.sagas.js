import {takeLatest, call, all, put, takeEvery} from 'redux-saga/effects';
import userTypes from './user.type';
import { loader, setLoading, siginOutUserSuccess, signInSuccess } from './user.actions';
import { auth, handleUserProfile,getCurrentUser } from '../../firebase/utils';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDoc, onSnapshot } from 'firebase/firestore';

export function* getSnapshotFromUserAuth(user,additionalData={}) {
    try {
        const userRef = yield call(handleUserProfile, {userAuth: user, additionalData});
        const snapshot = yield getDoc(userRef)
        yield put(signInSuccess({
            id: snapshot.id,
            ...snapshot.data()
        }));
    }catch(err) {

    }
}



export function* emailSignIn({payload: {displayName,email,password}}) {
    try {
        const {user} = yield signInWithEmailAndPassword(auth, email, password);
        user.displayName = displayName;
        const additionalData = { displayName };
        console.log(user);
        yield getSnapshotFromUserAuth(user,additionalData);
        yield put(loader(false));
        
    } catch (err) {
        console.log(err);
        yield put(loader(false));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser(); 
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch (err) {

    }
}


export function* onEmailSignInStart() {
    yield takeEvery(userTypes.EMAIL_SIGN_IN_START,emailSignIn);
}


export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
    try {
        yield signOut(auth);
        yield put(siginOutUserSuccess());
    }catch(err) {
        console.log(err);
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START,signOutUser);
}

export function* onsetLoading({payload}) {
    yield put(setLoading(payload));
}

export function* onSetLoadingStart() {
    yield takeLatest(userTypes.LOADING,onsetLoading)
}

 export default function* userSagas() {
    yield all([
        call(onEmailSignInStart), 
        call(onCheckUserSession),  
        call(onSignOutUserStart),
        call(onSetLoadingStart)
    ]);
}



