import React from "react";
import apiHandler from "../api/apiHandler";
import { withUser } from "../components/Auth/withUser";

import "../styles/global.css";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>My profile</h1>
        <h2>{this.props.context.user.firstName}</h2>
        <h3>{this.props.context.user.lastName}</h3>
        <p>{this.props.context.user.email}</p>
      </div>
    );
  }
}

export default withUser(Profile);
