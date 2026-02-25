import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks } from "./operation";
import { addTask } from "./operation";
import { deleteTask } from "./operation";
import { switchTask } from "./operation";

export const initialState = {
  tasks:[],
  isLoading: false,
  isError: false,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  // reducers: {
  //   addTasks(state, action) {
        
  //   },
  //   deleteTasks(state, action) {
  //     return state.filter((task) => task.id !== action.payload)

  //       // state.splice(state.findIndex((task) => task.id !== action.payload), 1)
  //   },

  //   switchTasks(state, action) {
  //     return state.map((task) =>
  //         task.id === action.payload ? { ...task, completed: !task.completed }: task
  //       )
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getAllTasks.pending, (state, action) => {
      state.isLoading = true
    }),
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.isLoading = false
      state.tasks = action.payload
    }),
        builder.addCase(getAllTasks.rejected, (state, action) => {
      state.isError = true
    }),

    // ADD

    builder.addCase(addTask.pending, (state, action) => {
      state.isLoading = true
    }),
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.isLoading = false
      state.tasks.push(action.payload);
    }),
        builder.addCase(addTask.rejected, (state, action) => {
      state.isError = true
    });

     // DELETE

    builder.addCase(deleteTask.pending, (state, action) => {
      state.isLoading = true
    }),
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.isLoading = false
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
    }),
        builder.addCase(deleteTask.rejected, (state, action) => {
      state.isError = true
    });

    // SWITCH

    builder.addCase(switchTask.pending, (state, action) => {
      state.isLoading = true
    }),
    builder.addCase(switchTask.fulfilled, (state, action) => {
      state.isLoading = false
      state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: !task.completed }: task
        )
    }),
        builder.addCase(switchTask.rejected, (state, action) => {
      state.isError = true
    });
    
  }});

export const taskReducer = taskSlice.reducer



