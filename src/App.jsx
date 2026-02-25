import { TaskList } from "./components/taskList/taskList";
import { StatusFilter } from "./components/StatusFilter/StatusFilter";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTasks } from "./redux/operation";
import { TaskForm } from "./components/taskForm/TaskForm";
import { Counter } from "./components/TasksCounter/counter";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";


export const App = () => {
    const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllTasks())
  },[dispatch])

  return <>
    <RouterProvider router={router}/>

      {/* <h1>Redux</h1>
      <Counter/>

      <TaskList/> 
      <TaskForm/>
      <StatusFilter/> */}
  </>
};
