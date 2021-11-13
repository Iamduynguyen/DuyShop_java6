import { isAuthenticated } from ".";
import { Route, Redirect } from "react-router-dom";
const AdminRoute = (props) => {
  return (
    <Route
      render={() =>
        isAuthenticated() && isAuthenticated().id == 1 ? (
          props.children
        ) : (
          <Redirect
            to={{
              pathname: "/signin"
            }}
          />
        )
      }
    />
  );
};
export default AdminRoute;
