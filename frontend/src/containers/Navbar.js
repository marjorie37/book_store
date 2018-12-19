import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { logoutUser } from "../actions/LogActions";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogout(e) {
    e.preventDefault();
    console.log("y", this.props);
    this.props.logoutUser(this.props.history);
  }
  render() {
    const { isAuthenticated, user } = this.props.log;
    console.log(isAuthenticated);
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {isAuthenticated && (
              <div>
                <h3>Welcome {user.name}</h3>
                <Link to="/">
                  <Button color="secondary" variant="contained">
                    Back to homepage
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    onClick={e => this.handleLogout(e)}
                    color="secondary"
                    variant="contained"
                  >
                    Logout
                  </Button>
                </Link>
              </div>
            )}
            {!isAuthenticated && (
              <div>
                <Link to="/login">
                  <Button color="secondary" variant="contained">
                    Login
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button color="secondary" variant="contained">
                    Sign in
                  </Button>
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  log: state.log
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navbar));
