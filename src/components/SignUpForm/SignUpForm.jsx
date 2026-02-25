import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { register } from "../../redux/authSlice";


export const SignUpForm = () =>{
    const user = useSelector(selectUser)

    const dispatch = useDispatch()
    
    const handleSubmit = (e) =>{
        e.preventDefault();



        const form = event.target;

        const newUser = {
            
            email: form.elements.email.value,
            login: form.elements.login.value,
            password:  form.elements.password.value,
            date: form.elements.date.value,
        }

        dispatch(register(newUser))

        form.reset()
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email"/>
            <label htmlFor="">login</label>
            <input type="text" name="login"/>
            <label htmlFor="">password</label>
            <input type="password" name="password"/>
            <input type="date"  name="date"/>
            <input type="checkbox" />
            <button>Sign Up</button>
        </form>
    </>
}