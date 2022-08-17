import {takeLatest,all,call,put} from 'redux-saga/effects';
import { setAppointmentsStart } from './appointment.action';
import { handleAddAppointment, handleFetchAppointments } from './appointment.helper';
import { appointment_types } from './appointment.types';


export function* addAppointmentStart({payload}) {
    try{
        yield handleAddAppointment(payload);
    }catch(err) {
        console.log(err);
    }
}

export function* fetchAppointmentsStart({payload}) {
    try {
    const appointments =  yield handleFetchAppointments(payload.key,payload.value);
    yield put(setAppointmentsStart(appointments));
    }catch(err) {
        console.log(err);
    }
}

export function* onAddAppointmentStart() {
    yield takeLatest(appointment_types.ADD_APPOINTMENT_START,addAppointmentStart);
}

export function* onFetchAppointmentsStart(){
    yield takeLatest(appointment_types.FETCH_APPOINTMENTS_START,fetchAppointmentsStart)
}

export function* appointmentSaga() {
    yield  all([
        call(onAddAppointmentStart),
        call(onFetchAppointmentsStart)
    ])
}