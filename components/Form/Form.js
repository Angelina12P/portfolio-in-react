import React, { Component } from "react";
import "./formStyle.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    errors: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.validateForm()) {
      alert(`Thank you for your message, ${this.state.firstName} ${this.state.lastName}!`);
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        errors: {}
      });
    }
  };

  validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!this.state.firstName) {
      errors.firstName = "Please enter your first name.";
      isValid = false;
    }

    if (!this.state.lastName) {
      errors.lastName = "Please enter your last name.";
      isValid = false;
    }

    if (!this.state.email) {
      errors.email = "Please enter your email address.";
      isValid = false;
    }

    if (!this.state.message) {
      errors.message = "Please enter a message.";
      isValid = false;
    }

    this.setState({
      errors: errors
    });

    return isValid;
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            value={this.state.firstName}
            name="firstName"
            id="firstName"
            onChange={this.handleInputChange}
            type="text"
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
          <label htmlFor="lastName">Last Name</label>
          <input
            value={this.state.lastName}
            name="lastName"
            id="lastName"
            onChange={this.handleInputChange}
            type="text"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
          <label htmlFor="email">Email</label>
          <input
            value={this.state.email}
            name="email"
            id="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Enter your email"
            className={errors.email ? "error" : null}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <label htmlFor="message">Message</label>
          <textarea
            value={this.state.message}
            name="message"
            id="message"
            onChange={this.handleInputChange}
            placeholder="Enter your message"
          />
          {errors.message && <span className="error">{errors.message}</span>}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;


