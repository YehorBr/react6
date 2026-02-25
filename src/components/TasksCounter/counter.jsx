import { useSelector } from "react-redux"
import { taskCounter } from "../../redux/selectors"

export const Counter = () =>{
    
    const quantity = useSelector(taskCounter)
    console.log(quantity);

    return <>
    <ul>
        <li>
            <p>All: {quantity.all}</p>
        </li>
        <li>
            <p>Completed: {quantity.completed}</p>
        </li>
        <li>
            <p>Active: {quantity.active}</p>
        </li>
    </ul>
    </>
}