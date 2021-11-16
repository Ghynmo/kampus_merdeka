import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import formSlice from "./formSlice";

const rootReducer = combineReducers({
    formdata : formSlice
})
const persistConfig = {
    key: "root",
    storage,
    whitelist: ['formdata']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default configureStore({
//     reducer: {
//         formdata : formSlice
//     }
// })
const store = configureStore({reducer: persistedReducer})
const persistor = persistStore(store)

export {store, persistor}