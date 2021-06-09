import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";
import { Link } from "react-router-dom";

import "../../styles/global.css";

class adminPlantsAdd extends Component {
  state = {
    name: "",
    famBotanique: "",
    nomLatin: "",
    type: [],
    tailleFoliaire: [],
    tailleRacine: [],
    preferences: {},
    periodeSemis: [],
    periodeRecolte: [],
    maladies: [],
    parasites: [],
  };

  handleChange = (event) => {
    console.log("hello");
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      [key]: value,
    });
  };

  handleSubmitAdd = (event) => {
    event.preventDefault();

    console.log("submitted!");

    apiHandler
      .createPlant(this.state)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="container">
          <form onChange={this.handleChange} onSubmit={this.handleSubmitAdd}>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="input"
              defaultValue={this.state.name}
            />

            <label htmlFor="famBotanique">famBotanique</label>
            <input
              type="text"
              name="famBotanique"
              id="famBotanique"
              className="input"
              defaultValue={this.state.famBotanique}
            />

            <label htmlFor="nomLatin">nomLatin</label>
            <input
              type="text"
              name="nomLatin"
              id="nomLatin"
              className="input"
              defaultValue={this.state.nomLatin}
            />

            <label htmlFor="type">type</label>
            <input
              type="text"
              name="type"
              id="type"
              className="input"
              defaultValue={this.state.type}
            />

            <label htmlFor="tailleFoliaire">tailleFoliaire</label>
            <input
              type="text"
              name="tailleFoliaire"
              id="tailleFoliaire"
              className="input"
              defaultValue={this.state.tailleFoliaire}
            />

            <label htmlFor="tailleRacine">tailleRacine</label>
            <input
              type="text"
              name="tailleRacine"
              id="tailleRacine"
              className="input"
              defaultValue={this.state.tailleRacine}
            />

            <label htmlFor="preferences">preferences</label>
            <input
              type="text"
              name="preferences"
              id="preferences"
              className="input"
              defaultValue={this.state.preferences.sol}
            />
            <label htmlFor="preferences">preferences soleil</label>
            <input
              type="text"
              name="preferences"
              id="preferences"
              className="input"
              defaultValue={this.state.preferences.soleil}
            />

            <label htmlFor="periodeSemis">periodeSemis</label>
            <input
              type="text"
              name="periodeSemis"
              id="periodeSemis"
              className="input"
              defaultValue={this.state.periodeSemis}
            />

            <label htmlFor="periodeRecolte">periodeRecolte</label>
            <input
              type="text"
              name="periodeRecolte"
              id="periodeRecolte"
              className="input"
              defaultValue={this.state.periodeRecolte}
            />

            <label htmlFor="maladies">maladies</label>
            <input
              type="text"
              name="maladies"
              id="maladies"
              className="input"
              defaultValue={this.state.maladies}
            />

            <label htmlFor="parasites">parasites</label>
            <input
              type="text"
              name="parasites"
              id="parasites"
              className="input"
              defaultValue={this.state.parasites}
            />

            <button>Ajouter une plante</button>
          </form>
        </div>
      </div>
    );
  }
}

export default adminPlantsAdd;
