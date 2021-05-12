import React, { Component } from 'react'


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep()
  }
  render() {
    const { values, handeChange} = this.props;
    return (
      <React.Fragment>
        <h2>Enter User Details</h2>
        <textarea placeholder="First Name"
          onChange = {handleChange('firstName')}
          defaultValue = {values.firstName}
        />
        <br/>
        <textarea placeholder="Last Name"
          onChange = {handleChange('lastName')}
          defaultValue = {values.firstName}
        />
        <br/>
        <textarea placeholder="Email"
          onChange = {handleChange('email')}
          defaultValue = {values.email}
        />
        <br/>
      </React.Fragment>
    )
  }
}

export default FormUserDetails
