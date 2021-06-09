import React from "react";
import apiHandler from "../../api/apiHandler";
import { Link } from "react-router-dom";

import "../../styles/global.css";

class adminPlants extends React.Component {
  state = {
    plants: [],
    selectedPlant: null,
    newData: {},
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

  componentDidMount() {
    apiHandler
      .getPlants()
      .then((plants) => {
        const allPlants = plants;

        this.setState({
          plants: allPlants,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleClickedPlant = (plant) => {
    console.log("PLANTPLANT", plant);
    this.setState({
      selectedPlant: plant,
      newData: plant,
    });
  };

  handleChange = (event) => {
    console.log("hello");
    const key = event.target.name;
    const value = event.target.value;

    this.setState({
      newData: { [key]: value },
    });
  };

  handleDelete = (event) => {

    apiHandler
      .deletePlant(this.state.selectedPlant)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSubmitUpdate = (event) => {
    event.preventDefault();

    apiHandler
      .updatePlant(this.state.selectedPlant, this.state.newData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    apiHandler
      .getPlants()
      .then((plants) => {
        const allPlants = plants;

        this.setState({
          plants: allPlants,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("NEWDATA", this.state.newData);
    return (
      <div>
        <h1>Update a plant</h1>

        <div className="container">
          <div className="plantList">
            {this.state.plants.map((plant) => {
              return (
                <div
                  //ajouter ici une class active et non active pour changer le display quand l'item est cliqué
                  className={`plantCard`}
                  onClick={() => this.handleClickedPlant(plant)}
                >
                  <h2>{plant.name}</h2>
                  <h3>{plant.nomLatin}</h3>
                  <h4>{plant.famBotanique}</h4>
                </div>
              );
            })}
          </div>

          <Link to="/admin/adminPlants/add">Ajouter une nouvelle plante</Link>
        </div>

        {this.state.selectedPlant && (
          <div className="container">
            <div className="singlePlant">
              <form onSubmit={this.handleSubmitUpdate}>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input"
                  value={this.state.newData.name}
                  onChange={this.handleChange}
                />

                <label htmlFor="famBotanique">famBotanique</label>
                <input
                  type="text"
                  name="famBotanique"
                  id="famBotanique"
                  className="input"
                  value={this.state.newData.famBotanique}
                  onChange={this.handleChange}
                />

                <label htmlFor="nomLatin">nomLatin</label>
                <input
                  type="text"
                  name="nomLatin"
                  id="nomLatin"
                  className="input"
                  value={this.state.newData.nomLatin}
                  onChange={this.handleChange}
                />

                <label htmlFor="type">type</label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  className="input"
                  value={this.state.newData.type}
                  onChange={this.handleChange}
                />

                <label htmlFor="tailleFoliaire">tailleFoliaire</label>
                <input
                  type="text"
                  name="tailleFoliaire"
                  id="tailleFoliaire"
                  className="input"
                  value={this.state.newData.tailleFoliaire}
                  onChange={this.handleChange}
                />

                <label htmlFor="tailleRacine">tailleRacine</label>
                <input
                  type="text"
                  name="tailleRacine"
                  id="tailleRacine"
                  className="input"
                  value={this.state.newData.tailleRacine}
                  onChange={this.handleChange}
                />

                <label htmlFor="preferences">preferences</label>
                <input
                  type="text"
                  name="preferences"
                  id="preferences"
                  className="input"
                  value={this.state.newData.sol}
                  onChange={this.handleChange}
                />
                <label htmlFor="preferences">preferences soleil</label>
                <input
                  type="text"
                  name="preferences"
                  id="preferences"
                  className="input"
                  value={this.state.newData.soleil}
                  onChange={this.handleChange}
                />

                <label htmlFor="periodeSemis">periodeSemis</label>
                <input
                  type="text"
                  name="periodeSemis"
                  id="periodeSemis"
                  className="input"
                  value={this.state.newData.periodeSemis}
                  onChange={this.handleChange}
                />

                <label htmlFor="periodeRecolte">periodeRecolte</label>
                <input
                  type="text"
                  name="periodeRecolte"
                  id="periodeRecolte"
                  className="input"
                  value={this.state.newData.periodeRecolte}
                  onChange={this.handleChange}
                />

                <label htmlFor="maladies">maladies</label>
                <input
                  type="text"
                  name="maladies"
                  id="maladies"
                  className="input"
                  value={this.state.newData.maladies}
                  onChange={this.handleChange}
                />

                <label htmlFor="parasites">parasites</label>
                <input
                  type="text"
                  name="parasites"
                  id="parasites"
                  className="input"
                  value={this.state.newData.parasites}
                  onChange={this.handleChange}
                />

                <button>Update plant</button>

                <button onClick={this.handleDelete}>Delete this plant</button>
              </form>

              <h1>{this.state.selectedPlant.name}</h1>
              <h3>{this.state.selectedPlant.nomLatin}</h3>
              <h4>{this.state.selectedPlant.famBotanique}</h4>

              <h3>associations positives :</h3>
              {this.state.selectedPlant.associtationPos &&
                this.state.selectedPlant.associtationPos.map((assocPos) => {
                  return (
                    <div>
                      <h4>{assocPos.name}</h4>
                    </div>
                  );
                })}

              <h3>associations négatives :</h3>
              {this.state.selectedPlant.associtationNeg &&
                this.state.selectedPlant.associtationNeg.map((assocNeg) => {
                  return <h4>{assocNeg.name}</h4>;
                })}

              <h3>variétés : </h3>
              {this.state.selectedPlant.variete &&
                this.state.selectedPlant.variete.map((variete) => {
                  if (variete.ajoute) {
                    return <h2>{variete.name}</h2>;
                  }
                })}
              <Link to={`/variete/ajouter/${this.state.selectedPlant._id}`}>
                Ajouter une variete
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default adminPlants;
