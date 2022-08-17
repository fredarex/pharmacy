import { appointment_types } from "./appointment.types"

export const addAppointmentStart = (appointment) => {
    return {
        type:appointment_types.ADD_APPOINTMENT_START,
        payload:appointment
    }
}


export const fetchAppointmentsStarting = (filter) => {
    return {
        type:appointment_types.FETCH_APPOINTMENTS_START,
        payload:filter
    }
}

export const setAppointmentsStart = (appointments) => {
    return {
        type:appointment_types.SET_APPOINTMENTS_START,
        payload:appointments
    }
}

export const setAppointmentStart = (appointment) => {
    return (dispatch) => {
        dispatch({
            type:appointment_types.SET_APPOINTMENT_START,
            payload:appointment
        })
    }
}

export const showVideoModalStart = (payload) => {
    return (dispatch) => {
        dispatch({
            type: appointment_types.SHOW_VIDEO_MODAL,
            payload
        })
    }
}