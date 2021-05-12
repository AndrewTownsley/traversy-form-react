import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';


export class UserForm extends Component {
  // These will be the different Input fields... 
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  //Function to  proceed to the next step (next page of form)
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }
  // Go back to previous step...
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  // Handle fields change...
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    // Pull the step out of state... using destructuring.
      const { step } = this.state;
      const { firstName, lastName, email, occupation, city, bio } = this.state;
      const values = { firstName, lastName, email, occupation, city, bio }
    
      switch(step) {
        case 1: 
          return(
            <FormUserDetails 
              nextStep = {this.nextStep}
              handleChange = {this.handleChange}
              values = {values}
            />
          )
          case 2: 
            return <h1>FormPersonalDetails</h1>
          case 3: 
            return <h1>Confirm</h1>
          case 4:
            return <h1>Success</h1>
      }
  }
}

export default UserForm;
