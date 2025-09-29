import { getStatus, getTasks } from "../../redux/selectors";
import { Task } from "../Task/task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { statusFilter } from "../../redux/statusFilter";

const visibleTask = (tasks, status) =>{
    switch (status) {
      case statusFilter.active:
        return tasks.filter(task => !task.completed)

        case statusFilter.completed:
        return tasks.filter(task => task.completed)

      default:
        return tasks
    }
  }
  

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const status = useSelector(getStatus)

  const filteredTasks = visibleTask(tasks, status)

  return (
    <ul className={css.list}>
      {filteredTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

