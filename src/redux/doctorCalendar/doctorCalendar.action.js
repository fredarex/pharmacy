import { doctorCalendarTypes } from "./doctorCalendar.types"

export const setTimeSlotsStart = (time) => {
    return (dispatch) => {
        dispatch({
            type: doctorCalendarTypes.SET_TIME_SLOTS,
            payload: time
        })
    }
}

export const deleteTimeSlots = (time) => {
    return (dispatch) => {
        dispatch({
            type: doctorCalendarTypes.DELETE_TIME_SLOTS,
            payload:time
        })
    }
}

export const setDateOnLeave = (date) => {
    return (dispatch) => {
        dispatch({
            type: doctorCalendarTypes.SET_DATE_ON_LEAVE,
            payload: date
        })
    }
}

export const deleteDateOnLeave = (date) => {
    return (dispatch) => {
        dispatch({
            type: doctorCalendarTypes.DELETE_DATE_ON_LEAVE,
            payload:date
        })
    }
}




