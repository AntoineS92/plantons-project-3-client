import React, { Component } from "react";
import apiHandler from "../../api/apiHandler";

import "../../styles/global.css";

class adminPlantsAdd extends Component {
  state = {
    name: "",
    famBotanique: "",
    nomLatin: "",
    image: "",
    type: [],
    tailleFoliaire: [],
    tailleRacine: [],
    preferences: {},
    periodeSemis: [],
    periodeRecolte: [],
    maladies: [],
    parasites: [],
  };

  inputFileRef = React.createRef();

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

    console.log(this.inputFileRef);

    const file = this.inputFileRef.current.files[0];
    const myFormData = new FormData();

    console.log("FILE",file)
    myFormData.append("image", file);
    myFormData.append("name", this.state.name);
    myFormData.append("famBotanique", this.state.famBotanique);
    myFormData.append("nomLatin", this.state.nomLatin);
    myFormData.append("type", this.state.type);
    myFormData.append("tailleFoliaire", this.state.tailleFoliaire);
    myFormData.append("tailleRacine", this.state.tailleRacine);
    myFormData.append("preferences", this.state.preferences);
    myFormData.append("periodeSemis", this.state.periodeSemis);
    myFormData.append("periodeRecolte", this.state.periodeRecolte);
    myFormData.append("maladies", this.state.maladies);
    myFormData.append("parasites", this.state.parasites);

    console.log("submitted!");
    

    apiHandler

      .createPlant(myFormData)
      // .createPlant(this.state)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="addPlantPage">
        <div className="container addPlantContainer">
          <form
            className="addPlantForm"
            encType="multipart/form-data"
            onChange={this.handleChange}
            onSubmit={this.handleSubmitAdd}
          >
            <div className="inputLabelAddPlant">
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="input"
                defaultValue={this.state.name}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="image" className="label">
                choose a picture
                <i className="icon fas fa-cloud-upload-alt fa-1x"></i>
              </label>
              <input
                className="is-hidden"
                type="file"
                id="image"
                name="image"
                ref={this.inputFileRef}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="famBotanique">famBotanique</label>
              <input
                type="text"
                name="famBotanique"
                id="famBotanique"
                className="input"
                defaultValue={this.state.famBotanique}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="nomLatin">nomLatin</label>
              <input
                type="text"
                name="nomLatin"
                id="nomLatin"
                className="input"
                defaultValue={this.state.nomLatin}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="type">type</label>
              <input
                type="text"
                name="type"
                id="type"
                className="input"
                defaultValue={this.state.type}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="tailleFoliaire">tailleFoliaire</label>
              <input
                type="text"
                name="tailleFoliaire"
                id="tailleFoliaire"
                className="input"
                defaultValue={this.state.tailleFoliaire}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="tailleRacine">tailleRacine</label>
              <input
                type="text"
                name="tailleRacine"
                id="tailleRacine"
                className="input"
                defaultValue={this.state.tailleRacine}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="preferences">preferences</label>
              <input
                type="text"
                name="preferences"
                id="preferences"
                className="input"
                defaultValue={this.state.preferences.sol}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="preferences">preferences soleil</label>
              <input
                type="text"
                name="preferences"
                id="preferences"
                className="input"
                defaultValue={this.state.preferences.soleil}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="periodeSemis">periodeSemis</label>
              <input
                type="text"
                name="periodeSemis"
                id="periodeSemis"
                className="input"
                defaultValue={this.state.periodeSemis}
              />
            </div>

            <div className="inputLabelAddPlant">
              <label htmlFor="periodeRecolte">periodeRecolte</label>
              <input
                type="text"
                name="periodeRecolte"
                id="periodeRecolte"
                className="input"
                defaultValue={this.state.periodeRecolte}
              />
            </div>

            <div className="inputLabelAddPlant">
              <label htmlFor="maladies">maladies</label>
              <input
                type="text"
                name="maladies"
                id="maladies"
                className="input"
                defaultValue={this.state.maladies}
              />
            </div>
            <div className="inputLabelAddPlant">
              <label htmlFor="parasites">parasites</label>
              <input
                type="text"
                name="parasites"
                id="parasites"
                className="input"
                defaultValue={this.state.parasites}
              />
            </div>

            <button>Ajouter une plante</button>
          </form>
        </div>
      </div>
    );
  }
}

export default adminPlantsAdd;
