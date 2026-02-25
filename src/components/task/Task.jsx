import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/operation";
import { switchTask } from "../../redux/operation";


export const Task = ({ task }) => {

  const dispatch = useDispatch()

  const onDeleteTask = () =>{

    dispatch(deleteTask(task))
  }

  const onSwitch = () =>{
    dispatch(switchTask(task))
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
