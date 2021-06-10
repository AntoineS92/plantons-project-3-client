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

  // handleClickedPlant = (plant) => {
  //   console.log("PLANTPLANT", plant);
  //   this.setState({
  //     selectedPlant: plant,
  //     newData: plant,
  //   });
  // };

  handleClickedPlant = (e, plant) => {
    console.log("hello", e.currentTarget);

    const divs = document.getElementsByClassName("veggieCard");
    console.log("HELEOIKFNHEZO0BF0", divs);

    for (let index = 0; index < divs.length; index++) {
      divs[index].className = "veggieCard";
    }

    this.setState({
      selectedPlant: plant,
      selectedPlantBorder: !this.state.selectedPlantBorder,
      newData: plant,
    });

    e.currentTarget.classList.toggle("active");
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
        <h1 className="pageTitle updatePage">Update a plant</h1>
        <div className="updateDisplay">
          <div className="container">
            <div className="plantList">
              <div className={`veggieCard`}>
                <div className="plantImage">
                  <img
                    src="https://www.coloriageetdessins.com/images/nature/l-eacute-gume/legumes-sur-table-18367-660x400.jpg"
                    alt="Plant"
                  />
                </div>
                <div className="veggieCardInfo">
                  <Link to="/admin/adminPlants/add">
                    Ajouter une nouvelle plante
                  </Link>
                </div>
              </div>
              {this.state.plants.map((veggie) => {
                return (
                  <div
                    //ajouter ici une class active et non active pour changer le display quand l'item est cliqué
                    className={`veggieCard`}
                    onClick={(e) => this.handleClickedPlant(e, veggie)}
                  >
                    <div className="plantImage">
                      <img src={veggie.image} alt="Plant" />
                    </div>
                    <div className="veggieCardInfo">
                      <h2>{veggie.name}</h2>
                      <h3>{veggie.nomLatin}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {this.state.selectedPlant && (
            <div className="container">
              <div className="singlePlant">
                <form
                  className="plantUpdateForm"
                  onSubmit={this.handleSubmitUpdate}
                >
                  <div className="labelInput">
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="input"
                      value={this.state.newData.name}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="famBotanique">famBotanique</label>
                    <input
                      type="text"
                      name="famBotanique"
                      id="famBotanique"
                      className="input"
                      value={this.state.newData.famBotanique}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="nomLatin">nomLatin</label>
                    <input
                      type="text"
                      name="nomLatin"
                      id="nomLatin"
                      className="input"
                      value={this.state.newData.nomLatin}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="type">type</label>
                    <input
                      type="text"
                      name="type"
                      id="type"
                      className="input"
                      value={this.state.newData.type}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="tailleFoliaire">tailleFoliaire</label>
                    <input
                      type="text"
                      name="tailleFoliaire"
                      id="tailleFoliaire"
                      className="input"
                      value={this.state.newData.tailleFoliaire}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="tailleRacine">tailleRacine</label>
                    <input
                      type="text"
                      name="tailleRacine"
                      id="tailleRacine"
                      className="input"
                      value={this.state.newData.tailleRacine}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="preferences">preferences</label>
                    <input
                      type="text"
                      name="preferences"
                      id="preferences"
                      className="input"
                      value={this.state.newData.sol}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="preferences">preferences soleil</label>
                    <input
                      type="text"
                      name="preferences"
                      id="preferences"
                      className="input"
                      value={this.state.newData.soleil}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="periodeSemis">periodeSemis</label>
                    <input
                      type="text"
                      name="periodeSemis"
                      id="periodeSemis"
                      className="input"
                      value={this.state.newData.periodeSemis}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="periodeRecolte">periodeRecolte</label>
                    <input
                      type="text"
                      name="periodeRecolte"
                      id="periodeRecolte"
                      className="input"
                      value={this.state.newData.periodeRecolte}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="maladies">maladies</label>
                    <input
                      type="text"
                      name="maladies"
                      id="maladies"
                      className="input"
                      value={this.state.newData.maladies}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="labelInput">
                    <label htmlFor="parasites">parasites</label>
                    <input
                      type="text"
                      name="parasites"
                      id="parasites"
                      className="input"
                      value={this.state.newData.parasites}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="formButtons">
                    <button>Update plant</button>
                    <button onClick={this.handleDelete}>
                      Delete this plant
                    </button>
                  </div>
                </form>

                <Link to={`/variete/ajouter/${this.state.selectedPlant._id}`}>
                  Ajouter une variete
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default adminPlants;
