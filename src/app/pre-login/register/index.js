import React, { Component } from "react";
import PreLoginContainer from "Components/pre-login-container";
import { Card, Icon, Form, Button } from "semantic-ui-react";
import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      age: ""
    };
  }

  handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { name, email, password, age } = this.state;
    console.log(name, age, password, email);
  };

  render() {
    return (
      <PreLoginContainer style={{ top: "50%", left: "35%", width: "500px" }}>
        <Card className="pre-login-reg-card" style={{ width: "100%" }}>
          <Form className="pl-reg-form" onSubmit={this.handleSubmit}>
            <Form.Field required>
              <label>Name</label>
              <input
                placeholder="Name"
                name="name"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Email</label>
              <input
                placeholder="Name"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <input
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Age</label>
              <input
                placeholder="Age"
                type="number"
                name="age"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type="submit" primary>
              Register
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

export default Register;
