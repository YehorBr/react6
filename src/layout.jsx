import { NavLink, Outlet } from "react-router-dom"

export const Layout = () =>{
    return<>
     <header>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/movies'>To Movies</NavLink></li>
        </ul>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>
        <p>footer</p>
    </footer>
    </>
}