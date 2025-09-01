import { initialState } from "./store"

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tasks/addTasks":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "tasks/deleteTasks":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "tasks/switchTask":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "filters/changeFilter":
      return { ...state, filters: { status: action.payload } };

    default:
      return state;
  }
};