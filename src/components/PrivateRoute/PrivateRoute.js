import { useContext, useState } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [user, setUser] = useContext(userContext);
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user?.displayName ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
