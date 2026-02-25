import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/authSlice";


export const UserMenu = () =>{
    const dispatch = useDispatch()

    return <>
        <ul>
            <li><Link to={`/tasks`}>Sign Up</Link></li>
            <li><button onClick={()=>{dispatch(logOut())}} type="button">Sign Out</button></li>
        </ul>
    </>
}