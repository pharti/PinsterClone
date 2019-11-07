import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "./promise";
import array from "./array";
import whitelist from "./whitelist";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';
import appReducer from "../reducers/";
const persistConfig = {
  whitelist,
  key: "root",
  storage: AsyncStorage
};

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(...middlewares, ...[thunk, promise, array])
);
export const persistor = persistStore(store);
