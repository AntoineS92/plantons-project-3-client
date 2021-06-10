import React, { Component } from "react";
import { Link } from "react-router-dom";
import apiHandler from "../api/apiHandler";

export default class VeggisList extends Component {
  state = {
    plants: [],
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
          plants: plantList,
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
              <img src={this.state.selectedPlant.image} alt="plant" />
              <div className="singlePlant title">
                <h3>{this.state.selectedPlant.name}</h3>
                <h4>{this.state.selectedPlant.nomLatin}</h4>
              </div>
              <div className="singlePlant infos">
                <article className="articleInfo">
                  <h5 className="infoTitle">type</h5>
                  <p className="infoPara">{this.state.selectedPlant.type}</p>
                </article>

                <article className="articleInfo">
                  <h5 className="infoTitle">taille Foliaire</h5>
                  <p className="infoPara">
                    {this.state.selectedPlant.tailleFoliaire}
                  </p>
                </article>

                <article className="articleInfo">
                  <h5 className="infoTitle">taille système racinaire</h5>
                  <p className="infoPara">
                    {this.state.selectedPlant.tailleRacine}
                  </p>
                </article>

                <article className="articleInfo">
                  <h5 className="infoTitle">Sol</h5>
                  <p className="infoPara">
                    {this.state.selectedPlant.preferences.sol}
                  </p>
                </article>

                <article className="articleInfo">
                  <h5 className="infoTitle">Ensoleillement</h5>
                  <p className="infoPara">
                    {this.state.selectedPlant.preferences.soleil}
                  </p>
                </article>

                <article className="articleInfo">
                  <h5 className="infoTitle">maladies</h5>
                  <p className="infoPara">
                    {this.state.selectedPlant.maladies}
                  </p>
                </article>

                <article className="articleInfo">
                  <h5 className="infoTitle">parasites</h5>
                  <p className="infoPara">
                    {this.state.selectedPlant.parasites}
                  </p>
                </article>

                <article className="articleInfo">
                  <h5 className="infoTitle"></h5>
                  <p className="infoPara"></p>
                </article>
              </div>

              <div className="singlePlantMonth">
                <div className="singlePlantSemis">
                  <h5>Periode de Semis</h5>
                  {this.state.selectedPlant.periodeSemis.map((data) => {
                    return <span>{data} </span>;
                  })}
                </div>
                <div className="singlePlantRecolte">
                  <h5>Periode de Recolte</h5>
                  {this.state.selectedPlant.periodeRecolte.map((data) => {
                    return <span>{data} </span>;
                  })}
                </div>
              </div>
              {/* <h3>associations positives :</h3>
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
                })} */}

              <div className="varietes">
                <h2 className="varieteTitle">variétés : </h2>
                <article className="listVarietes">
                  {this.state.selectedPlant.variete &&
                    this.state.selectedPlant.variete.map((variete) => {
                      if (variete.ajoute) {
                        return (
                          <div className="singleVariete">
                            <h3 className="singleVarieteName">
                              {variete.name}
                            </h3>
                            <h4 className="singleVarieteOrigine">
                              {variete.origine}
                            </h4>
                            <img
                              className="singleVarieteImage"
                              src={variete.image}
                              alt="variete"
                            />
                          </div>
                        );
                      }
                    })}
                </article>
                <Link to={`/variete/ajouter/${this.state.selectedPlant._id}`}>
                  Ajouter une variete
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
