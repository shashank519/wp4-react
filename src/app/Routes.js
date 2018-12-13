import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// import Postlogin from "./post-login";
import PostloginRoutes from "./post-login/Routes";
import PreLoginRoutes from "./pre-login/Routes";

class BaseRoutes extends Component {
  constructor(props) {
    super(props);

    this.isUserLoggedIn = true;
  }

  render() {
    return (
      <Switch>
        {this.isUserLoggedIn ? (
          <Route path="/" component={PostloginRoutes} />
        ) : (
          <Route path="/" component={PreLoginRoutes} />
        )}
      </Switch>
    );
  }
}

export default BaseRoutes;
