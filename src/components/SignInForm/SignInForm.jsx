import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { logIn } from "../../redux/authSlice";


export const SignInForm = () => {
    const user = useSelector(selectUser)

    const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = event.target;

     const user = {
            login: form.elements.login.value,
            password:  form.elements.password.value,
        }


    dispatch(logIn(user))

    form.reset() 
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">login</label>
        <input type="text" name="login"/>
        <label htmlFor="">password</label>
        <input type="password" name="password"/>
        <button>Sign In</button>
      </form>
    </>
  );
};
