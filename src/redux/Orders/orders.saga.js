import ordersTypes from "./orders.types";
import {takeLatest, put, all, call} from 'redux-saga/effects';
import { handleGetUserOrderHistory, handleSaveOrder } from "./orders.helper";
import { auth } from "../../firebase/utils";
import { clearCart } from "../Cart/cart.actions";
import { setUserOrderHistory } from "./orders.action";


export function* getUserOrderHistory({payload}){
    try {
        const history = yield handleGetUserOrderHistory(payload);
        yield put(
            setUserOrderHistory(history)
        );
    }catch (err) {
        console.log(err);
    }
}

export function* onGetUserOrderHistoryStart() {
    yield takeLatest(ordersTypes.GET_USER_ORDER_HISTORY_START,getUserOrderHistory);
}

export function* saveOrder({payload}) {
    try {
        const timestamps = new Date().toDateString();
        yield handleSaveOrder({
            ...payload,
            orderUserID: auth.currentUser.uid,
            orderCreatedDate: timestamps
        });
        yield put(
            clearCart()
        )
    }catch (err) {

    }
};


export function* onSaveOrderHistoryStart() {
    yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START,saveOrder);
}

export function* ordersSagas() {
    yield all([
        call(onSaveOrderHistoryStart),
        call(onGetUserOrderHistoryStart)
    ])
}