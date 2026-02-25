import { Task } from "../Task/task";
import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { visibleTasks } from "../../redux/selectors";

export const TaskList = () => {

  const filteredTasks = useSelector(visibleTasks);

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

