import React from "react";
import { withRouter } from "react-router-dom";

import { Menu } from "semantic-ui-react";

class HeaderPreLogin extends React.Component {
  state = { activeItem: "" };

  handleRoutes = route => {
    this.setState({ activeItem: route });
    this.props.history.push(`/${route}`);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img
            alt="company logo"
            src="https://react.semantic-ui.com/logo.png"
          />
        </Menu.Item>

        <Menu.Item
          name="features"
          active={activeItem === "features"}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>
        <Menu.Item
          name="about-us"
          active={activeItem === "about-us"}
          onClick={this.handleItemClick}
        >
          About US
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={() => this.handleRoutes("login")}
          >
            Login
          </Menu.Item>
          <Menu.Item
            name="register"
            active={activeItem === "register"}
            onClick={() => this.handleRoutes("register")}
          >
            Sign Up
          </Menu.Item>
          <Menu.Item
            name="help"
            active={activeItem === "help"}
            onClick={this.handleItemClick}
          >
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(HeaderPreLogin);

// export default HeaderPreLogin;
