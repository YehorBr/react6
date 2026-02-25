import { createSelector } from "@reduxjs/toolkit";
import { statusFilter } from "./statusFilter";

export const selectTasks = (state => state.tasks.tasks);
export const selectStatus = (state => state.filters.status)
export const selectUser = (state => state.authentication.user)
export const selectIsLogged = (state => state.authentication.isLogged)

export const visibleTasks = createSelector([selectTasks, selectStatus], (tasks, status) =>{
    switch (status) {
      case statusFilter.active:
        return tasks.filter(task => !task.completed)

        case statusFilter.completed:
        return tasks.filter(task => task.completed)

      default:
        return tasks
    }
  })

  export const taskCounter = createSelector([selectTasks],(tasks) =>{   
   return tasks.reduce((acc,task )=>{
        if(task.completed){
            acc.completed += 1
            acc.all+= 1
        }else{
            acc.active += 1
            acc.all+= 1
        }

        return acc
    },{
        completed: 0,
        active: 0,
        all: 0,
    })
  })