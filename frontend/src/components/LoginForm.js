import React, { Component } from "react";
import { connect } from "react-redux";
import LoginPage from "../containers/LoginPage";
import { loginUser } from "../actions/LogActions";

class LoginForm extends Component {
  submit = values => {
    this.props.loginUser(values, this.props.history);
    console.log(this.props);
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Please login</h1>
        <LoginPage onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { loginUser }
)(LoginForm);
