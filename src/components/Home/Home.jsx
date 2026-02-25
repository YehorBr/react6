import { selectIsLogged } from "../../redux/selectors"
import { useSelector } from "react-redux";
import { UserMenu } from "../UserMenu/UserMenu";
import { RegisterMenu } from "../RegisterMenu/RegisterMenu";

export const Home = () =>{
    const isLogged = useSelector(selectIsLogged)

    return<>
        <h1>Welcome</h1>
    </> 
}