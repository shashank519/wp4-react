import React, { Component } from "react";
import "./PreLoginContainer.scss";

class PreLoginContainer extends Component {
  render() {
    return (
      <div className="pre-login-cont">
        <div className="first-panel" />
        <div className="second-panel" style={this.props.style}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PreLoginContainer;
