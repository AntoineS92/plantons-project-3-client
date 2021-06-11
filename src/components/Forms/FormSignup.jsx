import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";

class FormSignup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.props.context.setUser(data.newUserDocument);
        <Redirect to="/" />;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div class="connectionContainer signUpContainer">
        <form class="signUpForm" onSubmit={this.handleSubmit}>
          <div className="inputLabel">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="inputLabel">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div className="inputLabel">
            <label htmlFor="firstName">firstName</label>
            <input
              onChange={this.handleChange}
              value={this.state.firstName}
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="inputLabel">
            <label htmlFor="lastName">lastName</label>
            <input
              onChange={this.handleChange}
              value={this.state.lastName}
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
          <button className="signUpButton">S'inscrire</button>
        </form>
      </div>
    );
  }
}

export default withRouter(withUser(FormSignup));
