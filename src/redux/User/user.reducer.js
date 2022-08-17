import userTypes from "./user.type";

const INITIAL_STATE = {
    currentUser: null,
    AuthLoading: false
};

const userReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SIGN_IN_SUCCESS: 
            return {
                ...state,
                currentUser: action.payload
            }
        
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
            }
        case userTypes.SET_LOADING: 
            return {
                ...state,
                AuthLoading: action.payload
            }
        
        default:
            return state;
    }
}

export default userReducer
