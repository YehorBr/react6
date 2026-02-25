import { Navigate } from "react-router-dom";
import { selectIsLogged } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const PrivateRoute = ({element:Element, restrictedTo }) => {
  const isLogged = useSelector(selectIsLogged);

  return <>{isLogged ? <Element /> :<Navigate to={restrictedTo} />}</>;
};
