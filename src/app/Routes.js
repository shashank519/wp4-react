import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// import Prelogin from "./pre-login";
import Postlogin from "./post-login";
import PreLoginRoutes from "./pre-login/Routes";
// import { Button } from "semantic-ui-react";
// import HeaderPreLogin from "Utils/header-prelogin";

class BaseRoutes extends Component {
  constructor(props) {
    super(props);

    this.isUserLoggedIn = false;
  }

  render() {
    return (
      <Switch>
        {this.isUserLoggedIn ? (
          <Route path="/" component={Postlogin} />
        ) : (
          <Route path="/" component={PreLoginRoutes} />
        )}
      </Switch>
    );
  }
}

export default BaseRoutes;
