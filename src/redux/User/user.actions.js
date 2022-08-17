import { signInWithEmailAndPassword } from "firebase/auth";
import userTypes from "./user.type";
import { auth } from "../../firebase/utils";

export const emailSignInStart = userCredentials => {
    return {
        type: userTypes.EMAIL_SIGN_IN_START,
        payload: userCredentials 
    }
};

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
});


export const signOutUserStart = () => ({
    type: userTypes.SIGN_OUT_USER_START
});

export const siginOutUserSuccess = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCESS
});

export const loader = (payload) => ({
    type: userTypes.LOADING,
    payload
})

export const setLoading = (payload) => {
    return  {
        type: userTypes.SET_LOADING,
        payload
    }
}


// export const setCurrentUser = (user) => ({
//     type: userTypes.SET_CURRENT_USER,
//     payload: user
// });

// export const signInUser = (email,password) => {
//     return async(dispatch) => {
//         try {
//             await signInWithEmailAndPassword(auth,email,password);
//             dispatch({
//                 type: userTypes.SIGN_IN_SUCCESS,
//                 payload: true
//             })
//         } catch (err) {

//         }
//     }
// }

