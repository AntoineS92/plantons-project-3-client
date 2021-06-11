import React from "react";
// import axios from "axios";
import VeggiesList from "../components/VeggiesList";
import ConnectionPage from "../components/ConnectionPage"
import { withUser } from "../components/Auth/withUser";

import "../styles/global.css";

class Home extends React.Component {
  render() {
    if (this.props.context.isLoggedIn) {
      return (
        <div className="bodyBackground">
          <div className="plantsList">
            <VeggiesList />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <ConnectionPage />
        </div>
      );
    }
  }
}

export default withUser(Home);
