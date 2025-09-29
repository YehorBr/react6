import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { filterTasks } from "../../redux/FilterSlice";
import { statusFilter } from "../../redux/statusFilter";

export const StatusFilter = () => {

  const dispatch = useDispatch()

  return (
    <div className={css.wrapper}>
      <Button onClick={()=>{dispatch(filterTasks(statusFilter.all))}}>All</Button>
      <Button onClick={()=>{dispatch(filterTasks(statusFilter.active))}}>Active</Button>
      <Button onClick={()=>{dispatch(filterTasks(statusFilter.completed))}}>Completed</Button>
    </div>  
  );
};
