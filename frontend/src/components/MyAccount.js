import React, { Component } from "react";
import { connect } from "react-redux";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user } = this.props.log;
    return (
      <div>
        <h1>My account</h1>
        <ul>
          <li>your name : {user.name}</li>
          <li>your email : {user.email}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps)(MyAccount);
