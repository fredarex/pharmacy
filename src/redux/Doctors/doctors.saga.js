import {takeEvery,put,takeLatest,all,call} from 'redux-saga/effects'
import { auth } from '../../firebase/utils';
import { getDoctorStart, setDoctorsStart, setDoctorStart } from './doctors.action';
import { handleEnrollDoctor, handleFetchDoctor, handleFetchDoctors, handleUpdateDoctor } from './doctors.helper';
import { doctorsTypes } from './doctors.types';

export function* fetchDoctors() {
    try {
        const doctors = yield handleFetchDoctors();
        console.log(doctors);
        yield put(setDoctorsStart(doctors));
    }catch(err) {
        console.log(err);
    }
   
}

export function* enrollDoctor({payload}) {
    try {
        yield handleEnrollDoctor(payload);
    }catch(err) {
        console.log(err);
    }
}
export function* getDoctorInfo({payload}) {
    try {
        console.log(payload);
       const doctor = yield handleFetchDoctor(payload);
       yield put(setDoctorStart(doctor));
    }catch(err) {
        console.log(err);
    }
}   

export function* updateDoctorInfo({payload}) {
    try {
        const id = auth.currentUser.uid;
        const doctor = yield handleUpdateDoctor(id,payload);
        yield put(getDoctorStart(id));
    }catch(err) {
        console.log(err);
    }
}

export function* onFetchDoctorsStart() {
    yield takeLatest(doctorsTypes.FETCH_DOCTORS_INFO_START,fetchDoctors);
} 
export function* onGetDoctorStart() {
    yield takeLatest(doctorsTypes.GET_DOCTOR_INFO_START,getDoctorInfo);
}

export function* onUpdateDoctorStart() {
    yield takeLatest(doctorsTypes.UPDATE_DOCTOR_INFO_START,updateDoctorInfo)
}

export function* onEnrollDoctorStart() {
    yield takeLatest(doctorsTypes.ADD_DOCTOR_INFO_START,enrollDoctor);
}
export function* doctorsSaga () {
    yield all([
        call(onFetchDoctorsStart),
        call(onEnrollDoctorStart),
        call(onGetDoctorStart),
        call(onUpdateDoctorStart)
    ]);
}