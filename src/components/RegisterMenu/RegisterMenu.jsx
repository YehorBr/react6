import { NavLink } from "react-router-dom"

export const RegisterMenu = ()=>{
    return<>
        <ul>
            <li><NavLink to={`/sign-up`}>Sign Up</NavLink></li>
            <li><NavLink to={`/sign-in`}>Sign In</NavLink></li>
        </ul>
    </>
}