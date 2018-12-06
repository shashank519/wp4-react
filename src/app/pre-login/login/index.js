import React, { Component } from "react";
import PreLoginContainer from "Components/pre-login-container";
import { Card, Icon, Form, Button } from "semantic-ui-react";

import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", agreed: false };
  }

  handleChange = ({ target: { name, value, type, checked } }) => {
    let fldValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: fldValue });
  };

  handleSubmit = () => {
    const { email, password, agreed } = this.state;
    console.log(email, password, agreed);
  };

  render() {
    const { email, password, agreed } = this.state;
    return (
      <PreLoginContainer style={{ left: "40%", top: "50%" }}>
        <Card className="pre-login-card">
          <Form className="pl-form" onSubmit={this.handleSubmit}>
            <Form.Field required>
              <label>Username/E-mail</label>
              <input
                placeholder="Username/E-mail"
                name="email"
                onChange={this.handleChange}
                value={email}
              />
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={password}
              />
            </Form.Field>
            <Form.Field className="agreed-field" required>
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={agreed}
                onChange={this.handleChange}
              />
              <label htmlFor="agreed">
                I agree to the Terms and Conditions
              </label>
            </Form.Field>
            <Button type="submit" primary>
              Submit
            </Button>
            <Button>Forgot Password</Button>
          </Form>
          <Card.Content extra>
            <Icon name="user" />
            22 Friends
          </Card.Content>
        </Card>
      </PreLoginContainer>
    );
  }
}

export default Login;
