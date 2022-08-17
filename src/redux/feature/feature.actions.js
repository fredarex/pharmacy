import { FeatureTypes } from "./feature.types"

export const HeaderColor = () => {
    return (dispatch) => {
        dispatch({
            type: FeatureTypes.changeHeaderColor
        });
    }
}

export const setAuthModal = (payload) => {
    return (dispatch) => {
        dispatch({
            type: FeatureTypes.SET_AUTH_MODAL,
            payload
        })
    }
}

export const setCursorType = (payload) => {
    return (dispatch) => {
        dispatch({
            type: FeatureTypes.CURSOR_TYPE,
            payload
        })
    }
}

