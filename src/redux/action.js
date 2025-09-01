export const addTasks = (newTask) => {
  return {
    type: "tasks/addTasks",
    payload: newTask,
  };
};

export const deleteTasks = (taskId) => {
  return {
    type: "tasks/deleteTasks",
    payload: taskId,
  };
};

export const switchTask = (taskId) => {
  return {
    type: "tasks/switchTask",
    payload: taskId,
  };
};

export const filter = (statusFilter) =>{
    return {
        type : "filters/changeFilter",
        payload: statusFilter,
    }
}