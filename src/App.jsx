import { TaskForm } from "./components/TaskForm/taskForm";
import { TaskList } from "./components/taskList/taskList";
import { StatusFilter } from "./components/StatusFilter/StatusFilter";
import { PersistGate } from "redux-persist/integration/react";

export const App = () => {

  

  return <>
      <h1>Redux</h1>
      <TaskList/>
      <TaskForm/>
      <StatusFilter/>
  </>
};
