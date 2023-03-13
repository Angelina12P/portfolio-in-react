import React, { Component } from "react";
import "./formStyle.css";

class Form extends Component {
  state = {
    Name: "",
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
      alert(`Thank you for your message, ${this.state.Name}!`);
      this.setState({
        Name: "",
        email: "",
        message: "",
        errors: {}
      });
    }
  };

  validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!this.state.Name) {
      errors.Name = "Please enter your name.";
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
          <label htmlFor="Name">Name</label>
          <input
            value={this.state.nameName}
            name="Name"
            id="Name"
            placeholder="Enter your name"
            onChange={this.handleInputChange}
            type="text"
          />
          {errors.Name && <span className="error">{errors.Name}</span>}
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


