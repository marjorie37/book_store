import React, { Component } from "react";
import { connect } from "react-redux";
import SigninPage from "../containers/SigninPage";
import { registerUser } from "../actions/LogActions";

class SigninForm extends Component {
  submit = values => {
    this.props.registerUser(values, this.props.history);
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Please enter your details</h1>
        <SigninPage onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(
  null,
  { registerUser }
  // les crochets remplacent "mapdispatchtoprops"
)(SigninForm);
