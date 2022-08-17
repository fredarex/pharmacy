import { doctorsTypes } from "./doctors.types";

const INITIAL_STATE = {
    doctors:[],
    currentDoctor: null
}

const doctorsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case doctorsTypes.SET_DOCTORS_INFO_START:
            return {
                ...state,
                doctors: action.payload
            }
        case doctorsTypes.SET_DOCTOR_INFO_START:
           return {
            ...state,
            currentDoctor: action.payload
           }
        case doctorsTypes.UPDATE_DOCTOR_INFO_START:
            return {
                ...state,
                currentDoctor: action.payload
            }

        default:
            return state;
    }
}

export default doctorsReducer;