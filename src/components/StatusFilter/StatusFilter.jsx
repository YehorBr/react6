import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { filter } from "../../redux/action";
import { statusFilter } from "../../redux/statusFilter";

export const StatusFilter = () => {

  const dispatch = useDispatch()

  return (
    <div className={css.wrapper}>
      <Button onClick={()=>{dispatch(filter(statusFilter.all))}}>All</Button>
      <Button onClick={()=>{dispatch(filter(statusFilter.active))}}>Active</Button>
      <Button onClick={()=>{dispatch(filter(statusFilter.completed))}}>Completed</Button>
    </div>  
  );
};
