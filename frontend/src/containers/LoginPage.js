import React from "react";
import { Field, reduxForm, Form } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import customPassField from "../components/CustomPassField";
import { customField } from "../components/CustomPassField";
import Button from "@material-ui/core/Button";

let LoginPage = props => {
  const { handleSubmit, pristine, reset, submitting, errors } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ textAlign: "center" }}>
        <div>
          <Field component={customField} name="email" label="Email" />
        </div>
        <div>
          <Field
            placeholder="your password"
            component={customPassField}
            name="password"
            type="password"
          />
          {errors.email && (
            <div className="alert alert-danger">{errors.email}</div>
          )}
          {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )}
        </div>
        <div>
          <Button
            color="primary"
            variant="contained"
            disabled={pristine || submitting}
            type="submit"
          >
            Log in
          </Button>
          <Button
            color="primary"
            variant="contained"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </Button>
          <Link to="/signin">
            <Button color="secondary" variant="contained" type="button">
              I don't have an account
            </Button>
          </Link>
        </div>
      </div>
    </Form>
  );
};

const mapStateToProps = state => ({
  errors: state.errors
});

LoginPage = connect(mapStateToProps)(LoginPage);

export default reduxForm({
  form: "login"
})(LoginPage);
