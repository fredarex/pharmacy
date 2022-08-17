import { combineReducers } from "redux";
import cartReducer from "./Cart/cart.reducer";
import { featureReducer } from "./feature/feature.reducer";
import productsReducer from "./Products/products.reducer";
import userReducer from "./User/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ordersReducer from "./Orders/orders.reducer";
import doctorsReducer from "./Doctors/doctors.reducer";
import doctorCalendarReducer from "./doctorCalendar/doctorCalendar.reducer";
import appointmentReducer from "./Appointment/appointment.reducer";

export const reducers = combineReducers({
    user: userReducer,
    features: featureReducer,
    products: productsReducer,
    cart: cartReducer,
    orders:ordersReducer,
    doctors:doctorsReducer,
    doctorCalendar:doctorCalendarReducer,
    appointments:appointmentReducer
});

const configStorage = {
    key: 'root',
    storage,
    whitelist: ['cart','doctorCalendar']
}

export default persistReducer(configStorage,reducers);