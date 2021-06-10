import React from "react";
import apiHandler from "../../api/apiHandler";

import "../../styles/global.css";

class adminVariete extends React.Component {
  state = {
    varietes: [],
    ajoute: false,
  };

  componentDidMount() {
    apiHandler
      .getVariete()
      .then((varietes) => {
        const allVarietes = varietes;

        this.setState({
          varietes: allVarietes,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //we were are changing the value of "ajoute" from false to true
  handleAddVariete = (variete) => {
    const updatedVariete = variete;
    updatedVariete.ajoute = true;

    apiHandler
      .updateVariete(updatedVariete)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    const newArray = this.state.varietes.filter((unit) => !unit.ajoute);
    this.setState({
      varietes: newArray,
    });
  };

  handleDelete = (variete) => {
    console.log("delete!!!", variete);

    apiHandler
      .deleteVariete(variete)
      .then((data) => {
        //we update the state with the new list coming from data base
        //we need to fetch again the data base because the item has been delete there but not in the State
        apiHandler
          .getVariete()
          .then((varietes) => {
            const allVarietes = varietes;

            this.setState({
              varietes: allVarietes,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("Varietes : ", this.state.varietes);
    return (
      <div className="varietePage">
        <div className="container">
          <div className="varietesToAdd">
            <h2>Variétés à ajouter</h2>

            {this.state.varietes.map((variete) => {
              if (!variete.ajoute) {
                return (
                  <div className="addSingleVariete">
                    <h3>{variete.name}</h3>
                    <h4>{variete.origine}</h4>
                    <img src={variete.image} alt="variete" />
                    <button onClick={() => this.handleAddVariete(variete)}>
                      Ajouter la variété
                    </button>
                    <button onClick={() => this.handleDelete(variete)}>
                      Supprimer
                    </button>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="container">
          <div className="allVariete">
            <h2>Liste de toutes les variétés existentes</h2>
            {this.state.varietes.map((variete) => {
              return (
                <div className="addSingleVariete">
                  <h3>{variete.name}</h3>
                  <h4>{variete.origine}</h4>
                  <button onClick={() => this.handleDelete(variete)}>
                    Supprimer
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default adminVariete;
