import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddle from 'redux-saga';
import {persistStore} from 'redux-persist';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddle();
const middleware = [sagaMiddleware,thunk,logger];
 
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
   );

sagaMiddleware.run(rootSaga);  
export const persistor = persistStore(store);

export default {
    store,
    persistor
};