import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from "react-bootstrap";

const validate = values => {
  const errors = {}
  if(!values.name) 
    errors.name = "Required";
  
  return errors;
}

const renderInput = ({ input, label, type, meta: { touched, error, warning } }) => (
  <FormGroup controlId="formInlineName" validationState={touched && error ? "error" : null}>
    <ControlLabel>{label}</ControlLabel>{' '}
    <FormControl {...input} placeholder={label} type={type} bsClass="form-control custom-input--width"/>
    <HelpBlock>{touched && ((error && <span>{error}</span>))}</HelpBlock>
  </FormGroup>
)

class PlayerForm extends Component {
  render() {
    let { handleSubmit, btnText, isSubmitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" type="text" component={renderInput} label="Name" />
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save"}</Button>
      </form>
    )
  }
}

PlayerForm = reduxForm({
  form: "player",
  validate
})(PlayerForm)

export default PlayerForm;