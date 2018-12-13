import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

const HomeLazy = React.lazy(() => import("./Home"));

class PostLoginRoutes extends Component {
  render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={() => <HomeLazy />} />
          <Route path="/home" render={() => <HomeLazy />} />
        </Switch>
      </React.Suspense>
    );
  }
}

export default PostLoginRoutes;
