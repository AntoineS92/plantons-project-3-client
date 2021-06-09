import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

export default class VeggisList extends Component {
  state = {
    veggies: [],
    selectedPlant: null,
    selectedPlantBorder: false,
  };

  componentDidMount() {
    apiHandler
      .getPlants()
      .then((plants) => {
        console.log("plants data = ", plants);
        const plantList = plants;
        this.setState({
          veggies: plantList,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    apiHandler
      .getVariete()
      .then((variete) => {
        console.log(variete);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    });

    e.currentTarget.classList.toggle("active");
  };

  render() {
    console.log("STATE ", this.state.selectedPlant);

    return (
      <>
        <div className="container">
          <div className="plantList">
            {this.state.veggies.map((veggie) => {
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
      </>
    );
  }
}
