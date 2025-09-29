import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./TaskSlice";
import { filterReducer } from "./FilterSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {
  FLUSH, PAUSE,
  PERSIST,   PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist';



const persistConfig = {
  key: "root",
  storage,
}

const reducers = combineReducers({
  tasks: taskReducer,
  filters: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer:  persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
});

export const persistor = persistStore(store)