import { FeatureTypes } from "./feature.types";

const initialState = {
    headersColor: {
        detail:'',
        home:'',
        setColor: false
    },
    authModal: false,
    cursorType: false,
    cursorStyles: ["pointer", "hovered"]
}

export const featureReducer = (state=initialState,action) => {
    switch (action.type) {
        case FeatureTypes.changeHeaderColor:
            return {
                ...state,
                headersColor: {
                    detail:'#000',
                    home:'#fff',
                    setColor: true
                }
            }
        case FeatureTypes.SET_AUTH_MODAL:
            return {
                ...state,
                authModal: action.payload
            }
        case FeatureTypes.CURSOR_TYPE:
            return {
                ...state,
                cursorType: action.payload
            }    
        
    
        default:
            return state;
    }
}