import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/global.css";

class ConnectionPage extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    return (
      <div className="bodyBackground">
        <div className="connectionContainer">
          <h1>Connectez vous pour continuer.</h1>
          <div className="formContainer">
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <div className="labelInput">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="labelInput">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <button>Se connecter</button>
            </form>
          </div>
          <hr />
          <div className="noAccount">
            <h2>Vous n'avez pas encore de compte ?</h2>
            <React.Fragment>
              <NavLink to="/signup">S'inscire</NavLink>
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(ConnectionPage);
