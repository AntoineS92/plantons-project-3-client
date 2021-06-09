import React from "react";
// import axios from "axios";
import VeggiesList from "../components/VeggiesList";

import "../styles/global.css";

class Home extends React.Component {

  render() {
    return (
      <div className="bodyBackground">
        <div className="plantsList"><VeggiesList/></div>
      </div>
    );
  }
}

export default Home;
