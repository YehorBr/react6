import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { selectIsLogged } from "./redux/selectors";
import { useSelector } from "react-redux";
import { RegisterMenu } from "./components/RegisterMenu/RegisterMenu";
import { UserMenu } from "./components/UserMenu/UserMenu";

export const Layout = () =>{
      const isLogged = useSelector(selectIsLogged);

    return<>
    <header>
         {isLogged ? <UserMenu/> : <RegisterMenu/>}
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>

    </footer>
    </>
}