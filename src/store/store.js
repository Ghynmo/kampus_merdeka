import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import formSlice from "./formSlice";

const reducer = combineReducers({
    formdata : formSlice
})

const persistConfig = {
    key: "root",
    storage
}
const pReducer = persistReducer(persistConfig, reducer)

const store = configureStore({reducer: pReducer})
const persistor = persistStore(store)

export {store, persistor}