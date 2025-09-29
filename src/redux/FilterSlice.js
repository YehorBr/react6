import { createSlice } from "@reduxjs/toolkit";
import { statusFilter } from "./statusFilter";

const initialState = {
   status: statusFilter.all, 
}

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        filterTasks(state, action){
            state.status = action.payload
        }
    }

})

export const filterReducer = filterSlice.reducer
export const {filterTasks} = filterSlice.actions

