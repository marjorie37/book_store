import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import LoginForm from "../components/LoginForm";
import SigninForm from "../components/SigninForm";
import FetchBooksDetails from "../containers/FetchBooksDetails";
import MyAccount from "./MyAccount";
import store from "../store";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { setCurrentUser, logoutUser } from "../actions/LogActions";
import jwt_decode from "jwt-decode";
import setAuthToken from "../setAuthToken";
import MuiTheme from "../theme/MuiTheme";
import Navbar from "../containers/Navbar";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  console.log("dec", decoded);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  }
}

const Root = ({ store }) => (
  <div>
    <MuiThemeProvider theme={MuiTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {/* needs a div to wrap the navbar and the route switching */}
            <Navbar />
            <Switch>
              <Route path="/" exact component={App} />
              <Route path="/details/:id" component={FetchBooksDetails} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signin" component={SigninForm} />
              <Route path="/myaccount" component={MyAccount} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  </div>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
