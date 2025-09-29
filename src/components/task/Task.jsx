import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTasks, switchTasks } from "../../redux/TaskSlice";

export const Task = ({ task }) => {

  const dispatch = useDispatch()

  const onDeleteTask = () =>{

    dispatch(deleteTasks(task.id))
  }

  const onSwitch = () =>{
    dispatch(switchTasks(task.id))
  }


  return (
    <div className={css.wrapper}>
      <input onChange={onSwitch}
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={onDeleteTask} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
