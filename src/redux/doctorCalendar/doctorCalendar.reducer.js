import { doctorCalendarTypes } from "./doctorCalendar.types"

const INITIAL_STATE = {
    timeSlots:[],
    DateOnLeave:[]
}

const doctorCalendarReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case doctorCalendarTypes.SET_TIME_SLOTS:
            return {
                ...state,
                timeSlots: [
                    ...state.timeSlots,
                    action.payload
                ]
            }
        case doctorCalendarTypes.DELETE_TIME_SLOTS:
            return {
                ...state,
                timeSlots: state.timeSlots.filter((timeslot,index) => timeslot.time !== action.payload)
            }
        case doctorCalendarTypes.SET_DATE_ON_LEAVE:
            return {
                ...state,
                DateOnLeave: [
                    ...state.DateOnLeave,
                    action.payload
                ]
            }
        case doctorCalendarTypes.DELETE_DATE_ON_LEAVE:
            return {
                ...state,
                DateOnLeave: state.DateOnLeave.filter((date,index) => date !== action.payload)
            }
        default:
            return state;
    }
}

export default doctorCalendarReducer;