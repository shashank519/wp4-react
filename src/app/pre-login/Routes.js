import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import PreLoginHeader from "Components/header-prelogin";
import FooterPrelogin from "Components/footer-prelogin";

const LoginLazy = React.lazy(() => import("./login"));
const RegisterLazy = React.lazy(() => import("./register"));

class PreLoginRoutes extends Component {
  render() {
    return (
      <div>
        <PreLoginHeader />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" render={() => <LoginLazy />} />
            <Route path="/login" render={() => <LoginLazy />} />
            <Route path="/register" render={() => <RegisterLazy />} />
          </Switch>
        </React.Suspense>
        <FooterPrelogin />
      </div>
    );
  }
}

export default PreLoginRoutes;
