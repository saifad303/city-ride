import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function LoginRoute({ component: Component, ...rest }) {
  let { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Redirect to="/" /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}

export default LoginRoute;
