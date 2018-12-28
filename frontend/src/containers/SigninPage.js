import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, Form } from "redux-form";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import customPassField from "../components/CustomPassField";
import { customField } from "../components/CustomPassField";

let SigninPage = ({ handleSubmit, pristine, reset, submitting, errors }) => (
  <Form onSubmit={handleSubmit}>
    <div style={{ textAlign: "center" }}>
      <div>
        <Field label="Your name" component={customField} name="name" />
      </div>
      <div>
        <Field component={customField} name="email" label="Email" />
      </div>
      <div>
        <Field
          component={customPassField}
          name="password"
          label="Password"
          type="password"
        />
      </div>
      <div>
        <Field
          component={customPassField}
          name="passwordconf"
          label="Password"
          type="password"
        />
      </div>
      {errors.name && <div className="alert alert-danger">{errors.name}</div>}
      {errors.email && <div className="alert alert-danger">{errors.email}</div>}
      {errors.password && (
        <div className="alert alert-danger">{errors.password}</div>
      )}
      {errors.passwordconf && (
        <div className="alert alert-danger">conf {errors.passwordconf}</div>
      )}
      <div>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={pristine || submitting}
        >
          Sign in
        </Button>
        <Button
          color="primary"
          variant="contained"
          type="button"
          disabled={pristine}
          onClick={reset}
        >
          Clear Values
        </Button>
        <Link to="/login">
          <Button color="secondary" variant="contained" type="button">
            I have an account
          </Button>
        </Link>
      </div>
    </div>
  </Form>
);

const mapStateToProps = state => ({
  errors: state.errors
});

SigninPage = connect(mapStateToProps)(SigninPage);

export default reduxForm({
  form: "signin"
})(SigninPage);
