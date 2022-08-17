import {takeEvery,put, all, call, takeLatest} from 'redux-saga/effects';
import { auth } from '../../firebase/utils';
import { fetchProductsStart, setProducts,setProduct } from './products.actions';
import { handleAddProduct, handleDeleteProduct, handleFetchProducts,handleFetchProduct } from './products.helpers';
import productsTypes from './products.types';

export function* addproduct({payload}) {
    try {
        const timestamp = new Date();
        yield handleAddProduct({
            ...payload,
            productAminUserUID: auth.currentUser.uid,
            createdDate: timestamp

        });
        yield put(
            fetchProductsStart()
        );
    } catch (err) {

    }
}


export function* onAddProductStart () {
    yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START,addproduct)
}

export function* fetchProducts({payload}) {
    try {
        const products = yield handleFetchProducts(payload);
        yield put(setProducts(products));
    } catch (err) {

    }
}

export function* onFetchProductsStart() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({payload}) {
    try {
        yield handleDeleteProduct(payload);
        yield put(fetchProductsStart());
    }catch (err) {
        console.log(err);
    }
}

export function* onDeleteProductStart() {
    yield takeLatest(productsTypes.DELETE_PRODUCT_START,deleteProduct);
}

export function* fetchProduct({payload}) {
    try {
      const product =  yield handleFetchProduct(payload);
      yield put(
        setProduct(product)
      )
    } catch (err) {
        //cos
    }
}

export function* onFetchProductStart() {
    yield takeLatest(productsTypes.FETCH_PRODUCT_START,fetchProduct);
}


export function* productsSaga () {
    yield all([
            call(onAddProductStart),
            call(onFetchProductsStart),
            call(onDeleteProductStart),
            call(onFetchProductStart)
        ]
        );
}