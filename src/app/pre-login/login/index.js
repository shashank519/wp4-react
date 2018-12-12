import React, { Component } from "react";
import PreLoginContainer from "Components/pre-login-container";
import { withRouter } from "react-router-dom";

import { Form, Input, Checkbox, Button, Card } from "antd";

import "./Login.scss";

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleRoutes = route => {
    this.props.history.push(`/${route}`);
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <PreLoginContainer style={{ left: "38%", top: "15%" }}>
        <Card title="Login" className="pre-login-card">
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="E-mail">
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Password">
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Please input your password!"
                  }
                ]
              })(<Input type="password" />)}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator("agreement", {
                valuePropName: "checked"
              })(<Checkbox>Remember Me</Checkbox>)}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Button
                style={{ marginLeft: "5px" }}
                onClick={() => this.handleRoutes("register")}
              >
                Register Now
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PreLoginContainer>
    );
  }
}

const LoginForm = Form.create()(Login);
export default withRouter(LoginForm);
