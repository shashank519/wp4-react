import React, { Component } from "react";
import PreLoginContainer from "Components/pre-login-container";
import { Form, Input, Tooltip, Icon, Button, Card } from "antd";
import "./Register.scss";

const FormItem = Form.Item;

class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
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
      <PreLoginContainer style={{ top: "15%", left: "35%", width: "500px" }}>
        <Card
          title="Register"
          className="pre-login-reg-card"
          style={{ width: "100%" }}
        >
          <Form className="pl-reg-form" onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="Username">
              {getFieldDecorator("userName", {
                rules: [
                  {
                    required: true,
                    message: "Please input your username!",
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </FormItem>
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
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator("nickname", {
                rules: [
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <Button style={{ marginLeft: "5px" }}>Reset Form</Button>
            </FormItem>
          </Form>
        </Card>
      </PreLoginContainer>
    );
  }
}

const RegisterForm = Form.create()(Register);

export default RegisterForm;
