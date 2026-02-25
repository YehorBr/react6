import { Counter } from "../TasksCounter/counter"
import { StatusFilter } from "../StatusFilter/StatusFilter"
import { TaskForm } from "../taskForm/TaskForm"
import { TaskList } from "../taskList/taskList"



export const TaskPage = () =>{
    return<>
      <Counter/>

      <TaskList/> 
      <TaskForm/>
      <StatusFilter/>
    </>
}