import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


import Pass from "views/auth/pass.js";
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";



export default function Auth() {
  return (
    <>

          <Switch>
            <Route path="/auth/pass" exact component={Pass} />
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Redirect from="/auth" to="/auth/login" />
            <Redirect from="/" to="/auth/login" />
            <Redirect from="/auth/pass" to="/auth/pass" />
          </Switch>

    </>
  );
}
