import React from "react";
import { withUser } from "../components/Auth/withUser";

import "../styles/global.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="profilePage">
          <h1>My profile</h1>
        <div className="profileContainer">
          <div className="profileInfo">
            <p id="firstName">{this.props.context.user.firstName}</p>
            <p id="lastName">{this.props.context.user.lastName}</p>
            <p id="email">{this.props.context.user.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(Profile);
