import { doctorsTypes } from "./doctors.types"

export const setDoctorsStart = (payload) => {
    return {
        type: doctorsTypes.SET_DOCTORS_INFO_START,
        payload
    }
}

export const fetchDoctorsStart = () => {
    return {
        type: doctorsTypes.FETCH_DOCTORS_INFO_START
    }
}

export const setDoctorStart = (payload) => {
    return {
        type: doctorsTypes.SET_DOCTOR_INFO_START,
        payload
    }
}


export const getDoctorStart = (doctorId) => {
    return {
        type: doctorsTypes.GET_DOCTOR_INFO_START,
        payload:doctorId
    }
}

export const AddDoctorStart = (doctor) => {
    return {
        type: doctorsTypes.ADD_DOCTOR_INFO_START,
        payload:doctor
    }
}



export const updateDoctorStart = (payload) => {
    return {
        type: doctorsTypes.UPDATE_DOCTOR_INFO_START,
        payload
    }
}


