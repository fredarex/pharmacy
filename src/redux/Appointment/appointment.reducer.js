import { appointment_types } from "./appointment.types";

const INITIAL_STATE = {
    appointments:[],
    showVideoModal:false,
    appointment:{}
}


const appointmentReducer = (state =INITIAL_STATE, action) => {
    switch(action.type) {
        case appointment_types.SET_APPOINTMENTS_START:
            return {
                ...state,
                appointments: action.payload
            }
        case appointment_types.SHOW_VIDEO_MODAL:
            return {
                ...state,
                showVideoModal:action.payload
            }
        case appointment_types.SET_APPOINTMENT_START:
            return {
                ...state,
                appointment:action.payload
            }
        default:
            return state;
    }
}

export default appointmentReducer;