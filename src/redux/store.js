import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./TaskSlice";
import { filterReducer } from "./FilterSlice";
import { authReducer } from "./authSlice";


const reducers = combineReducers({
  tasks: taskReducer,
  filters: filterReducer,
  authentication: authReducer,
})


export const store = configureStore({
  reducer:  reducers,
});
