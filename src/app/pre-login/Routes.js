import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

const LoginLazy = React.lazy(() => import("./login"));
const RegisterLazy = React.lazy(() => import("./register"));

class PreLoginRoutes extends Component {
  render() {
    return (
      <div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" render={() => <LoginLazy />} />
            <Route path="/login" render={() => <LoginLazy />} />
            <Route path="/register" render={() => <RegisterLazy />} />
          </Switch>
        </React.Suspense>
      </div>
    );
  }
}

export default PreLoginRoutes;
