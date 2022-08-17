import {all, call} from 'redux-saga/effects';
import { appointmentSaga } from './Appointment/appointment.saga';
import { doctorsSaga } from './Doctors/doctors.saga';
import { ordersSagas } from './Orders/orders.saga';
import { productsSaga } from './Products/products.sagas';
import userSagas from './User/user.sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(productsSaga),
        call(ordersSagas),
        call(doctorsSaga),
        call(appointmentSaga)
    ]);
}